# DEC-2026-04-18 — Etapa 2: consolidação de UI institucional

## Contexto

A etapa 1 estabeleceu tokens, hero e botão. A etapa 2 trata **consistência de componentes reutilizados** e paridade perceptual com as landing pages, sem reabrir escopo da fundação.

## Decisões

1. **Remover decoração “template” (blobs + scale em hover)** dos cards institucionais — conflitava com linguagem industrial sóbria e com cards das LPs.
2. **Centralizar padrão de formulário** em classes `.tb-form-*` no `index.css`, espelhando raio `xl` e foco `focus-visible` já usados no ecossistema de botões.
3. **Redes sociais no rodapé:** não usar mais `SITE_CONFIG.baseUrl` como `href` genérico; exibir ícones apenas quando `SITE_CONFIG.social` tiver URL definida (evita link enganoso e erro de expectativa de aria-label).
4. **Header “glass”:** reduzir blur intenso e sombra pesada — custo visual e de impressão “SaaS” sem ganho de legibilidade.
5. **`CTASection`:** título em `font-black` e maior respiro vertical para alinhar ritmo às faixas de conversão das LPs.

## Consequências

- Marketing precisa preencher `config/site.ts` → `social` para os ícones voltarem a aparecer.
- Cards interativos ganham hover homogêneo (borda vermelha suave + sombra leve).

## Status

Aceito e implementado em 2026-04-18.
