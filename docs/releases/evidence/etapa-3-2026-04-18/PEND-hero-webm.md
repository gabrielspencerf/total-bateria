# Pendência formal — WebM hero institucional

## Estado do código

- `HeroSection` suporta **`<source type="video/webm">`** quando `heroBackgroundVideoWebmPrimary` (em `src/data/mediaRuntime.ts`) aponta para um arquivo existente em `public/`.
- Hoje `heroBackgroundVideoWebmPrimary === null` → **nenhum** WebM é emitido; apenas o MP4 (`heroBackgroundVideoPrimary`) permanece como fallback único.

## Estado dos assets

- A medição Lighthouse (home institucional) mostrou download grande do **MP4** do hero — o arquivo existe no bundle servido pelo preview.
- **Não** foi adicionado arquivo `.webm` nesta etapa porque não havia artefato WebM versionado disponível no repositório no momento da implementação (evitar referência quebrada).

## Próximo passo operacional

1. Exportar WebM (VP9/Opus, loop) equivalente ao loop MP4 atual.
2. Colocar em `public/assets/media/videos/reels/` (ex.: `institucional-ambiente-loop-01.webm`).
3. Definir `heroBackgroundVideoWebmPrimary` com o path público correspondente.
4. Reexecutar Lighthouse mobile/desktop na home e atualizar `LIGHTHOUSE-RESUMO.md`.

## Impacto esperado (inferência)

- Redução de bytes transferidos em redes lentas e possível melhora de **LCP** no mobile **se** o browser escolher WebM e o asset for menor que o MP4. **Medição obrigatória** após publicar o arquivo.
