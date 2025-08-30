import React, { useEffect, useRef } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

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

    // Add entrance animation
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.filter = "blur(2px)";
    element.style.transition = `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;

    const timer = setTimeout(() => {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
      element.style.filter = "blur(0)";
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, duration]);

  return (
    <div
      ref={elementRef}
      className={`page-transition-element ${className}`}
      style={{
        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </div>
  );
};
