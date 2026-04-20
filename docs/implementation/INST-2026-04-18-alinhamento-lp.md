# Implementação | Alinhamento visual institucional ↔ LPs

**Data:** 2026-04-18  
**Escopo:** site institucional (`total-bateria`).

## O que foi implementado

1. **`src/index.css`** — `@theme` alinhado às LPs: Montserrat, `--color-brand-primary`, `--color-brand-dark`, base tipográfica, `prefers-reduced-motion` no scroll, `scroll-margin-top` em seções com `id` exceto `#hero`.
2. **`index.html`** — preconnect + stylesheet Google Fonts Montserrat.
3. **`src/components/ui/Button.tsx`** — paridade com LP: `rounded-xl`, variantes por classe map, **remoção** de hover com sombra neon, translate e animação “sweep”.
4. **`src/components/ui/HeroSection.tsx`** — hero com **um** vídeo (`heroBackgroundVideoPrimary`), poster estático, gradientes de leitura; vídeo só `md+` e oculto com `motion-reduce`; entrada motion curta respeitando `useReducedMotion`.
5. **`src/components/ui/SectionHeading.tsx`** — H2 com `font-black` como nas LPs.
6. **`src/data/mediaRuntime.ts`** — export `heroBackgroundVideoPrimary`; lista antiga mantida como inventário legado.

## Por quê

- Carrossel de vídeos no hero **triplicava** risco de custo de rede/GPU e competia com LCP.
- Botões institucionais com efeitos “premium genérico” destoavam do padrão sóbrio das LPs.
- Tipografia e tema fracos quebravam continuidade de marca entre produtos.

## Impacto visual

- Mais **peso técnico** e menos “template animado”.
- Hero mais **legível** e coerente com landing empilhadeiras (full-bleed + overlay).

## Impacto técnico / performance

- Menos elementos `<video>` ativos; um único decode em desktop.
- Menos JS no botão (removido span de sweep).
- Fonte self-hosted via Google: monitorar privacidade se necessário futuro `font-display: swap` já implícito em URL.

## Risco de regressão

- Baixo: quem dependia do carrossel visual perde rotação (aceito por requisito de performance).
- Vídeo MP4 continua dependendo do arquivo em `/assets/media/...` no deploy real.

## Observações futuras

- Adicionar **WebM** no institucional quando pipeline de mídia estiver no mesmo padrão da LP.
- Substituir poster SVG por WebP fotográfico otimizado quando asset existir no repo.
