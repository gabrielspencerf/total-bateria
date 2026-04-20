# Implementação — Etapa 4 (ritmo + carrossel + widgets)

## Objetivo

Quebrar **repetição visual** nas 3 LPs internas com evolução controlada: carrossel de serviços leve, diferenciais como **cards com ícones** + microefeitos, widgets narrativos opcionais, problema em modo **vertical** com `impactLine`, e rodapé sem duplicar CTAs pesados.

## Arquivos principais

| Área | Arquivo |
| --- | --- |
| Tipos | `src/features/landing/types/index.ts` |
| Template / ordem | `src/features/landing/templates/LandingPageTemplate.tsx` |
| Serviços (carrossel) | `src/features/landing/blocks/ServicesBlock.tsx` |
| Widgets | `src/features/landing/blocks/PostServiceWidgetsBlock.tsx` |
| Problema | `src/features/landing/blocks/ProblemBlock.tsx` |
| Diferenciais | `src/features/landing/blocks/DifferentialsBlock.tsx` |
| Benefícios | `src/features/landing/blocks/BenefitsBlock.tsx` |
| Audiência / FAQ | `src/features/landing/blocks/AudienceBlock.tsx`, `FaqBlock.tsx` |
| Rodapé | `src/shared/layout/SiteFooter.tsx` |
| Conteúdo | `src/content/landings/empilhadeiras.ts`, `baterias.ts`, `litio-retrofit.ts` |

## Contratos de config

### `LandingPageConfig`

- `postServiceWidgets?: LandingPostServiceWidget[]` — após serviços, antes dos diferenciais.
- `problem.impactLine?: string` — faixa crítica opcional.
- `problem.architecture` — inclui `vertical` (padrão do bloco se omitido).
- `services.cards[].microDescription?: string` — linha editorial no slide.
- `differentials` — `LandingDifferentialsConfig`: `architecture` (`iconCards` \| `rails` \| `cards`), `featuredCount?`, `items`.

### Widgets (`LandingPostServiceWidget`)

- `techStrip` \| `statBand` \| `processMini` \| `imageInsight` — ver design system.

## Comportamento do carrossel

- Scroll horizontal com **snap**; navegação por **setas**, **indicadores** (dots), teclado **←/→**, **Home/End**.
- `prefers-reduced-motion`: scroll sem animação suave.
- Nenhuma dependência além de React + CSS.

## Validação

- `npm run lint`
- `npm run build`
- Lighthouse pós-deploy: ver `docs/releases/evidence/etapa-4-2026-04-18/` (pendência documentada se o CLI não estiver disponível no ambiente).

## Riscos

- **CLS:** altura mínima do slide; revisar se copy mudar muito.
- **Teclado:** foco no `region` do carrossel para setas de teclado funcionarem como esperado.
- **Leitores:** `aria-live` polido no índice do slide; revisar verbosidade em QA.
