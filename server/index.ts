import express, { Express } from "express";
import session from "express-session";
import pgSession from "connect-pg-simple";
import { Pool } from "pg";
import { createServer as createViteServer } from "vite";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 5000;

async function createApp() {
  const app: Express = express();
  
  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  const PgSession = pgSession(session);
  app.use(
    session({
      store: new PgSession({ pool }),
      secret: process.env.SESSION_SECRET || "dev-secret",
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      },
    })
  );

  // Import routes
  const { router: apiRouter } = await import("./routes.js");
  app.use("/api", apiRouter);

  // Vite integration for dev
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);

    app.get("*", (_, res) => {
      res.redirect("/");
    });
  } else {
    // Static files in production
    app.use(express.static(resolve(__dirname, "../dist")));
    app.get("*", (_, res) => {
      res.sendFile(resolve(__dirname, "../dist/index.html"));
    });
  }

  return app;
}

async function start() {
  const app = await createApp();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

start().catch(console.error);
