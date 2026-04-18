# Implementação | Reveal on scroll (LP)

**Data:** 2026-04-18

## O que foi feito

- Novo componente `src/shared/ui/Reveal.tsx`: `IntersectionObserver` + transição curta de opacidade/translate; `motion-reduce` deixa conteúdo estático.
- Uso em `ProblemBlock` e `DifferentialsBlock` para reduzir sensação de “blocos mortos” sem adicionar biblioteca pesada.

## Por quê

- Pedido de fluxo e construção da página; solução nativa evita bundle extra.

## Performance

- Observer desconecta após primeira interseção; sem re-render contínuo.

## Risco

- Baixo: se CLS aparecer, aumentar `threshold` ou desativar `Reveal` no bloco específico.
