const Cookiescript = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: `
        <script src="https://www.cookieconsent.com/releases/4.0.0/cookie-consent.js"></script>
        <script>
        document.addEventListener('DOMContentLoaded', function () {
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
        });
        </script>

        <div id="privacy-preferences"></div>
      `,
    }}
  />
);

export default Cookiescript;
