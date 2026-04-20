# ERR — Lighthouse Etapa 4 não arquivado nesta sessão (2026-04-18)

## O que era esperado

Re-medir pelo menos:

1. Home institucional (rota conforme app),
2. LP principal (`empilhadeiras` ou a rota padrão de LP em produção),
3. Ao menos uma outra LP interna reestruturada (`baterias` ou `litio-retrofit`),

seguindo a metodologia da Etapa 3 (porta fixa, mobile + desktop, JSON em `docs/releases/evidence/`).

## O que ocorreu

No ambiente de automação utilizado para esta sessão, a instalação/execução de **`npx lighthouse@12`** não completou dentro do tempo disponível (download/execução pendente). Por isso **não** há novos arquivos JSON desta rodada em `docs/releases/evidence/etapa-4-2026-04-18/` ainda.

## Impacto

- Não há regressão de código implícita; apenas **ausência de evidência nova** neste commit.
- Métricas da Etapa 3 permanecem como baseline até nova coleta.

## Próximo passo (humano / CI)

Rodar localmente (exemplo):

```bash
npm run build
npm run start:server
npx lighthouse http://localhost:4175/ --output=json --output-path=docs/releases/evidence/etapa-4-2026-04-18/lh-institucional-mobile.json --preset=desktop
```

(Ajustar URL/porta e preset conforme o roteamento real do projeto.)

Registrar resultados em `docs/releases/evidence/etapa-4-2026-04-18/` e atualizar o release da Etapa 4 com números.
