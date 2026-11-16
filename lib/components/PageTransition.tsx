import React, { useEffect, useRef } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger in ms once the element scrolls into view (capped at 240ms). */
  delay?: number;
  duration?: number;
}

/**
 * Reveals sections as they scroll into view. Content is server-rendered
 * visible; only sections that start below the fold are hidden and revealed,
 * so there is no flash on first paint. Skipped for reduced-motion users.
 */
export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 600,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    // Already on screen at mount: leave it alone.
    if (element.getBoundingClientRect().top < window.innerHeight) return;

    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
    element.style.transitionDelay = `${Math.min(delay, 240)}ms`;

    const reveal = () => {
      element.style.opacity = "1";
      element.style.transform = "none";
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          reveal();
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      reveal();
    };
  }, [delay, duration]);

  return (
    <div ref={elementRef} className={`page-transition-element ${className}`}>
      {children}
    </div>
  );
};
