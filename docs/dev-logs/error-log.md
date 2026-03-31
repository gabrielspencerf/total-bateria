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

- Data: 2026-03-27
- Ambiente: dev
- Origem: frontend/build
- Descricao: importacao de animacao usando `framer-motion` sem dependencia declarada.
- Impacto: risco de falha de compilacao.
- Causa raiz: inconsistencia entre biblioteca utilizada no codigo e pacotes instalados.
- Correcao aplicada: troca de import para `motion/react` em `src/components/layout/Header.tsx`.
- Status: fechado
