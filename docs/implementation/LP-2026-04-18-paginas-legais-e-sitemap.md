# LP — páginas legais, sitemap e navegação (2026-04-18)

## Escopo

- Criação de **Política de Privacidade** (`/politica-de-privacidade`) e **Termos de Uso** (`/termos-de-uso`).
- Conteúdo institucional B2B em `src/content/legal/privacyPolicy.ts` e `termsOfUse.ts` (sem afirmações de certificação ou conformidade que o projeto não sustente).
- Layout compartilhado `LegalDocumentLayout` com leitura confortável (`max-w-3xl`), hierarquia `h1`/`h2`, links de retorno e cruzamento entre documentos.
- Integração em `SiteFooter` (bloco “Informação legal”), `SiteHeader` (links no desktop fora do `/`), `InstitutionalHomePage` (CTAs como `<Link>` estilizado — sem `<button>` dentro de `<a>`).
- Correção de CTA/header: fora do `/`, link para fechamento comercial usa **`/#cta-final`** em vez de `#cta-final` (âncora inexistente em páginas internas).
- `SITE_ROUTES` em `config/site.ts` ampliado para **sitemap** (`server.ts`): landing ativa + política + termos + institucional.

## Mídia

- No clone auditado, `public/` continha sobretudo **SVG** leves (`favicon`, `seo-default`, ilustrações). Imagens **WebP** referenciadas nas LPs permanecem previstas em `public/assets/landings/...` conforme `docs/refactor/media-pipeline.md`; ausência local não impede build se rotas de arquivo não forem resolvidas em SSR (assets estáticos servidos em produção).

## Validação

- `npm run lint`
- `npm run build` com `VITE_LANDING_KEY`, `VITE_SITE_URL`, `VITE_WHATSAPP_NUMBER`, `VITE_COMPANY_NAME` definidos.

## Arquivos principais

- `src/pages/institutional/PrivacyPolicyPage.tsx`, `TermsOfUsePage.tsx`, `LegalDocumentLayout.tsx`
- `src/content/legal/privacyPolicy.ts`, `termsOfUse.ts`
- `src/AnimatedRoutes.tsx`, `config/site.ts`
- `src/shared/layout/SiteHeader.tsx`, `SiteFooter.tsx`
