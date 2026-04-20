# DEC-2026-04-18 — Etapa 2 LP: expansão controlada do `Reveal`

## Decisão

Estender `Reveal` a mais blocos da landing para dar **progressão visual ao scroll**, mantendo animação **curta** e sem efeitos paralelos que competem com a leitura.

## Parâmetros

- Duração da transição de opacidade/transform: **300ms** (antes 500ms).
- Deslocamento inicial: **translate-y-2** (antes `translate-y-3`).

## Fora de escopo

- Não reintroduzir formulário de lead nas LPs.
- Não adicionar glow, blur decorativo ou carrosséis novos.

## Status

Implementado em 2026-04-18.
