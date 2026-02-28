import express, { Express } from "express";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export function serveStatic(app: Express) {
  app.use(express.static(resolve(__dirname, "../dist")));
  app.get("*", (_, res) => {
    res.sendFile(resolve(__dirname, "../dist/index.html"));
  });
}
