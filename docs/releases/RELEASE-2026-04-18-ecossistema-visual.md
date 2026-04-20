# Release | Ecossistema visual institucional ↔ LP (etapa 1)

**Versão / etapa:** 2026-04-18-inst-01  
**Repositório:** `total-bateria` (institucional)

## Escopo

Alinhamento de tema, tipografia, botão e hero ao padrão já consolidado nas landing pages; documentação mínima obrigatória em `/docs`.

## Arquivos afetados

- `src/index.css`
- `index.html`
- `src/components/ui/Button.tsx`
- `src/components/ui/HeroSection.tsx`
- `src/components/ui/SectionHeading.tsx`
- `src/data/mediaRuntime.ts`
- `docs/**` (nova árvore)

## Melhorias executadas

- Tema Montserrat + tokens de marca.
- Hero performático (1 vídeo desktop).
- Botões sóbrios, paridade LP.
- H2 de seção com peso visual alinhado.

## Inconsistências corrigidas

- Carrossel de vídeo no hero.
- Botão com microanimações agressivas.
- Tipografia base sem escala definida no tema.

## Problemas encontrados

- Nenhum bloqueante de build; mídia `/assets/media/` pode estar ausente em clone mínimo (esperado).

## Riscos de regressão

- Baixo em UI; médio se algum stakeholder exigir rotação de vídeo (reverter não é desejável).

## Pendências

- WebM dual no institucional.
- Poster fotográfico WebP.
- Revisar demais páginas internas (Serviços, Cards) com o mesmo pente fino.

## Resumo executivo

O institucional deixa de competir visualmente com as LPs e passa a **compartilhar o mesmo sistema de superfície, botão e hero** orientado a performance.
