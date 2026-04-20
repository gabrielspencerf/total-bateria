# INST-2026-04-18 — Etapa 2: implementação (institucional)

## Objetivo

Varredura de componentes compartilhados e templates usados nas rotas internas, aplicando o design system consolidado no código (não só em documentação).

## Arquivos alterados (principais)

| Área | Arquivos |
| --- | --- |
| Design tokens / utilitários | `src/index.css`, `config/site.ts` |
| Layout | `src/components/layout/Header.tsx`, `Footer.tsx`, `header/DesktopNav.tsx`, `header/HeaderCTA.tsx` |
| UI | `ContactForm.tsx`, `ServiceCard.tsx`, `SegmentCard.tsx`, `DifferentialCard.tsx`, `CaseCard.tsx`, `TestimonialCard.tsx`, `CTASection.tsx`, `ServicePageTemplate.tsx`, `ServicesCarousel.tsx` |

## Build

- `npm run build` — sucesso após as alterações.

## Métricas de performance (Web Vitals)

- **Não executado** Lighthouse ou campo real nesta entrega.
- Registro explícito: `docs/error-logs/ERR-2026-04-18-web-vitals-nao-medidos.md`.

## Próximos passos sugeridos

- Rodar Lighthouse (mobile + desktop) em `/`, `/contato` e uma rota de serviço após deploy de staging.
- Preencher `SITE_CONFIG.social` com URLs oficiais.
