"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { aboutTransitionStorageKey } from "@/components/about-transition-link";

const aboutArrivalRevealDuration = 1850;

export function AboutTransitionOverlay() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (
      pathname !== "/about" ||
      window.sessionStorage.getItem(aboutTransitionStorageKey) !== "true"
    ) {
      return;
    }

    window.sessionStorage.removeItem(aboutTransitionStorageKey);
    setIsVisible(true);

    const frame = requestAnimationFrame(() => {
      document.body.classList.add("is-about-arriving");
    });
    const timeout = window.setTimeout(() => {
      setIsVisible(false);
      document.body.classList.remove(
        "is-about-entering",
        "is-about-arriving",
      );
    }, aboutArrivalRevealDuration);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
      document.body.classList.remove(
        "is-about-entering",
        "is-about-arriving",
      );
    };
  }, [pathname]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="about-arrival-overlay" aria-hidden="true">
      <span className="about-arrival-overlay__word">Me</span>
    </div>
  );
}
