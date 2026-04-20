# Log de erro | Mídia “sumiu” na interface

**Data:** 2026-04-18  
**Severidade:** alta (UX — hero/serviços/logos invisíveis ou vazios)

## Sintomas

- Build e `verify:assets` podem passar em um clone onde arquivos existem localmente, mas outro ambiente sem `public/assets/landings/**` ou `public/assets/brand/**` quebra a UI.
- Com `base` do Vite em subpasta, `/assets/...` na raiz retorna 404 em runtime.
- Cards com apenas `h-full` em `<img>` sem altura mínima quando a imagem falha podem aparecer como faixa vazia.

## Causa raiz (consolidada)

1. **Arquivos ausentes** em `public/` (não versionados, pipeline não publicou, ou `.gitignore` local).
2. **Falta de prefixo `BASE_URL`** em `<img src>` / vídeo / rotas quando o app não está na raiz do origin.
3. **Logos da marca** referenciando PNGs inexistentes em `public/assets/brand/`.
4. **LP lítio:** terceiro card de serviços sem `imageSrc` — bloco legítimo mas “vazio” visualmente (placeholder “Contexto visual opcional”).

## Correção aplicada

- Helper `resolvePublicUrl` + `absolutePublicAssetUrl` (`src/utils/publicAsset.ts`).
- `LandingMediaImage` + uso nos blocos de LP e logos (`SiteHeader` / `SiteFooter`).
- `verify-public-assets.mjs` ampliado para landings + brand + `defaultImage`.
- Assets placeholder recriados sob `public/assets/landings` e `public/assets/brand`.
- `BrowserRouter basename` + `VITE_BASE_PATH` opcional no Vite.
- Card “Validação de resultado” em `litio-retrofit` com `imageSrc` preenchido.

## Como validar após mudanças

```bash
npm run verify:assets
npm run lint
npm run build
npx vite preview
```

Inspecionar rede: 200 em WebP/PNG usados pelo HTML hidratado.
