"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollAnimation<T extends Element = HTMLDivElement>(
  options: ScrollAnimationOptions = {}
) {
  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", once = true } =
    options;

  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
          if (once) observer.unobserve(element);
        } else if (!once && !hasAnimated) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once, hasAnimated]);

  return { ref, isVisible };
}

/** Hook for staggered children animations */
export function useStaggerAnimation(
  childCount: number,
  baseDelay = 0.1
): string[] {
  return Array.from(
    { length: childCount },
    (_, i) => `${baseDelay * i}s`
  );
}

/** Hook to track scroll position */
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollY(currentScrollY);
      setScrollPercent(docHeight > 0 ? (currentScrollY / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollY, scrollPercent };
}