"use client";

import type { MouseEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type AboutTransitionLinkProps = {
  children: ReactNode;
  className?: string;
};

const aboutHref = "/about";
const transitionDuration = 680;

export const aboutTransitionStorageKey = "about-transition";

export function AboutTransitionLink({
  children,
  className,
}: AboutTransitionLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasNavigatedRef = useRef(false);

  useEffect(() => {
    return () => {
      const timeout = timeoutRef.current;
      const hasPendingTransition = timeout !== null;

      if (timeout !== null) {
        clearTimeout(timeout);
      }

      if (hasPendingTransition && !hasNavigatedRef.current) {
        document.body.classList.remove("is-about-entering");
        window.sessionStorage.removeItem(aboutTransitionStorageKey);
      }
    };
  }, []);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const shouldUseTransition = pathname === "/";

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey ||
      !shouldUseTransition ||
      isTransitioning
    ) {
      return;
    }

    event.preventDefault();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      router.push(aboutHref, { scroll: true });
      return;
    }

    document.body.classList.add("is-about-entering");
    window.sessionStorage.setItem(aboutTransitionStorageKey, "true");
    setIsTransitioning(true);

    timeoutRef.current = setTimeout(() => {
      hasNavigatedRef.current = true;
      router.push(aboutHref, { scroll: true });
    }, transitionDuration);
  }

  return (
    <Link
      aria-disabled={isTransitioning}
      className={className}
      href={aboutHref}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
