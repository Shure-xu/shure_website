"use client";

import { useEffect, useState } from "react";

type LoaderPhase = "counting" | "revealing" | "returning" | "done";

const homeReturnRevealDuration = 1850;

export function HeroLoader() {
  const [isHomeReturning] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.sessionStorage.getItem("is-home-returning") === "true";
  });
  const [count, setCount] = useState(() => {
    if (typeof window === "undefined") {
      return 0;
    }

    return isHomeReturning ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 99
      : 0;
  });
  const [phase, setPhase] = useState<LoaderPhase>(() => {
    if (typeof window === "undefined") {
      return "counting";
    }

    return isHomeReturning ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? isHomeReturning
        ? "returning"
        : "done"
      : "counting";
  });

  useEffect(() => {
    if (isHomeReturning) {
      window.sessionStorage.removeItem("is-home-returning");
      const frame = requestAnimationFrame(() => {
        document.body.classList.add("is-home-arriving");
      });
      const timeout = window.setTimeout(() => {
        setPhase("done");
        document.body.classList.remove(
          "is-home-returning",
          "is-home-arriving",
        );
      }, homeReturnRevealDuration);

      return () => {
        cancelAnimationFrame(frame);
        window.clearTimeout(timeout);
        document.body.classList.remove(
          "is-home-returning",
          "is-home-arriving",
        );
      };
    }

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
  }, [isHomeReturning]);

  if (phase === "done") {
    return null;
  }

  if (phase === "returning") {
    return (
      <div className="home-return-overlay" aria-hidden="true">
        <span className="home-return-overlay__word">Shure</span>
      </div>
    );
  }

  const travel = `calc(${count / 99} * (100vw - clamp(6rem, 12vw, 10.8rem) - 56px))`;

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
