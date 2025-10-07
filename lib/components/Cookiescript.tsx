const Cookiescript = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: `
        <script src="https://www.cookieconsent.com/releases/4.0.0/cookie-consent.js"></script>
        <script>
        function initCookieConsent(retryCount = 0) {
          const maxRetries = 50; // Maximum 5 seconds (50 * 100ms)

          if (typeof cookieconsent !== 'undefined') {
            try {
              cookieconsent.run({
                "notice_banner_type":"headline",
                "consent_type":"express",
                "palette":"light",
                "language":"en",
                "page_load_consent_levels":["strictly-necessary"],
                "notice_banner_reject_button_hide":false,
                "preferences_center_close_button_hide":false,
                "website_name":"drublic",
                "open_preferences_center_selector":"#privacy-preferences",
                "website_privacy_policy_url":"https://vc-six.vercel.app/privacy"
              });
            } catch (error) {
              console.warn('Failed to initialize cookie consent:', error);
            }
          } else if (retryCount < maxRetries) {
            // Retry after a short delay if cookieconsent is not yet loaded
            setTimeout(() => initCookieConsent(retryCount + 1), 100);
          } else {
            console.warn('Cookie consent script failed to load after maximum retries');
          }
        }

        document.addEventListener('DOMContentLoaded', function () {
          initCookieConsent();
        });
        </script>

        <div id="privacy-preferences"></div>
      `,
    }}
  />
);

export default Cookiescript;
