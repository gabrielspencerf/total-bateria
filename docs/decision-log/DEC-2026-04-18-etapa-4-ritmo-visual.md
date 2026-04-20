# DEC — Etapa 4: ritmo visual sem reset de marca (2026-04-18)

## Contexto

As três LPs internas estavam **consistentes**, porém **previsíveis**: mesma cadência de eyebrow, título, grid de cards e alternância claro/escuro sem contraste narrativo suficiente.

## Decisão

1. Introduzir **famílias de layout** por tipo de argumento (problema, solução, serviço, diferenciais, FAQ, fechamento), controladas por **campos opcionais** na config — sem fork de tema nem novos tokens de cor.
2. Tratar as três LPs como **ecossistema**: mesma paleta e componentes base, com **mapa explícito** de qual arquitetura cada LP usa em problema/solução/diferenciais/CTA, e **três arquiteturas distintas** nos cards de serviços de cada página.
3. **FAQ** passa a priorizar **accordion** (`<details>`) para funcionar como respiro, não como “mais cards”.
4. **Audiência** deixa de usar grid de cards com ícone para **chips** — reduz competição com diferenciais/serviços.
5. **Autoridade** com figura: painel editorial com imagem contínua; sem figura: **bloco escuro único** (LP lítio) para marcar transição antes do FAQ claro.

## Alternativas recusadas

- Redesign completo ou novos efeitos (glow, blur decorativo).
- Um único layout “premium” copiado em todas as seções.
- Três LPs com assinaturas visuais totalmente diferentes (quebraria o DNA).

## Consequências

- Mais ramificações nos blocos React (manutenção por `architecture`).
- Conteúdo deve declarar intenção (`architecture`) onde a cadência padrão não bastar.
- Lighthouse deve ser **reexecutado** após esta etapa (novos assets lazy em baterias).

## Pendências

- Coletar JSON Lighthouse neste repositório quando o CLI estiver disponível no ambiente (ver error log Etapa 4).
