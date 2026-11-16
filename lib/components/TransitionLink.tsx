import React from "react";
import Link from "next/link";
import { useViewTransitionContext } from "./ViewTransitionProvider";
import { useRouter } from "next/router";

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  href,
  children,
  className,
  title,
  onClick,
  ...props
}) => {
  const { startViewTransition } = useViewTransitionContext();
  const router = useRouter();

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Let the browser handle new-tab / new-window / download clicks.
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      (props.target && props.target !== "_self")
    ) {
      return;
    }

    e.preventDefault();

    // Don't transition if it's the same page
    if (router.asPath === href) {
      return;
    }

    // Call custom onClick if provided
    if (onClick) {
      onClick();
    }

    // Start view transition
    await startViewTransition(() => {
      router.push(href);
    });
  };

  return (
    <Link
      href={href}
      className={className}
      title={title}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
};
