# Error log | Hero — carrossel de vídeos

| Campo | Valor |
| --- | --- |
| **Data** | 2026-04-18 |
| **Contexto** | Home institucional, hero acima da dobra |
| **Arquivos** | `src/components/ui/HeroSection.tsx`, `src/data/mediaRuntime.ts` |

## Problema

Três vídeos de fundo alternados a cada 7s: múltiplos decodes, maior uso de memória e banda, LCP instável e UX “showroom” fora do padrão das LPs.

## Causa provável

Implementação anterior priorizou impacto visual sem orçamento de performance explícito.

## Solução aplicada

- Carregar **apenas** `heroBackgroundVideoPrimary` (primeiro da lista).
- `< md` e `prefers-reduced-motion`: sem `<video>`, apenas poster + gradientes.
- Removido `setInterval` de troca de vídeo.

## Status

**Resolvido.**
