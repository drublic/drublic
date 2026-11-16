import { useCallback } from "react";
import { Router } from "next/router";

// Safety net so a failed navigation can never leave the page frozen.
const MAX_WAIT_MS = 1000;

/**
 * Resolves once Next has rendered the next page (or the navigation failed),
 * so the View Transition captures the *new* page as its end state.
 */
const waitForRouteChange = () =>
  new Promise<void>((resolve) => {
    const done = () => {
      Router.events.off("routeChangeComplete", done);
      Router.events.off("routeChangeError", done);
      window.clearTimeout(timer);
      // Next resolves routeChangeComplete after React has committed the new
      // page. Don't wait for a frame here: rendering is paused while the
      // transition callback runs, so rAF would never fire.
      resolve();
    };
    const timer = window.setTimeout(done, MAX_WAIT_MS);
    Router.events.on("routeChangeComplete", done);
    Router.events.on("routeChangeError", done);
  });

export const useViewTransition = () => {
  const startViewTransition = useCallback(
    async (navigate: () => unknown) => {
      const doc = document as Document & {
        startViewTransition?: (cb: () => Promise<void>) => {
          finished: Promise<void>;
        };
      };

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (!doc.startViewTransition || reduceMotion) {
        navigate();
        return;
      }

      try {
        const transition = doc.startViewTransition(async () => {
          const rendered = waitForRouteChange();
          navigate();
          await rendered;
        });
        await transition.finished;
      } catch {
        // Transition was skipped or aborted; navigation already happened.
      }
    },
    []
  );

  return { startViewTransition };
};
