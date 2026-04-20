# ERR-2026-04-18 — Web Vitals / peso de página não medidos automaticamente

## Contexto

A etapa 2 pedia comparação objetiva (LCP, CLS, INP ou proxy, peso, número de requests) quando possível.

## O que foi feito nesta entrega

- **Validado:** `npm run build` no institucional — bundle gerado; tamanhos de chunk listados no log do Vite (referência local, não substitui RUM).
- **Inferido (baixa confiança sem medição):** redução leve de “efeito glass” no header e remoção de gradiente animado em `CaseCard` tendem a **reduzir custo de pintura** em interação; impacto numérico **não quantificado**.

## Pendente (medição manual ou CI)

- LCP / CLS / INP em ambiente de pré-produção com throttling de CPU/rede.
- Contagem de requests e waterfall com DevTools ou WebPageTest.
- Comparativo antes/depois exige **baseline** salvo (commit ou artefato Lighthouse) — não havia baseline arquivado neste repositório antes desta etapa.

## Atualização (Etapa 3)

- **Lighthouse local** arquivado com LCP, CLS, TBT, scores, peso e contagem de requests: `docs/releases/evidence/etapa-3-2026-04-18/` + `RELEASE-2026-04-18-etapa-3-evidencia.md`.
- **INP** e medição em **staging/HTTPS** continuam fora do escopo deste arquivo.

## Status

Parcialmente atendido em localhost — **aberto** para INP, RUM e reexecução em staging.
