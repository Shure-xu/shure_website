"use client";

import type { MouseEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const workTransitions = {
  dynamic: {
    href: "/works/dynamic",
    label: "Dynamic",
  },
  brand: {
    href: "/works/brand",
    label: "Brand",
  },
  visual: {
    href: "/works",
    label: "Visual",
  },
} as const;

export type WorkTransitionKey = keyof typeof workTransitions;

export const workTransitionStorageKey = "work-transition";

const transitionDuration = 680;

type WorksTransitionLinkProps = {
  children: ReactNode;
  className?: string;
  transition: WorkTransitionKey;
};

export function isWorkTransitionKey(
  value: string | null,
): value is WorkTransitionKey {
  return value !== null && value in workTransitions;
}

export function WorksTransitionLink({
  children,
  className,
  transition,
}: WorksTransitionLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasNavigatedRef = useRef(false);
  const { href } = workTransitions[transition];

  useEffect(() => {
    return () => {
      const hasPendingTransition = timeoutRef.current !== null;

      if (hasPendingTransition) {
        clearTimeout(timeoutRef.current);
      }

      if (hasPendingTransition && !hasNavigatedRef.current) {
        document.body.classList.remove("is-works-entering");
        delete document.body.dataset.workTransition;
        window.sessionStorage.removeItem(workTransitionStorageKey);
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
      router.push(href, { scroll: true });
      return;
    }

    document.body.dataset.workTransition = transition;
    document.body.classList.add("is-works-entering");
    window.sessionStorage.setItem(workTransitionStorageKey, transition);
    setIsTransitioning(true);

    timeoutRef.current = setTimeout(() => {
      hasNavigatedRef.current = true;
      router.push(href, { scroll: true });
    }, transitionDuration);
  }

  return (
    <Link
      aria-disabled={isTransitioning}
      className={className}
      href={href}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
