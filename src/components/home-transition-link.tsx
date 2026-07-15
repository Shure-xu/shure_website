"use client";

import type { MouseEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type HomeTransitionLinkProps = {
  children: ReactNode;
  className?: string;
};

const homeHref = "/";
const transitionDuration = 680;

export function HomeTransitionLink({
  children,
  className,
}: HomeTransitionLinkProps) {
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
        document.body.classList.remove("is-home-returning");
        window.sessionStorage.removeItem("is-home-returning");
      }
    };
  }, [pathname]);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const shouldUseTransition = pathname.startsWith("/works");

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
      router.push(homeHref, { scroll: true });
      return;
    }

    document.body.classList.add("is-home-returning");
    window.sessionStorage.setItem("is-home-returning", "true");
    setIsTransitioning(true);

    timeoutRef.current = setTimeout(() => {
      hasNavigatedRef.current = true;
      router.push(homeHref, { scroll: true });
    }, transitionDuration);
  }

  return (
    <Link
      aria-disabled={isTransitioning}
      className={className}
      href={homeHref}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
