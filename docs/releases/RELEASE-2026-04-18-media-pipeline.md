# Release | Pipeline de mídia pública e renderização

**Data:** 2026-04-18

## Objetivo

Restaurar e endurecer a cadeia **conteúdo → URL pública → componente → SEO**, para as três LPs (`empilhadeiras`, `baterias`, `litio-retrofit`) e marca global.

## Mudanças entregues

- `resolvePublicUrl` / `absolutePublicAssetUrl` / fallback documentado em `src/utils/publicAsset.ts`.
- `LandingMediaImage` em `src/shared/ui` com fallback para `/assets/hero-industrial.svg`.
- Hero, serviços (imagem/vídeo), autoridade, benefícios, `imageInsight` e logos usando o padrão acima; vídeo continua suportado com `poster`/`source` resolvidos.
- `useSEO` com URL absoluta de imagem social alinhada a `BASE_URL`.
- `App.tsx`: `basename` do React Router alinhado ao Vite.
- `vite.config.ts`: `base` configurável via `VITE_BASE_PATH`.
- `tools/verify-public-assets.mjs` + script `verify:assets` na build.
- Assets em `public/assets/landings/**` e `public/assets/brand/**` (placeholders até troca final).
- LP lítio: imagem no terceiro serviço.

## Impacto nas 3 LPs

| LP | Impacto |
|----|---------|
| empilhadeiras | Hero + 3 slides de serviço + figura autoridade com URLs resolvidas e fallback. |
| baterias | Hero + serviços + autoridade (shared webp). |
| litio-retrofit | Hero + benefícios + 3 serviços com mídia + widget `imageInsight`. |

## Evidência de smoke test

- `npm run lint` — OK.
- `npm run build` (com envs obrigatórias) — OK.
- `vite preview` + HTTP 200 em amostra `/assets/landings/.../....webp` e `/assets/brand/....png`.

## Riscos de regressão

- Novos paths em conteúdo sem arquivo em `public/` → build falha no `verify:assets` (intencional).
- Deploy com subpasta exige `VITE_BASE_PATH` + `VITE_SITE_URL` coerentes com o pathname público.

## Referências

- `docs/implementation/LP-2026-04-18-media-pipeline-public-assets.md`
- `docs/decision-log/DEC-2026-04-18-public-assets-base-url.md`
- `docs/error-logs/ERR-2026-04-18-midia-nao-renderiza.md`
