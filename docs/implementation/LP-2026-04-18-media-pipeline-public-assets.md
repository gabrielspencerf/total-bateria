# Implementação | Pipeline de mídia pública (LP + marca + SEO)

**Data:** 2026-04-18  
**Escopo:** hero, carrossel de serviços, autoridade, benefícios, widgets `imageInsight`, logos no header/footer, OG/Twitter image.

## Contrato de conteúdo

- Paths lógicos começando com `/assets/...` apontando para arquivos em `public/` (versionados ou gerados no pipeline).
- Não embutir `import.meta.env.BASE_URL` nos arquivos de conteúdo TS.

## Resolução em runtime

| Peça | Função / componente |
|------|---------------------|
| `src` de `<img>`, `poster`, `<source>` | `resolvePublicUrl()` em `src/utils/publicAsset.ts` |
| Imagens com fallback em erro | `LandingMediaImage` em `src/shared/ui/LandingMediaImage.tsx` |
| OG / Twitter `image` absoluta | `absolutePublicAssetUrl(siteBaseUrl, path)` usado em `useSEO` |

## Deploy em subpasta

1. Definir `VITE_BASE_PATH` (ex.: `/repo/`) no `.env` de build — espelha o `base` do Vite.
2. `BrowserRouter` usa `basename` derivado do mesmo `BASE_URL` (`src/App.tsx`).
3. `resolvePublicUrl('/assets/x.webp')` passa a `/repo/assets/x.webp` automaticamente.

## Pré-build

- `tools/verify-public-assets.mjs`: garante existência em disco de paths referenciados em `src/content/landings/*.ts`, `src/shared/brand/index.ts` e `defaultImage` em `config/site.ts`.
- Script npm: `verify:assets` (executado antes de `vite build`).

## Arquivos tocados (resumo)

- `src/utils/publicAsset.ts` (novo)
- `src/shared/ui/LandingMediaImage.tsx` (novo), `src/shared/ui/index.ts`
- Blocos: `HeroBlock`, `ServicesBlock`, `AuthorityBlock`, `BenefitsBlock`, `PostServiceWidgetsBlock`
- Layout: `SiteHeader`, `SiteFooter`
- `src/hooks/useSEO.ts`, `src/App.tsx`, `vite.config.ts`
- `tools/verify-public-assets.mjs`, `package.json`, `.env.example`
- `public/assets/landings/**`, `public/assets/brand/**` (placeholders até troca pelo pipeline criativo)
- `src/content/landings/litio-retrofit.ts` (imagem no terceiro card de serviços)

## QA manual sugerido

1. `npm run dev` com `.env` válido — conferir hero + serviços + autoridade nas 3 LPs (`VITE_LANDING_KEY`).
2. `npm run build && npx vite preview` — inspecionar rede: status 200 em `/assets/landings/...` e `/assets/brand/...`.
3. Com `VITE_BASE_PATH=/sub/` (opcional) — mesma checagem com prefixo `/sub`.
