"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  isWorkTransitionKey,
  workTransitions,
  workTransitionStorageKey,
  type WorkTransitionKey,
} from "@/components/works-transition-link";

const workArrivalRevealDuration = 1850;

export function WorksTransitionOverlay() {
  const pathname = usePathname();
  const [transition, setTransition] = useState<WorkTransitionKey | null>(null);

  useEffect(() => {
    const storedTransition = window.sessionStorage.getItem(
      workTransitionStorageKey,
    );

    if (
      !isWorkTransitionKey(storedTransition) ||
      workTransitions[storedTransition].href !== pathname
    ) {
      return;
    }

    window.sessionStorage.removeItem(workTransitionStorageKey);
    setTransition(storedTransition);

    const frame = requestAnimationFrame(() => {
      document.body.classList.add("is-works-arriving");
    });
    const timeout = window.setTimeout(() => {
      setTransition(null);
      document.body.classList.remove(
        "is-works-entering",
        "is-works-arriving",
      );
      delete document.body.dataset.workTransition;
    }, workArrivalRevealDuration);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
      document.body.classList.remove(
        "is-works-entering",
        "is-works-arriving",
      );
      delete document.body.dataset.workTransition;
    };
  }, [pathname]);

  if (!transition) {
    return null;
  }

  return (
    <div className="works-arrival-overlay" aria-hidden="true">
      <span className="works-arrival-overlay__word">
        {workTransitions[transition].label}
      </span>
    </div>
  );
}
