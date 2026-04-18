const LANDING_KEYS = ["empilhadeiras", "baterias", "litio-retrofit"] as const;

export type LandingKey = (typeof LANDING_KEYS)[number];

function readEnv(key: string): string | undefined {
  const importMetaEnv =
    typeof import.meta !== "undefined" &&
    typeof import.meta.env === "object" &&
    import.meta.env !== null
      ? (import.meta.env as Record<string, string | undefined>)
      : undefined;

  const fromImportMeta = importMetaEnv?.[key];
  if (typeof fromImportMeta === "string" && fromImportMeta.trim().length > 0) {
    return fromImportMeta.trim();
  }

  if (typeof process !== "undefined" && process.env) {
    const fromProcess = process.env[key];
    if (typeof fromProcess === "string" && fromProcess.trim().length > 0) {
      return fromProcess.trim();
    }
  }

  return undefined;
}

function requireEnv(key: string): string {
  const value = readEnv(key);
  if (!value) {
    throw new Error(`[runtime] Variável obrigatória ausente: ${key}`);
  }

  return value;
}

function normalizeSiteUrl(rawUrl: string): string {
  try {
    const url = new URL(rawUrl);
    return url.toString().replace(/\/$/, "");
  } catch {
    throw new Error(`[runtime] VITE_SITE_URL inválida: "${rawUrl}"`);
  }
}

function normalizeLandingKey(rawLandingKey: string): LandingKey {
  if ((LANDING_KEYS as readonly string[]).includes(rawLandingKey)) {
    return rawLandingKey as LandingKey;
  }

  throw new Error(
    `[runtime] VITE_LANDING_KEY inválida: "${rawLandingKey}". Valores válidos: ${LANDING_KEYS.join(", ")}`,
  );
}

export const runtimeConfig = {
  landingKey: normalizeLandingKey(requireEnv("VITE_LANDING_KEY")),
  siteUrl: normalizeSiteUrl(requireEnv("VITE_SITE_URL")),
  whatsappNumber: requireEnv("VITE_WHATSAPP_NUMBER").replace(/\D/g, ""),
  companyName: requireEnv("VITE_COMPANY_NAME"),
  regionLabel: readEnv("VITE_REGION_LABEL"),
} as const;

export const allowedLandingKeys = LANDING_KEYS;
