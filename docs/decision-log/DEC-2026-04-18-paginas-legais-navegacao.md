# DEC — páginas legais e padrão de navegação (2026-04-18)

## Decisão 1 — Conteúdo jurídico só na camada de conteúdo

Textos de privacidade e termos vivem em **`src/content/legal/*.ts`**, não embutidos no JSX dos blocos, para facilitar revisão futura por área jurídica/compliance sem reestruturar componentes.

## Decisão 2 — Tom e limites do texto

- Foco **B2B** e operações reais (contato, logs, prestadores).
- Menção à **LGPD** apenas como referência a direitos frequentemente aplicáveis, sem declarar certificação nem “adequação integral” automática.
- **Foro** em Jarinu/SP alinhado ao endereço cadastral já usado em `BRAND_CONTACT`, com ressalva genérica a normas imperativas.

## Decisão 3 — CTA com âncora na landing

Em rotas que não renderizam `#cta-final`, o botão “Solicitar contato” aponta para **`/#cta-final`** para preservar o comportamento esperado (SPA + hash na home).

## Decisão 4 — Sitemap

Inclusão das rotas legais e institucional no **`SITE_ROUTES`** para refletir páginas reais no `sitemap.xml` gerado pelo `server.ts`.

## Riscos / pendências honestas

- Revisão jurídica final pelos responsáveis da empresa continua recomendada antes de publicação em domínio de produção.
- Textos não substituem **contratos**, **NDAs** ou **DPA** específicos com clientes ou operadores de dados.
