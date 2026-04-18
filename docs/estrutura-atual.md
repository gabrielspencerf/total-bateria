# Estrutura atual da base (template de landing)

Índice geral da documentação: `docs/README.md`.

## Visão geral

A base opera como **single-template** e seleciona a landing em **build-time** via `VITE_LANDING_KEY`. Cada build empacota uma única variação comercial, sem rotas por slug para múltiplas LPs.

**Captação:** apenas CTAs (WhatsApp / links). **Sem formulário** e sem `POST /api/contact`.

## Estrutura principal

```txt
config/
  runtime.ts       # env validado (sem VITE_LEAD_DESTINATION obrigatório)
  site.ts          # SEO base derivado da landing ativa
material_estrutura/   # INPUT bruto (HEIC, MP4/MOV pesados) — não referenciar no app
public/assets/landings/
  shared/          # webp (e futuros assets) reutilizáveis entre LPs
  empilhadeiras/
    video/         # mp4 hero leve + poster webp
  baterias/        # reservado para exclusivos da LP
  litio-retrofit/  # reservado
src/
  content/
    landing.ts
    legal/
      privacyPolicy.ts   # texto + meta da política
      termsOfUse.ts      # texto + meta dos termos
    landings/
      base.ts              # createWhatsAppCta, badge
      empilhadeiras.ts
      baterias.ts
      litio-retrofit.ts
      index.ts             # landingRegistry
  features/
    landing/
      blocks/              # Hero (imagem ou vídeo), Services (+ imagem opcional), Authority (+ figura), …
      templates/
      types/
  shared/
    brand/
    layout/
    ui/
docs/refactor/
  media-audit.md       # auditoria e curadoria por arquivo
  media-pipeline.md    # ffmpeg, naming, pipeline
tools/
  convert-landing-media.ps1   # helper HEIC -> webp
```

## Seleção da landing

1. `config/runtime.ts` valida `VITE_LANDING_KEY`.
2. `src/content/landings/index.ts` mantém o `landingRegistry`.
3. `src/content/landing.ts` resolve `selectedLandingConfig`.
4. `src/pages/Home.tsx` renderiza `LandingPageTemplate` com a LP selecionada.

## Mídia (content-driven)

- Caminhos (`hero.visual`, `services.cards[].imageSrc`, `authority.figure`, `benefits.figure`, …) vivem em `src/content/landings/*.ts`.
- Assets servidos a partir de `public/assets/landings/...` (otimizados).
- Hero: layout **background** (imagem ou vídeo WebM+MP4 + poster); ver `docs/refactor/hero-layout-hierarquia-performance.md`.
- Detalhes: `docs/refactor/media-audit.md` e `docs/refactor/media-pipeline.md`.

## SEO e sitemap

- `config/site.ts` deriva metadados da `selectedLandingConfig` e inclui rotas institucionais/legais em `SITE_ROUTES` (landing ativa, política, termos, institucional).
- `useSEO` aplica title, description, canonical e OG dinamicamente por página.
- `server.ts` gera `sitemap.xml` a partir de `SITE_ROUTES`.

## Rotas

- `/` — LP ativa (conforme build).
- `/institucional` — página institucional mínima.
- `/politica-de-privacidade` — política de privacidade (conteúdo em `src/content/legal/privacyPolicy.ts`).
- `/termos-de-uso` — termos de uso (conteúdo em `src/content/legal/termsOfUse.ts`).
- Demais paths desconhecidos → redirect `/`.
