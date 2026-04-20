# Decisão | URLs públicas e `BASE_URL`

**Data:** 2026-04-18

## Contexto

Conteúdo das LPs usa strings `/assets/...`. Com deploy em subpasta (`base` do Vite ≠ `/`), URLs absolutas na raiz do origin deixam de apontar para os arquivos copiados de `public/`. Além disso, imagens podem falhar silenciosamente (arquivo ausente, MIME, rede) e blocos com `h-full` sem altura mínima podem colapsar quando o asset não carrega.

## Decisão

1. **Única função de resolução** `resolvePublicUrl` para qualquer URL servida de `public/` em componentes React e para `<source>` / `poster` de vídeo.
2. **`LandingMediaImage`** como componente padrão para raster/SVG de LP e marca no layout, com fallback para `/assets/hero-industrial.svg` (ou `fallbackSrc` quando fizer sentido, ex. logo → `seo-default.svg`).
3. **Meta OG/Twitter:** construir URL absoluta com `origin` de `VITE_SITE_URL` + path já respeitando `BASE_URL` (`absolutePublicAssetUrl`), em vez de `new URL(path, siteBase)` com path iniciando em `/`, que ignora pathname do site em alguns cenários.
4. **`BrowserRouter basename`** alinhado a `import.meta.env.BASE_URL` para rotas e ativos coerentes no mesmo deploy.
5. **`VITE_BASE_PATH`** opcional no `.env` mapeado para `base` em `vite.config.ts` (default `/`).

## Alternativas não escolhidas

- Import estático de assets (`import x from url`) — mistura pipeline de mídia editorial com bundle e dificulta troca por LP em build único.
- Apenas verificação em build — não cobre subpasta nem fallback em runtime.

## Riscos de regressão

- Esquecer `resolvePublicUrl` em novo bloco que use string `/assets/...`.
- `VITE_SITE_URL` sem path enquanto `VITE_BASE_PATH` com subpasta — alinhar configuração de deploy e variáveis.
