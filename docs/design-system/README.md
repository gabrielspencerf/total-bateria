# Design System (Base)

Este documento define as regras visuais para manter coerencia de interface durante a evolucao do produto.

## Princípios

- Clareza de leitura.
- Consistencia entre paginas.
- Contraste adequado para acessibilidade.
- Reutilizacao de componentes antes de criar novos.

## Tokens base

- Cor primaria: `#dc2626`
- Superficie escura: `#09090B` e `#18181B`
- Texto principal: `#111827` (escuro) / `#FAFAFA` (claro)
- Fonte base: stack local (`Segoe UI`, `Roboto`, `Arial`)

## Diretrizes de componentes

- `Button`: usar variacoes existentes (`primary`, `outline`, `glass`) antes de criar novos estilos.
- `SectionHeading`: manter padrao para titulos de sessao.
- `Card` (service, testimonial, case): manter borda, raio e elevacao consistente.
- Formularios: seguir padrao de foco com destaque da cor primaria.

## Diretrizes de SEO + UI

- Cada pagina deve manter `h1` unico e coerente com o titulo SEO.
- Imagens devem ter `alt` descritivo.
- Evitar iframes pesados em secoes criticas de performance.
