# DEC-2026-04-18 — Lighthouse em localhost como evidência de Etapa 3

## Decisão

Aceitar **Lighthouse contra `vite preview` (build prod)** como evidência de Etapa 3, com **metodologia e limitações** escritas em `docs/releases/evidence/etapa-3-2026-04-18/METODOLOGIA.md`.

## Motivos

- Não havia URL de **staging** acessível neste ambiente de execução.
- Ainda assim, os relatórios permitem **comparar páginas entre si** no mesmo host e detectar regressões grossas de peso, LCP e a11y automatizada.

## O que não substitui

- Medição no **domínio público** com HTTPS, CDN e cache real.
- **INP** de campo e **RUM**.

## Status

Aceito como baseline **local** em 2026-04-18; revalidar em staging antes de go-live crítico.
