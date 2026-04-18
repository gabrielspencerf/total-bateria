# ERR — carrossel de serviços sem gesto de swipe (2026-04-18)

## Sintoma

Em dispositivos touch, alguns usuários podem tentar **arrastar horizontalmente** o carrossel de serviços como em implementações baseadas só em scroll.

## Causa

O trilho usa **`transform: translate3d`** com largura fixa por slide (via `ResizeObserver`). Esse padrão **não** acoplado a `overflow-x: scroll` não expõe o comportamento nativo de pan horizontal do browser.

## Impacto

- **Baixo:** setas, indicadores (dots mobile / tabs desktop), teclado (←/→, Home/End) e foco no `role="region"` permanecem disponíveis.

## Mitigação futura (se necessário)

1. Reintroduzir **scroll-snap** com viewport `overflow-x: auto` e `scroll-snap-type: x mandatory`, mantendo a mesma pele visual **ou**
2. Adicionar biblioteca leve (ex.: Embla) mantendo o contrato de dados atual.

## Status

Conhecido e **aceito** nesta entrega; decisão registrada em `docs/decision-log/DEC-2026-04-18-refinamento-estrutural-landing.md`.
