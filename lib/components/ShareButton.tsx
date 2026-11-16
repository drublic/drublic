import React, { useEffect, useState } from "react";

type ShareButtonProps = {
  title: string;
  text?: string;
  url: string;
  className?: string;
};

/**
 * Opens the native share sheet (Web Share API). Where that is unavailable,
 * e.g. most desktop browsers, it copies the link and says so.
 */
const ShareButton = ({ title, text, url, className }: ShareButtonProps) => {
  const [status, setStatus] = useState<"" | "copied" | "failed">("");

  useEffect(() => {
    if (!status) return;
    const timer = window.setTimeout(() => setStatus(""), 2500);
    return () => window.clearTimeout(timer);
  }, [status]);

  const share = async () => {
    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title, text, url });
      } catch {
        // Cancelled by the user — nothing to do.
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  };

  return (
    <span className={className}>
      <button
        type="button"
        className="share-button"
        onClick={share}
        aria-label="Share this article"
        title="Share this article"
      >
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
          <path d="M16 6l-4-4-4 4" />
          <path d="M12 2v13" />
        </svg>
        <span className="share-button__label">Share</span>
      </button>
      <span className="share-button__status" role="status" aria-live="polite">
        {status === "copied"
          ? "Link copied"
          : status === "failed"
            ? "Copy failed"
            : ""}
      </span>
    </span>
  );
};

export default ShareButton;
