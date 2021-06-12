const Cookiescript = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: `
        <script>
          window.addEventListener("load", function (){
            window.cookieconsent.initialise({
              palette: {
                popup: {
                  background: "#29434e",
                },
                button: {
                  background: "transparent",
                  text: "#fff",
                  border: "#fff",
                },
              },
            });
          });
        </script>
      `,
    }}
  />
);

export default Cookiescript;
