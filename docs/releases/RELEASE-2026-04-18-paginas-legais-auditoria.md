# Release — páginas legais, auditoria de navegação e sitemap (2026-04-18)

## Resumo executivo

Entrega com páginas **Política de Privacidade** e **Termos de Uso**, integração no **header** (desktop), **footer** e **institucional**, correção de **links de âncora** para o CTA final fora da home, ampliação do **sitemap** e documentação atualizada.

## Escopo

1. Páginas legais com conteúdo mínimo honesto (B2B, sem certificações falsas).
2. Rotas registradas antes do wildcard `*`.
3. Navegação global e retorno à home.
4. Auditoria: `#cta-final` → `/#cta-final` onde necessário.
5. `SITE_ROUTES` alinhado ao conjunto de páginas públicas relevantes.

## Arquivos criados

- `src/content/legal/privacyPolicy.ts`
- `src/content/legal/termsOfUse.ts`
- `src/pages/institutional/LegalDocumentLayout.tsx`
- `src/pages/institutional/PrivacyPolicyPage.tsx`
- `src/pages/institutional/TermsOfUsePage.tsx`
- `docs/implementation/LP-2026-04-18-paginas-legais-e-sitemap.md`
- `docs/decision-log/DEC-2026-04-18-paginas-legais-navegacao.md`
- Este arquivo de release.

## Arquivos alterados (principal)

- `src/AnimatedRoutes.tsx`
- `config/site.ts`
- `src/shared/layout/SiteHeader.tsx`, `SiteFooter.tsx`
- `src/pages/institutional/InstitutionalHomePage.tsx`
- `docs/design-system/README.md`, `docs/estrutura-atual.md`, `docs/changelog/CHANGELOG.md`

## Mídia

- Auditoria no workspace: assets raster pesados da LP não listados em `public/` neste clone; referências WebP nas configs permanecem válidas quando os arquivos existem no deploy. Ver `docs/implementation/LP-2026-04-18-paginas-legais-e-sitemap.md`.

## Validações

- `npm run lint` — OK.
- `npm run build` — OK com variáveis `VITE_*` obrigatórias exportadas no shell (conforme `vite.config.ts`).

## Pendências honestas

- Revisão jurídica pelos responsáveis da empresa antes de produção.
- Push para `https://github.com/gabrielspencerf/total-baterias-lp.git` depende de **remote/credenciais** configurados na máquina que executa o deploy.
