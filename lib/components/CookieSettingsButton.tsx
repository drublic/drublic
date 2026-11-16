import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

type CookieConsentApi = { openPreferencesCenter?: () => void };

const openPreferences = () => {
  const api = (window as unknown as { cookieconsent?: CookieConsentApi })
    .cookieconsent;
  if (api?.openPreferencesCenter) {
    api.openPreferencesCenter();
    return;
  }
  // Script not ready yet: fall back to the selector the banner listens on.
  document.getElementById("privacy-preferences")?.click();
};

/** Opens the cookie consent preference center (see Cookiescript). */
const CookieSettingsButton = ({
  className,
  children = "Cookie settings",
}: Props) => (
  <button
    type="button"
    className={className}
    onClick={openPreferences}
  >
    {children}
  </button>
);

export default CookieSettingsButton;
