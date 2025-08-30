import { useEffect, useCallback } from "react";
import { useRouter } from "next/router";

export const useViewTransition = () => {
  const router = useRouter();

  const startViewTransition = useCallback(
    async (callback: () => void) => {
      // Check if view transitions are supported
      if (!(document as any).startViewTransition) {
        callback();
        return;
      }

      try {
        const transition = (document as any).startViewTransition(() => {
          callback();
        });

        // Add custom transition names for different page types
        const pageType = getPageType(router.asPath);
        document.documentElement.style.setProperty(
          "--page-transition",
          pageType
        );

        // Add fluffy entrance effect
        document.documentElement.classList.add("page-transitioning");

        await transition.finished;

        // Remove transition classes after animation completes
        setTimeout(() => {
          document.documentElement.classList.remove("page-transitioning");
        }, 100);
      } catch (error) {
        // Fallback if view transition fails
        callback();
      }
    },
    [router.asPath]
  );

  const getPageType = (path: string): string => {
    if (path === "/") return "home";
    if (path.startsWith("/blog")) return "blog";
    if (path.startsWith("/ai")) return "ai";
    if (path.startsWith("/leadership")) return "leadership";
    if (path === "/resume") return "resume";
    if (path === "/podcasting") return "podcasting";
    if (path === "/portfolio") return "portfolio";
    return "default";
  };

  useEffect(() => {
    // Add view transition support check
    if (!(document as any).startViewTransition) {
      console.warn("View Transitions API not supported in this browser");
    }
  }, []);

  return { startViewTransition };
};
