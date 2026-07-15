"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  isWorkTransitionKey,
  isWorkTransitionMode,
  workTransitions,
  workTransitionModeStorageKey,
  workTransitionStorageKey,
  type WorkTransitionKey,
  type WorkTransitionMode,
} from "@/components/works-transition-link";

const workArrivalRevealDuration = 1850;

export function WorksTransitionOverlay() {
  const pathname = usePathname();
  const [transition, setTransition] = useState<WorkTransitionKey | null>(null);
  const [transitionMode, setTransitionMode] =
    useState<WorkTransitionMode | null>(null);

  useEffect(() => {
    const storedTransition = window.sessionStorage.getItem(
      workTransitionStorageKey,
    );
    const storedTransitionMode = window.sessionStorage.getItem(
      workTransitionModeStorageKey,
    );

    if (
      !isWorkTransitionKey(storedTransition) ||
      workTransitions[storedTransition].href !== pathname
    ) {
      return;
    }

    const mode = isWorkTransitionMode(storedTransitionMode)
      ? storedTransitionMode
      : "category";

    window.sessionStorage.removeItem(workTransitionStorageKey);
    window.sessionStorage.removeItem(workTransitionModeStorageKey);
    setTransition(storedTransition);
    setTransitionMode(mode);

    const frame = requestAnimationFrame(() => {
      document.body.classList.add("is-works-arriving");
    });
    const timeout = window.setTimeout(() => {
      setTransition(null);
      setTransitionMode(null);
      document.body.classList.remove(
        "is-works-entering",
        "is-works-arriving",
      );
      delete document.body.dataset.workTransition;
      delete document.body.dataset.workTransitionMode;
    }, workArrivalRevealDuration);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
      document.body.classList.remove(
        "is-works-entering",
        "is-works-arriving",
      );
      delete document.body.dataset.workTransition;
      delete document.body.dataset.workTransitionMode;
    };
  }, [pathname]);

  if (!transition || transitionMode === "inter-work") {
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
