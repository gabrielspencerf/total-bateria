import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import { runtimeConfig } from "./config/runtime";
import { SITE_CONFIG, buildSiteRoutes } from "./config/site";
import { landingLoaders } from "./src/content/landings";

async function startServer() {
  const landingConfig = await landingLoaders[runtimeConfig.landingKey]();
  const siteRoutes = buildSiteRoutes(landingConfig);

  const app = express();
  const PORT = Number(process.env.PORT) || 3000;
  const modeArg = process.argv.find((arg) => arg.startsWith("--mode="));
  const runtimeMode = modeArg?.split("=")[1] ?? process.env.NODE_ENV;
  const isProduction = runtimeMode === "production";

  app.use(express.json());
  app.disable("x-powered-by");

  app.get("/robots.txt", (_req, res) => {
    res.type("text/plain");
    res.send(
      `User-agent: *\nAllow: /\nSitemap: ${SITE_CONFIG.baseUrl}/sitemap.xml`
    );
  });

  app.get("/sitemap.xml", (_req, res) => {
    const urls = siteRoutes.map((route) => {
      return [
        "<url>",
        `<loc>${new URL(route.path, SITE_CONFIG.baseUrl).toString()}</loc>`,
        "</url>",
      ].join("");
    }).join("");

    res.type("application/xml");
    res.send(
      `<?xml version="1.0" encoding="UTF-8"?>` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
    );
  });

  // Vite middleware for development
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    const indexPath = path.join(distPath, "index.html");

    if (!fs.existsSync(indexPath)) {
      throw new Error("Build não encontrado. Execute `npm run build` antes de iniciar em produção.");
    }

    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(indexPath);
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT} [mode=${isProduction ? "production" : "development"}]`);
  });
}

startServer().catch((error) => {
  console.error("Falha ao iniciar servidor:", error);
  process.exit(1);
});
