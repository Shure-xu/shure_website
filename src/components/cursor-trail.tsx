"use client";

import { useEffect, useRef } from "react";

const OFFSET_X = 54;
const OFFSET_Y = 34;
const EASE = 0.085;

export function CursorTrail() {
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trail = trailRef.current;

    if (!trail) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (reduceMotion.matches || !finePointer.matches) {
      return;
    }

    let frame = 0;
    let visible = false;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = currentX;
    let targetY = currentY;
    let hasPointer = false;

    const render = () => {
      currentX += (targetX - currentX) * EASE;
      currentY += (targetY - currentY) * EASE;

      trail.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      frame = window.requestAnimationFrame(render);
    };

    const show = () => {
      if (visible) {
        return;
      }

      visible = true;
      trail.dataset.visible = "true";
      trail.style.opacity = "1";
      trail.style.scale = "1";
    };

    const hide = () => {
      visible = false;
      trail.dataset.visible = "false";
      trail.style.opacity = "0";
      trail.style.scale = "0.86";
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") {
        hide();
        return;
      }

      targetX = event.clientX + OFFSET_X;
      targetY = event.clientY + OFFSET_Y;

      if (!hasPointer) {
        currentX = targetX;
        currentY = targetY;
        hasPointer = true;
      }

      show();
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", hide);
    document.addEventListener("visibilitychange", hide);
    frame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", hide);
      document.removeEventListener("visibilitychange", hide);
    };
  }, []);

  return (
    <div
      ref={trailRef}
      className="pointer-events-none fixed left-0 top-0 z-[9997] inline-flex h-9 min-w-[3.8rem] select-none items-center justify-center rounded-full bg-[#479cff] px-3 text-[1.1rem] font-[750] leading-none tracking-normal text-white shadow-[0_0.45rem_1.2rem_rgb(71_156_255_/_22%)] transition-[opacity,scale] duration-200 ease-out will-change-[transform,opacity,scale] motion-reduce:hidden"
      data-visible="false"
      aria-hidden="true"
      style={{
        opacity: 0,
        scale: 0.86,
        transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
      }}
    >
      Hi！
    </div>
  );
}
