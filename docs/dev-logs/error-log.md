# Error Log | Refatoração template-base

## 2026-04-18

### Hero (layout + vídeo)

- Hero refeito como **full-bleed** com vídeo/imagem de fundo, overlays e política **mobile = poster**, **desktop = WebM+MP4** com `prefers-reduced-motion`. Documentado em `docs/refactor/hero-layout-hierarquia-performance.md`.

### Mídia (ffmpeg / HEIC)

- Conversão **HEIC → WebP** com `scale` no mesmo grafo do input pode falhar (“simple and complex filtering cannot be used together” no ffmpeg 8.x com tiled HEIC). **Mitigação:** pipeline em dois passos (HEIC → PNG temporário → WebP com `scale=1600:-1`), documentado em `docs/refactor/media-pipeline.md` e script `tools/convert-landing-media.ps1`.

### Etapa 3 — Lighthouse

- Coletas arquivadas em `docs/releases/evidence/etapa-3-2026-04-18/`; resumo cruzado no repo institucional. **INP** e **staging HTTPS** seguem pendentes.

### Etapa 4 — Lighthouse (re-medir após mudança de layout)

- Nova coleta pós-Etapa 4: ver `docs/error-logs/ERR-2026-04-18-lighthouse-etapa-4-pendente.md` e pasta de evidência `docs/releases/evidence/etapa-4-2026-04-18/`. No ambiente de automação desta sessão, `npx lighthouse` não concluiu a tempo; **recomenda-se** repetir localmente na mesma porta/metodologia da Etapa 3.

### Etapa 4b — carrossel e widgets

- Carrossel de serviços + widgets pós-serviço + icon-cards nos diferenciais: validar **CLS** e **INP** após nova rodada Lighthouse (mesma pasta de evidência).

### Etapa 2 — métricas

- LCP / CLS / INP e comparativo antes/depois **não coletados** nesta rodada. Registro: `docs/error-logs/ERR-2026-04-18-web-vitals-nao-medidos.md`.

## 2026-04-16

### Ajustes executados

- Atualização de tipagem da landing para novo contrato de blocos (breaking change controlado).
- Remoção de arquivos legados de LP por slug para evitar colisão de tipos.

### Riscos monitorados

- Dependência obrigatória das variáveis `VITE_*` no build.
- Necessidade de configurar ambientes (`dev`, `test`, `prod`) com a mesma matriz de envs.
