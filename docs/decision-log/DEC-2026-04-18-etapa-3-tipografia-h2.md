# DEC-2026-04-18 — H2 global `font-black`

## Decisão

No `@layer base` de `src/index.css` (institucional e LP), **`h2` usa `font-black`**, alinhado aos títulos de seção principais e às LPs (`SectionHeader`).

## Exceção

- **Hero institucional — cartão “Resumo operacional”:** mantém `text-xl font-bold` no `<h2>` para não competir com o H1. Comentário JSX remete ao design system.

## Quando aplicar exceções futuras

- Subtítulos dentro de cards ou widgets onde o peso visual de `font-black` quebraria hierarquia: preferir **`font-bold` ou `font-semibold` em classe utilitária** no próprio elemento, documentando neste arquivo ou no README do design system.

## Status

Implementado em 2026-04-18 (Etapa 3).
