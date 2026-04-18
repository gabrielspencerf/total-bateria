# Release LP — Etapa 2: ritmo de scroll e cartões (2026-04-18)

## Escopo

Refino da **etapa 2** no repositório de landings: motion mais discreto, `Reveal` em blocos centrais e alinhamento de raio de cartões ao token `rounded-2xl`.

## Arquivos principais

- `src/shared/ui/Reveal.tsx`
- `src/features/landing/blocks/SolutionBlock.tsx`, `BenefitsBlock.tsx`, `ComparisonBlock.tsx`, `AudienceBlock.tsx`, `AuthorityBlock.tsx`, `SocialProofBlock.tsx`, `ServicesBlock.tsx`

## Métricas / performance

- **Não medido** (Lighthouse/RUM). Inferência: custo adicional mínimo — cada `Reveal` desconecta o observer após a primeira entrada na viewport.

## Riscos

- Usuários com `prefers-reduced-motion`: sem mudança perceptível (comportamento já previsto).

## Referência cruzada

- Institucional: `total-bateria/docs/releases/RELEASE-2026-04-18-etapa-2-interface.md`
