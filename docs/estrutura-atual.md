# Estrutura atual da base (template de landing)

Índice geral da documentação: `docs/README.md`.

## Visão geral

A base opera como **single-template** e seleciona a landing em **build-time** via `VITE_LANDING_KEY`. Cada build empacota uma única variação comercial, sem rotas por slug para múltiplas LPs.

**Captação:** apenas CTAs (WhatsApp / links). **Sem formulário** e sem `POST /api/contact`.

## Estrutura principal

```txt
config/
  landing-keys.ts  # chaves válidas de VITE_LANDING_KEY (fonte única)
  runtime.ts       # env validado (sem VITE_LEAD_DESTINATION obrigatório)
  site.ts          # SITE_CONFIG estático + buildSiteRoutes(landing) para SEO/sitemap
material_estrutura/   # INPUT bruto (HEIC, MP4/MOV pesados) — não referenciar no app
public/assets/landings/
  shared/          # webp (e futuros assets) reutilizáveis entre LPs
  empilhadeiras/
    video/         # mp4 hero leve + poster webp
  baterias/        # reservado para exclusivos da LP
  litio-retrofit/  # reservado
src/
  content/
    landing.ts             # exporta selectedLandingConfig (módulo virtual no Vite)
    legal/
      privacyPolicy.ts   # texto + meta da política
      termsOfUse.ts      # texto + meta dos termos
    landings/
      base.ts              # createWhatsAppCta, badge
      empilhadeiras.ts
      baterias.ts
      litio-retrofit.ts
      index.ts             # landingLoaders (import dinâmico; uso no servidor)
  features/
    landing/
      blocks/              # Hero (imagem ou vídeo), Services (+ imagem opcional), Authority (+ figura), …
      templates/
      types/
  shared/
    brand/
    layout/
    ui/
      LandingMediaImage.tsx  # mídia com base URL pública (env)
  utils/
    publicAsset.ts           # resolvePublicUrl para /assets/...
docs/refactor/
  media-audit.md       # auditoria e curadoria por arquivo
  media-pipeline.md    # ffmpeg, naming, pipeline
tools/
  convert-landing-media.ps1   # helper HEIC -> webp
  verify-public-assets.mjs      # pré-build: paths /assets/... referenciados existem em public/
```

## Seleção da landing

1. `config/runtime.ts` valida `VITE_LANDING_KEY` (e demais envs obrigatórias).
2. **Cliente (Vite):** plugin em `vite.config.ts` resolve `virtual:selected-landing-config` para **apenas** o arquivo da LP ativa no build (bundle enxuto).
3. **Servidor (`server.ts`):** carrega a config via `landingLoaders[key]()` antes de expor rotas e montar `buildSiteRoutes` para o sitemap.
4. `src/pages/Home.tsx` renderiza `LandingPageTemplate` com `selectedLandingConfig` exportado de `src/content/landing.ts`.

## Mídia (content-driven)

- Caminhos (`hero.visual`, `services.cards[].imageSrc`, `authority.figure`, `benefits.figure`, …) vivem em `src/content/landings/*.ts`.
- Assets servidos a partir de `public/assets/landings/...` (otimizados).
- Hero: layout **background** (imagem ou vídeo WebM+MP4 + poster); ver `docs/refactor/hero-layout-hierarquia-performance.md`.
- Detalhes: `docs/refactor/media-audit.md` e `docs/refactor/media-pipeline.md`.

## SEO e sitemap

- `config/site.ts` expõe `buildSiteRoutes(landingConfig)` (landing ativa + política + termos + institucional) sem import síncrono da LP no topo do módulo.
- `useSEO` aplica title, description, canonical e OG dinamicamente por página.
- `server.ts` gera `sitemap.xml` a partir do array retornado por `buildSiteRoutes` após carregar a landing.

## Rotas

- `/` — LP ativa (conforme build).
- `/institucional` — página institucional mínima.
- `/politica-de-privacidade` — política de privacidade (conteúdo em `src/content/legal/privacyPolicy.ts`).
- `/termos-de-uso` — termos de uso (conteúdo em `src/content/legal/termsOfUse.ts`).
- Demais paths desconhecidos → redirect `/`.
