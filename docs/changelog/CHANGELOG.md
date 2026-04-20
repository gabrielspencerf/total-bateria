# Changelog | Landing pages

## [2026-04-18]

### Pipeline de mídia pública (`BASE_URL`, fallback, verificação ampliada)

- **Causa:** assets ausentes em `public/` e/ou URLs sem prefixo de `import.meta.env.BASE_URL` em deploy em subpasta; logos em `/assets/brand/` inexistentes no repositório; card de serviço sem imagem na LP lítio.
- **Correção:** `resolvePublicUrl` / `absolutePublicAssetUrl` (`src/utils/publicAsset.ts`), `LandingMediaImage` (`src/shared/ui`), integração em hero/serviços/autoridade/benefícios/widgets e logos; `useSEO` para OG image; `BrowserRouter basename` + `VITE_BASE_PATH` no Vite.
- **Build:** `tools/verify-public-assets.mjs` valida landings + brand + `defaultImage` em `config/site.ts`.
- **Docs:** implementation, decision-log, error-log e release dedicados a este tema.

### Serviços — vídeo opcional no card (LP empilhadeiras)

- `LandingServiceCardConfig.visual?` com mesmo contrato do hero; slide **Venda de Empilhadeiras** reutiliza o vídeo/poster já existentes em `public/assets/landings/empilhadeiras/video/`.
- Favicon: `index.html` com `sizes="any"` no `link rel="icon"` (SVG em `public/favicon.svg`).

### Páginas legais, sitemap, navegação e auditoria de links

- Novas rotas: **`/politica-de-privacidade`**, **`/termos-de-uso`** (conteúdo em `src/content/legal/`), layout `LegalDocumentLayout`, lazy em `AnimatedRoutes`.
- **Footer** com bloco “Informação legal”; **header** (desktop, fora do `/`) com atalhos; **institucional** com links estilizados sem `<button>` dentro de `<a>`.
- **Correção:** CTA “Solicitar contato” e “Fechamento comercial” usam **`/#cta-final`** fora da home para a âncora existir.
- **`SITE_ROUTES`:** inclui LP ativa, política, termos e institucional para `sitemap.xml`.
- Documentação: `docs/design-system`, `docs/implementation/LP-2026-04-18-paginas-legais-e-sitemap.md`, `docs/decision-log/DEC-2026-04-18-paginas-legais-navegacao.md`, `docs/estrutura-atual.md`, release dedicada.

### Refinamento estrutural da landing (diagramação, carrossel, docs)

- **Hero:** composição em colunas no desktop, overlays e grade leve, checklist duplicado como **aside** editorial (mesmos `quickPoints`), CTAs full-width no mobile.
- **Header:** em **`/`** modo **fixo + vidro** integrado ao hero (logo branca); demais rotas inalteradas.
- **Problema / Solução / Audiência / Autoridade / FAQ / CTA / Rodapé:** novas superfícies (`lp-*`), splits e conteúdos opcionais no contrato (`supportPanel`, `railAside`, `groups`, `pullQuote`).
- **Serviços:** carrossel reconstruído com **ResizeObserver + translate3d** (sem peek), faixa de controles, split imagem/texto; documentação de limitação de swipe em `docs/error-logs/`.
- **Diferenciais:** hierarquia em grade 2→3 + faixa de destaque para o primeiro pilar quando aplicável.
- **Container:** largura máxima **1320px** (tokens + `index.css`).
- Documentação: `docs/design-system/README.md`, `docs/implementation/LP-2026-04-18-refinamento-estrutural.md`, `docs/decision-log/DEC-2026-04-18-refinamento-estrutural-landing.md`, release dedicada.

### Etapa 4 — ritmo visual entre LPs

- Blocos de landing com **famílias de layout** configuráveis: problema (`strip` \| `matrix` \| `timeline`), solução (`pillars` \| `asymmetric` \| `rail`), serviços por card (`standard` \| `editorial` \| `split` \| `compact` + cadência padrão), diferenciais (`cards` \| `rails`), FAQ (`accordion` \| `grid`; padrão accordion), CTA final (`focal` \| `command`).
- **Audiência** em chips; **autoridade** com composição editorial ou bloco escuro sem figura.
- Conteúdo: `empilhadeiras`, `baterias` e `litio-retrofit` atualizados com arquiteturas distintas e mídia extra só onde suporta o layout (locação/venda em baterias; lítio em retrofit).
- Design system e release documentam auditoria, decisões e medição Lighthouse (ver `docs/releases/evidence/etapa-4-2026-04-18/README.md`).

### Etapa 4 (continuação) — carrossel, icon-cards e widgets

- **Serviços:** carrossel horizontal **sem biblioteca** (scroll-snap, setas, indicadores, teclado, `prefers-reduced-motion`).
- **Diferenciais:** modo **`iconCards`** (alias `cards`) com ícones industriais, hover discreto e `featuredCount`; **`rails`** mantido.
- **`postServiceWidgets`** opcional após serviços (`techStrip`, `statBand`, `processMini`, `imageInsight`).
- **Problema:** modo **`vertical`** como padrão + `impactLine` opcional; conteúdo das 3 LPs alinhado.
- **Template:** diferenciais reposicionados **após** serviços/widgets; comparativo/processo depois.
- **Rodapé:** CTAs primários em botão substituídos por **links** para reduzir competição com o CTA final.
- **FAQ / Audiência / Benefícios:** refinamentos utilitários e microefeito em benefícios.

### Etapa 3 — evidência e hardening

- Lighthouse 11.7.1 (mobile + desktop) arquivado em `docs/releases/evidence/etapa-3-2026-04-18/`; resumo cruzado no repo institucional.
- `SiteHeader`: CTAs como `<a>` estilizado (sem `<button>` dentro de link), `aria-label` no WhatsApp mobile, logo com `alt=""` + `aria-label` no link.
- `Button` variante `whatsapp`: fundo `green-800` para contraste AA com texto branco.
- `HeroBlock`: destaque `text-red-400` no hero.
- `src/index.css`: **H2** global `font-black` (paridade com institucional).

### Alterado

- `Reveal`: duração **300ms** e deslocamento vertical menor (motion mais discreto).
- Blocos **Solução, Benefícios, Comparação, Audiência, Autoridade, Prova social, Serviços** envolvidos com `Reveal` após o `SectionHeader` para ritmo de scroll alinhado à etapa 2.
- Cartões internos: `rounded-2xl` onde antes havia `rounded-xl` isolado (paridade com token de cartão).

### Adicionado

- `Reveal` (`IntersectionObserver`) em Problema e Diferenciais.
- Documentação raiz `docs/README.md` + pastas `implementation`, `decision-log`, `error-logs`, `releases`, `changelog`.
- Google Fonts Montserrat em `index.html` (alinhamento ao institucional).
