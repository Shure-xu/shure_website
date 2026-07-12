"use client";

import { useEffect, useState } from "react";

type LoaderPhase = "counting" | "revealing" | "done";

export function HeroLoader() {
  const [count, setCount] = useState(() => {
    if (typeof window === "undefined") {
      return 0;
    }

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 99 : 0;
  });
  const [phase, setPhase] = useState<LoaderPhase>(() => {
    if (typeof window === "undefined") {
      return "counting";
    }

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "done" : "counting";
  });

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      return;
    }

    const countDuration = 1800;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / countDuration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.min(99, Math.round(eased * 99)));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setCount(99);
        window.setTimeout(() => setPhase("revealing"), 180);
        window.setTimeout(() => setPhase("done"), 1150);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, []);

  if (phase === "done") {
    return null;
  }

  const travel = `calc(${count / 99} * (100vw - clamp(4.8rem, 9vw, 9rem) - 32px))`;

  return (
    <div
      id="loader"
      className={phase === "revealing" ? "is-revealing" : ""}
      aria-hidden="true"
    >
      <div
        id="loaderText"
        style={{
          transform: `translateX(${travel})`,
        }}
      >
        {count}
      </div>
    </div>
  );
}
