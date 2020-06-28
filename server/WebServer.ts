import bodyParser from "body-parser";
import { EventEmitter } from "events";
import compression from "compression";
import cors from "cors";
import exphbs from "express-handlebars";
import express from "express";
import helmet from "helmet";
import serveStatic from "serve-static";

import WebServerConfig from "./WebServerConfig";

import apiRoutes from "./routes/api";
import catchAllRoutes from "./routes/catchAll";
import feedRouter from "./routes/feed";
import healthRoutes from "./routes/health";
import indexRoutes from "./routes/index";

import templateHelpers from "./templateHelpers";

class WebServer extends EventEmitter {
  private server?: any;

  constructor(private config: WebServerConfig) {
    super();

    this.config = config;
    this.server = null;
  }

  private createHandlebars(): Exphbs {
    return exphbs.create({
      defaultLayout: "main",
      helpers: templateHelpers,
    });
  }

  public async start(): Promise<express.Application> {
    const app: express.Application = express();

    app.engine("handlebars", this.createHandlebars().engine);
    app.set("view engine", "handlebars");

    app.use(helmet());
    app.use(cors());
    app.use(compression());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(healthRoutes());
    app.use(await indexRoutes());
    app.use(feedRouter());
    app.use(apiRoutes());
    app.use(
      serveStatic("public", {
        cacheControl: true,
        maxAge: "365d",
        setHeaders: (res: any) => {
          res.setHeader(
            "Cache-Control",
            `public, max-age=${60 * 60 * 24 * 365}`
          );
        },
      })
    );

    // Archive
    app.use(
      (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        if (req.path.startsWith("/archive")) {
          const url = req.path.split("archive");

          return res
            .status(301)
            .redirect(`http://archive.drublic.com/${url[1]}`);
        }

        next();
      }
    );

    // Catch all
    app.use(catchAllRoutes());

    this.server = await new Promise((resolve, reject) => {
      const server: any = app.listen(this.config.port, () => resolve(server));
    });

    return app;
  }

  public close(): void {
    if (this.server) {
      this.server.close();
    }
  }
}

export default WebServer;
