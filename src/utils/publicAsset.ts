/**
 * URLs de arquivos em `public/` devem passar por aqui no client para respeitar
 * `base` do Vite (`import.meta.env.BASE_URL`), ex.: deploy em subpasta.
 *
 * Contrato de conteúdo: strings começando com `/assets/...` (path absoluto no app).
 */

/** Fallback editorial neutro (sempre versionado em `public/`). */
export const LANDING_MEDIA_FALLBACK_PATH = "/assets/hero-industrial.svg" as const;

export function getViteBasePath(): string {
  const raw = import.meta.env.BASE_URL ?? "/";
  if (raw === "/") return "/";
  return raw.endsWith("/") ? raw : `${raw}/`;
}

/**
 * Converte path lógico (`/assets/...`) em URL usável em `src`/`href`/`poster`.
 * Com `base: '/'` retorna o próprio path; com `base: '/repo/'` retorna `/repo/assets/...`.
 */
export function resolvePublicUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const base = getViteBasePath();
  if (base === "/") return normalized;
  const baseNoSlash = base.replace(/\/$/, "");
  return `${baseNoSlash}${normalized}`;
}

export function landingMediaFallbackUrl(): string {
  return resolvePublicUrl(LANDING_MEDIA_FALLBACK_PATH);
}

/**
 * URL absoluta para meta tags (OG/Twitter) a partir do path público resolvido.
 * Usa apenas o **origin** de `siteBaseUrl` + path do app (inclui BASE_URL).
 */
export function absolutePublicAssetUrl(siteBaseUrl: string, publicPath: string): string {
  const path = publicPath.startsWith("/") ? publicPath : `/${publicPath}`;
  let origin: string;
  try {
    origin = new URL(siteBaseUrl).origin;
  } catch {
    return resolvePublicUrl(path);
  }
  return `${origin}${resolvePublicUrl(path)}`;
}
