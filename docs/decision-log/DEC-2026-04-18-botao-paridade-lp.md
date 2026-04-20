# Decisão | Botão institucional = botão LP

**Data:** 2026-04-18  
**Status:** Aceito

## Decisão

Unificar o componente `Button` do institucional ao do repositório de landing: `rounded-xl`, `transition-colors` apenas, sem animações de brilho ou elevação em hover.

## Justificativa

- Reduz “cara de outro produto” entre institucional e LP.
- Efeitos de glow e sweep aumentam ruído visual e não comunicam B2B industrial.
- Manutenção dupla de dois padrões de botão era dívida real.

## Consequência

Qualquer novo efeito em botão deve passar pelo mesmo critério: função (feedback de foco/hover) sem competir com a mensagem.
