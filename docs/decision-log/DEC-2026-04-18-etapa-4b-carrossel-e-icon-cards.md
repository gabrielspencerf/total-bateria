# DEC — Etapa 4 (continuação): carrossel de serviços e icon-cards (2026-04-18)

## Problema

Mesmo com famílias de layout na v1 da Etapa 4, a seção de **serviços** ainda empilhava três módulos longos em scroll vertical — ritmo parecido ao restante da página e leitura pesada no mobile.

## Decisão

1. **Serviços** passam a um **carrossel horizontal único** (um módulo operacional por vez), implementado com **scroll-snap + refs** — sem Swiper/Slick para preservar peso de JS e previsibilidade de performance.
2. **Diferenciais** tornam-se o bloco de **“prova de capacidade”** com **cards + ícones industriais** e hover discreto (`motion-reduce` respeitado), com `featuredCount` para hierarquia.
3. **`postServiceWidgets`** (0–2 itens) inseridos **entre serviços e diferenciais** para variar massa visual com função narrativa (faixa técnica, mini processo, banda qualitativa, insight com imagem).
4. **Problema** prioriza modo **`vertical`** + `impactLine` opcional — comunicação mais crítica e menos “card simpático”.
5. **Rodapé** deixa de repetir **dois botões grandes** espelhando o CTA final; passa a **links textuais** para o mesmo destino.

## Alternativas recusadas

- Biblioteca de carrossel completa (maior bundle, mais superfície de bug/a11y).
- Transformar comparativo/processo em carrossel (pedido era **só** serviços).
- Glow, blur ou animações longas nos cards.

## Impacto

- Mais JS/React no `ServicesBlock` (estado + listeners), ainda **sem** dependências novas.
- Conteúdo das 3 LPs deve fornecer `microDescription` e widgets com critério (evitar poluição).

## Pendências

- Lighthouse pós-mudança arquivado em `docs/releases/evidence/etapa-4-2026-04-18/` (ver error log se ainda pendente).
