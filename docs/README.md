# Documentação | Total Bateria (institucional)

## Propósito

Este diretório concentra **design system**, **implementação**, **decisões**, **erros/resoluções**, **releases** e **changelog** do site institucional, alinhado ao ecossistema das landing pages (`total-bateria - lp1`).

## Estrutura

| Pasta | Conteúdo |
| --- | --- |
| `design-system/` | Princípios visuais, tokens, componentes, mídia, motion |
| `implementation/` | O que foi implementado no código e por quê |
| `decision-log/` | Decisões com justificativa curta |
| `error-logs/` | Problema → causa → solução → status |
| `releases/` | Pacotes de entrega com escopo e riscos |
| `changelog/` | Histórico consolidado |

## Regras de atualização

1. Toda mudança visual ou de UX relevante deve ter entrada em `implementation/` ou `releases/`.
2. Regressões e bugs corrigidos: `error-logs/`.
3. Decisões que afetam marca ou performance: `decision-log/`.
4. Não duplicar romance: texto técnico, direto, rastreável a arquivos.

## Referência cruzada

Landing pages (build separado): repositório `total-bateria - lp1` — mesma linguagem visual documentada em ambos os `design-system/`.
