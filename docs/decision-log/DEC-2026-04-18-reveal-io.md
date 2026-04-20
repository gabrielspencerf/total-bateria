# Decisão | Reveal via IntersectionObserver (sem lib extra)

**Data:** 2026-04-18

## Decisão

Implementar entrada suave ao scroll com **API nativa** em vez de expandir uso de `motion` em todos os blocos.

## Justificativa

- Mantém controle de bundle e complexidade.
- `motion-reduce` trivial via classes Tailwind.
