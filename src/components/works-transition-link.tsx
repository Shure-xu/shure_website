"use client";

import type { MouseEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type WorksTransitionLinkProps = {
  children: ReactNode;
  className?: string;
};

export function WorksTransitionLink({
  children,
  className,
}: WorksTransitionLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.classList.remove("is-works-leaving");

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      document.body.classList.remove("is-works-leaving");
    };
  }, [pathname]);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey ||
      pathname === "/works"
    ) {
      return;
    }

    event.preventDefault();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      router.push("/works");
      return;
    }

    document.body.classList.add("is-works-leaving");
    setIsTransitioning(true);
    timeoutRef.current = setTimeout(() => {
      router.push("/works");
    }, 920);
  }

  return (
    <a
      aria-disabled={isTransitioning}
      className={className}
      href="/works"
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
