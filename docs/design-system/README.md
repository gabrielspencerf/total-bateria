# Design system | Institucional Total Bateria

## Identidade: industrial futurista séria

- **Tom:** engenharia, operação pesada, confiabilidade técnica — não SaaS genérico, não neon decorativo.
- **Contraste:** fundos `zinc-950` em heros / faixas escuras; conteúdo claro com hierarquia forte (`font-black` em H1/H2 principais).
- **Cor primária:** `#dc2626` (Tailwind `red-600`) — CTAs e acentos.
- **Superfícies:** branco / `zinc-50` no corpo; `zinc-900` + borda `zinc-800` em cards escuros.

## Tipografia (oficial Etapa 3)

- **Família:** Montserrat (`--font-sans` em `src/index.css`), pesos 400–900.
- **H1 (`@layer base`):** `font-black`, `leading-[1.05]`.
- **H2 (`@layer base`):** **`font-black`**, `leading-[1.1]` — título de página e seções que usam `<h2>` sem classe de peso explícita seguem esta regra.
- **H3 (`@layer base`):** `font-bold`.
- **Corpo:** `leading-relaxed`; cores de texto por superfície (zinc 600–700 claro; 200–300 escuro).

### Exceções locais documentadas

- **Hero — cartão “Resumo operacional”:** mantém `<h2>` com classe **`text-xl font-bold`** para não competir com o H1 do hero. Comentário no código aponta para este README.
- **Componentes que definem o próprio peso** (ex.: `SectionHeading`, `CTASection` com utilitários `font-black`): reforçam a regra visual mesmo quando o elemento não é semanticamente `h2`.

## Botões

- **Raio:** `rounded-xl` (não `rounded-md`).
- **Transição:** só `transition-colors` ~200ms — **sem** brilho animado, **sem** `translate-y` em hover, **sem** “sweep” gradient.
- **Variantes:** primary (vermelho), secondary/dark (zinc-900), outline, ghost, whatsapp (**`green-800`** fundo para contraste AA com texto branco), glass (hero: borda branca translúcida).
- **Foco:** `focus-visible:ring-2` vermelho + `ring-offset` coerente com o fundo (header escuro usa offset escuro).

## Formulários (classes utilitárias)

Definidas em `@layer components` em `src/index.css`:

- **Label:** `.tb-form-label` — texto `sm`, peso médio, `zinc-700`.
- **Campos claros:** `.tb-form-field` — `rounded-xl`, borda `zinc-300`, foco `focus-visible` com anel `red-600/25`, `disabled` com opacidade reduzida.
- **Campos em fundo escuro (ex.: newsletter no rodapé):** `.tb-form-field-dark` — fundo `zinc-950`, borda `zinc-700`, foco vermelho sem exagero de blur.
- **Estado enviando:** todos os campos do `ContactForm` recebem `disabled={isSubmitting}` para evitar edição durante POST.

## Cards e superfícies

- **Interativos / listagens:** `.tb-card-surface` — `rounded-2xl`, borda `zinc-200`, sombra leve; hover só **borda + sombra** (`duration-200`), sem “blob” decorativo nem `scale` em pseudo-elementos.
- **Estáticos (ex.: blocos de conteúdo em template de serviço):** `.tb-card-static` — mesma geometria, sem hover de cartão.
- **Cards escuros (depoimentos):** borda `zinc-700`, hover discreto na borda — sem glow nem gradiente animado no fundo.

## Header e rodapé

- **Header fixo:** blur moderado (`backdrop-blur-md` quando rolado), sombra `shadow-lg` (não `shadow-2xl`), transição de ~200ms nas propriedades de layout — leitura industrial, menos “vidro genérico”.
- **Rodapé — redes sociais:** só renderizadas quando `SITE_CONFIG.social.*` tiver URL não vazia; evita `href` enganoso para a home. Preencher URLs reais em `config/site.ts`.
- **Rodapé — links de colunas:** classe `.tb-footer-link` + ícone `ChevronRight` com `aria-hidden`.
- **Rodapé — links legais:** foco visível com anel e offset `zinc-950`.

## Navegação desktop (`ServicesDropdown` + `DesktopNav`)

- **Link “Serviços”** e **botão chevron** têm `focus-visible` com `ring-offset` claro ou escuro conforme scroll do header.
- **Painel:** `z-[70]`, sombra moderada, `backdrop-blur-md` (não `blur-xl`), abre/fecha com opacidade + leve `translate-y` (**sem** `scale` decorativo).
- **Menu fechado:** `pointer-events-none` + `invisible` para não interceptar cliques nem leitores de forma inconsistente.
- **Itens do menu:** `role="menuitem"`, hover em fundo `red-50`, foco visível com anel **inset** suave.

## Navegação mobile (`MobileNav`)

- **Backdrop:** blur reduzido com `motion-reduce:backdrop-blur-none`.
- **Painel:** transição **spring** apenas quando motion completo; com `prefers-reduced-motion`, usa tween curto.
- **Links e botão de submenu:** `focus-visible` com anel e offset no fundo branco do drawer.

## Grid e container

- **Container:** max-width 1200px, padding `px-4 sm:px-6 lg:px-8` (Tailwind `container` custom em base layer).

## Hero (mídia)

- **Um** vídeo de fundo em `md+`: **WebM opcional** (`heroBackgroundVideoWebmPrimary`) + **MP4 obrigatório** (`heroBackgroundVideoPrimary`) — ordem `<source>` WebM antes do MP4 quando configurado.
- **`< md` e `prefers-reduced-motion`:** só camada estática (poster SVG + gradientes).
- **Poster:** `/assets/hero-industrial.svg` até existir frame WebP dedicado.
- **Sobreposição:** gradientes `zinc-950` para leitura — informação crítica no texto, não no vídeo.
- **Performance:** removido carrossel de 3 vídeos com troca a cada 7s (carga e decode múltiplos).
- **Pendência:** se `heroBackgroundVideoWebmPrimary` for `null`, não há WebM servido — ver `docs/releases/evidence/etapa-3-2026-04-18/PEND-hero-webm.md`.
- **CTAs no hero:** wrappers `Link` com `focus-within` para anel visível ao tabular até o botão interno.

## Motion

- **motion/react:** apenas entradas curtas no hero; `useReducedMotion` desliga deslocamento inicial.
- **Scroll global:** `prefers-reduced-motion` desliga `scroll-behavior: smooth`.
- **Carrossel de serviços (`ServicesCarousel`):** transição de slide **300ms**; setas com foco visível; sem animação meramente decorativa além do deslocamento do trilho.

## CTA de seção (`CTASection`)

- Padding vertical **`py-20 md:py-24`** para ritmo alinhado às faixas de LP.
- Título com **`font-black`**; parágrafo opcional — se `text` vazio, o espaçamento antes do botão permanece consistente.

## Responsividade

- Hero: coluna única em mobile; card lateral “Resumo operacional” só `lg+`.

## Paridade com LPs

Tokens de `@theme` e padrão de botão espelham o repositório de landing (`total-bateria - lp1`) para um único DNA visual.

## Evidências de performance (Etapa 3)

- JSON + resumo: `docs/releases/evidence/etapa-3-2026-04-18/`
- Release consolidada: `docs/releases/RELEASE-2026-04-18-etapa-3-evidencia.md`
