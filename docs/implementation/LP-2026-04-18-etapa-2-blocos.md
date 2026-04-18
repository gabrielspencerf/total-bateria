# LP-2026-04-18 — Etapa 2: blocos e motion

## Alterações

- `src/shared/ui/Reveal.tsx` — transição mais curta e deslocamento menor.
- Blocos atualizados: `SolutionBlock`, `BenefitsBlock`, `ComparisonBlock`, `AudienceBlock`, `AuthorityBlock`, `SocialProofBlock`, `ServicesBlock`.
- Ajuste de raio em cartões internos para `rounded-2xl` onde aplicável.

## Build

- `npm run build` — sucesso.

## Métricas

- Mesmo adendo do institucional: **Web Vitals não medidos** nesta rodada; impacto esperado do `IntersectionObserver` adicional é baixo (um observer por bloco com `Reveal`, desconectado após primeira interseção).
