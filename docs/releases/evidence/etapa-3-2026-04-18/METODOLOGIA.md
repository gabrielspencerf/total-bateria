# Metodologia — medições Etapa 3

## Ambiente

- **Não** foi utilizado deploy em servidor de staging com URL pública.
- Foi utilizado **`vite preview`** em `localhost` após `npm run build` (build de produção), no mesmo host onde o Lighthouse foi executado.
- **Implicação:** resultados são **reproduzíveis localmente** e válidos para comparação relativa entre páginas do mesmo ambiente; **não** substituem RUM nem Lighthouse contra o domínio final (HTTPS, CDN, cache, compressão de borda).

## Ferramentas

- **Lighthouse** `11.7.1` via `npx`.
- **Chrome** headless (`--headless=new`).
- **Throttling:** simulado padrão do Lighthouse (`--throttling-method=simulate`).
- **Form factors:**
  - Mobile: `--screenEmulation.mobile=true`
  - Desktop: `--preset=desktop`
- **Relatório completo:** execução **sem** `--only-categories` — a flag `--only-categories=performance,accessibility,...` (lista com vírgulas) gerou `categories: {}` vazio nesta versão; os JSON finais foram gerados **sem** esse parâmetro para preservar scores.

## Portas

- Institucional: `http://localhost:4173`
- LP (build com `VITE_LANDING_KEY=empilhadeiras`): primeira coleta em `http://localhost:4174`; **coleta final da LP** (após correções de acessibilidade) em `http://localhost:4175` porque a porta 4174 permaneceu ocupada por processo anterior.

## INP

- Lighthouse **11** neste modo de navegação **não** expôs métrica INP consolidada nos JSONs analisados.
- **Proxy usado:** **TBT** (Total Blocking Time) e observações de long tasks nos relatórios, além de teste manual de interação quando necessário.
