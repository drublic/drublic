import React, { createContext, useContext, ReactNode } from "react";
import { useViewTransition } from "../hooks/useViewTransition";

interface ViewTransitionContextType {
  startViewTransition: (callback: () => void) => Promise<void>;
}

const ViewTransitionContext = createContext<
  ViewTransitionContextType | undefined
>(undefined);

export const useViewTransitionContext = () => {
  const context = useContext(ViewTransitionContext);
  if (!context) {
    throw new Error(
      "useViewTransitionContext must be used within a ViewTransitionProvider"
    );
  }
  return context;
};

interface ViewTransitionProviderProps {
  children: ReactNode;
}

export const ViewTransitionProvider: React.FC<ViewTransitionProviderProps> = ({
  children,
}) => {
  const { startViewTransition } = useViewTransition();

  return (
    <ViewTransitionContext.Provider value={{ startViewTransition }}>
      {children}
    </ViewTransitionContext.Provider>
  );
};
