# Registro de Erros de Desenvolvimento

## Template de entrada

- Data:
- Ambiente: dev | test | prod
- Origem: frontend | backend | build | deploy
- Descricao:
- Impacto:
- Causa raiz:
- Correcao aplicada:
- Status: aberto | monitorando | fechado

---

## Entradas

- Data: 2026-04-18
- Ambiente: dev
- Origem: processo / Lighthouse
- Descricao: Etapa 3 passou a arquivar Lighthouse (LCP, CLS, TBT, scores, peso, requests) em `docs/releases/evidence/etapa-3-2026-04-18/` com metodologia localhost. INP ainda não coletado.
- Impacto: baseline local reproduzível; ainda falta rodada em staging/HTTPS.
- Correcao aplicada: ver `docs/releases/RELEASE-2026-04-18-etapa-3-evidencia.md`.
- Status: monitorando (RUM / INP / staging)

- Data: 2026-04-18
- Ambiente: dev
- Origem: processo / documentação
- Descricao: métricas Web Vitals (LCP, CLS, INP) e comparativo antes/depois não foram coletadas automaticamente na etapa 2 de interface.
- Impacto: ausência de baseline numérico para regressões de performance.
- Causa raiz: não houve execução de Lighthouse ou RUM nesta entrega; apenas build local.
- Correcao aplicada: registro em `docs/error-logs/ERR-2026-04-18-web-vitals-nao-medidos.md` e na release da etapa 2.
- Status: fechado (supersedido pela Etapa 3 para Lighthouse local; INP/staging permanecem pendentes)

- Data: 2026-03-27
- Ambiente: dev
- Origem: frontend/build
- Descricao: importacao de animacao usando `framer-motion` sem dependencia declarada.
- Impacto: risco de falha de compilacao.
- Causa raiz: inconsistencia entre biblioteca utilizada no codigo e pacotes instalados.
- Correcao aplicada: troca de import para `motion/react` em `src/components/layout/Header.tsx`.
- Status: fechado
