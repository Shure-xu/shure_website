"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      anchors: true,
      autoRaf: true,
      duration: 1.15,
      smoothWheel: true,
      stopInertiaOnNavigate: true,
      wheelMultiplier: 0.9,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
