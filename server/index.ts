import WebServer from "./WebServer";

const port: string | number = process.env.PORT || 9876;

(async () => {
  const webServer = new WebServer({
    port,
  });

  try {
    await webServer.start();

    console.log(
      `App listening on port ${port}. Running on http://localhost:${port}/.`
    );
  } catch (error) {
    console.log(`Could not start server`, error.message);
  }
})();
