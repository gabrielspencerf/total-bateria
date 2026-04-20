# Release — refinamento estrutural da landing (2026-04-18)

## Resumo

Entrega focada em **estrutura e diagramação** da landing: hero e header integrados, blocos com superfícies em camadas, audiência e autoridade mais fortes, FAQ e CTA final mais presentes no desktop, rodapé institucional mais denso — e **carrossel de serviços reconstruído** (sem peek, com controles dedicados).

## Escopo técnico

- Código: `src/features/landing/blocks/*`, `src/shared/layout/SiteHeader.tsx`, `SiteFooter.tsx`, `src/index.css`, `src/shared/ui/tokens.ts`, `src/features/landing/types/index.ts`, `src/content/landings/*.ts`.
- Documentação: `docs/design-system/README.md`, `docs/implementation/LP-2026-04-18-refinamento-estrutural.md`, `docs/decision-log/DEC-2026-04-18-refinamento-estrutural-landing.md`, `docs/error-logs/ERR-2026-04-18-carousel-touch.md`, `docs/changelog/CHANGELOG.md`.

## Verificação

- `npm run lint` (`tsc --noEmit`): **OK**.
- `npm run build`: requer variáveis `VITE_*` configuradas no ambiente (validação existente no `vite.config.ts`).

## Risco principal

- **Swipe touch** no carrossel não implementado com `transform` — ver error-log vinculado.
