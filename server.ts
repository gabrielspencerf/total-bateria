import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import { SITE_CONFIG, SITE_ROUTES } from "./config/site";

interface ContactPayload {
  empresa: string;
  cnpj: string;
  nome: string;
  cargo: string;
  email: string;
  whatsapp: string;
  servico: string;
  urgencia: string;
  quantidade: string;
  marca: string;
  cidade: string;
  mensagem: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const REQUIRED_CONTACT_FIELDS: (keyof ContactPayload)[] = [
  "empresa",
  "nome",
  "email",
  "whatsapp",
  "servico",
  "cidade",
];

function normalizeContactPayload(raw: unknown): ContactPayload {
  const body = typeof raw === "object" && raw !== null ? (raw as Record<string, unknown>) : {};
  const normalize = (value: unknown) => (typeof value === "string" ? value.trim() : "");

  return {
    empresa: normalize(body.empresa),
    cnpj: normalize(body.cnpj),
    nome: normalize(body.nome),
    cargo: normalize(body.cargo),
    email: normalize(body.email),
    whatsapp: normalize(body.whatsapp),
    servico: normalize(body.servico),
    urgencia: normalize(body.urgencia),
    quantidade: normalize(body.quantidade),
    marca: normalize(body.marca),
    cidade: normalize(body.cidade),
    mensagem: normalize(body.mensagem),
  };
}

function validateContactPayload(payload: ContactPayload) {
  const missingFields = REQUIRED_CONTACT_FIELDS.filter((field) => !payload[field]);

  if (missingFields.length) {
    return {
      valid: false,
      message: "Preencha os campos obrigatórios para enviar sua solicitação.",
    };
  }

  if (!EMAIL_REGEX.test(payload.email)) {
    return {
      valid: false,
      message: "Informe um e-mail corporativo válido.",
    };
  }

  return { valid: true as const };
}

async function startServer() {
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
    const urls = SITE_ROUTES.map((route) => {
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

  // API routes FIRST
  app.post("/api/contact", (req, res) => {
    const payload = normalizeContactPayload(req.body);
    const validation = validateContactPayload(payload);

    if (!validation.valid) {
      res.status(400).json({
        success: false,
        message: validation.message,
      });
      return;
    }

    // TODO: Integrar com e-mail/CRM e persistência real.
    // Evita logar PII sensível em texto aberto.
    console.log("Nova solicitação de contato recebida:", {
      empresa: payload.empresa,
      servico: payload.servico,
      urgencia: payload.urgencia || "não informado",
      cidade: payload.cidade,
    });

    res.json({ success: true, message: "Solicitação enviada com sucesso!" });
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
