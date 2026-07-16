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

const categoryTransitionDuration = 680;
const interWorkTransitionDuration = 300;
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

function createInterWorkSnapshot() {
  const sourcePage = document.querySelector("main");

  if (!sourcePage) {
    return;
  }

  const snapshot = document.createElement("div");
  const viewport = document.createElement("div");
  const pageClone = sourcePage.cloneNode(true) as HTMLElement;

  sourcePage.querySelectorAll("video").forEach((video) => {
    video.muted = true;
    video.volume = 0;
  });
  pageClone.querySelectorAll("video").forEach((video) => {
    video.defaultMuted = true;
    video.muted = true;
    video.volume = 0;
    video.setAttribute("muted", "");
  });

  snapshot.className = "inter-work-transition-snapshot";
  snapshot.setAttribute("aria-hidden", "true");
  viewport.className = "inter-work-transition-snapshot__viewport";
  pageClone.classList.add("inter-work-transition-snapshot__page");
  pageClone.style.top = `-${window.scrollY}px`;
  pageClone.querySelector(":scope > header")?.remove();
  viewport.append(pageClone);
  snapshot.append(viewport);
  document.body.append(snapshot);

  const removeSnapshot = () => {
    snapshot.remove();
  };

  snapshot.addEventListener("animationend", (event) => {
    if (event.target === snapshot) {
      removeSnapshot();
    }
  });
  window.setTimeout(removeSnapshot, interWorkTransitionDuration + 100);
  window.requestAnimationFrame(() => {
    snapshot.classList.add("is-leaving");
  });
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
    const shouldUseTransition =
      pathname === "/" || shouldUseInterWorkTransition;

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

    if (shouldUseInterWorkTransition) {
      setIsTransitioning(true);
      createInterWorkSnapshot();
      router.push(href, { scroll: true });
      return;
    }

    const transitionMode: WorkTransitionMode = "category";

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
