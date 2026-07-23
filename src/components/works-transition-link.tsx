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
export const workTransitionModeStorageKey = "work-transition-mode";

export type WorkTransitionMode = "category" | "inter-work";

const categoryTransitionDuration = 420;
const dynamicWorkPath = "/works/dynamic";
const brandWorkPath = "/works/brand";
const visualWorkPath = "/works";
const interWorkTransitionPaths = new Set([
  dynamicWorkPath,
  brandWorkPath,
  visualWorkPath,
]);

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

export function isWorkTransitionMode(
  value: string | null,
): value is WorkTransitionMode {
  return value === "category" || value === "inter-work";
}

function isInterWorkTransition(pathname: string, href: string) {
  return (
    pathname !== href &&
    interWorkTransitionPaths.has(pathname) &&
    interWorkTransitionPaths.has(href)
  );
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
      const timeout = timeoutRef.current;
      const hasPendingTransition = timeout !== null;

      if (timeout !== null) {
        clearTimeout(timeout);
      }

      if (hasPendingTransition && !hasNavigatedRef.current) {
        document.body.classList.remove("is-works-entering");
        delete document.body.dataset.workTransition;
        delete document.body.dataset.workTransitionMode;
        window.sessionStorage.removeItem(workTransitionStorageKey);
        window.sessionStorage.removeItem(workTransitionModeStorageKey);
      }
    };
  }, []);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const shouldUseInterWorkTransition = isInterWorkTransition(pathname, href);
    const shouldUseAboutDynamicTransition =
      pathname === "/about" && transition === "dynamic";
    const shouldUseTransition =
      pathname === "/" ||
      shouldUseAboutDynamicTransition ||
      shouldUseInterWorkTransition;

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

    const transitionMode: WorkTransitionMode = shouldUseInterWorkTransition
      ? "inter-work"
      : "category";

    document.body.dataset.workTransition = transition;
    document.body.dataset.workTransitionMode = transitionMode;
    document.body.classList.add("is-works-entering");
    window.sessionStorage.setItem(workTransitionStorageKey, transition);
    window.sessionStorage.setItem(
      workTransitionModeStorageKey,
      transitionMode,
    );
    setIsTransitioning(true);

    timeoutRef.current = setTimeout(() => {
      hasNavigatedRef.current = true;
      router.push(href, { scroll: true });
    }, categoryTransitionDuration);
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
