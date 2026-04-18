# Design System | Landing Template Base

## Princípios visuais

- Linguagem corporativa e industrial.
- Contraste alto entre fundo escuro (hero) e conteúdo principal claro.
- Tipografia consistente com hierarquia clara (`uiTokens.typography`).
- CTA primária em destaque (vermelho institucional).
- CTA de WhatsApp como ação secundária.
- Grid simples, **container** ampliado (`uiTokens.container`, **até 1320px** alinhado ao `.container` em `index.css`) e espaçamento vertical previsível (`Section` + `sectionSpacing`).
- Cards com `rounded-2xl`, borda `zinc-200` e sombra leve onde há empilhamento (ex.: serviços).

## Tokens reutilizados

- `uiTokens.container`: `max-w-[1320px]` + paddings — desktop com **mais largura útil** sem perder leitura.
- `uiTokens.sectionSpacing`: ritmo vertical entre blocos.
- `Button` com variantes: `primary`, `secondary`, `outline`, `whatsapp` (**`whatsapp`** usa `green-800`/`green-900` para contraste com texto branco).
- **Header (`SiteHeader`):** CTAs como **`<a>` estilizado** — evita `<button>` aninhado em `<a>` (HTML inválido / falhas em Lighthouse). Na rota **`/`** o header fica **fixo**, **vidro escuro** e logo **branca** para integrar ao hero; nas demais rotas permanece barra clara estática.
- `Section` para consistência estrutural.

## Superfícies e fundos (`src/index.css` — `@layer components`)

- **`lp-grid-faint` / `lp-grid-faint-dark`:** grade técnica leve (só CSS, sem bitmap) para profundidade em seções claras/escuras.
- **`lp-surface-tech-light` / `lp-surface-tech-dark`:** gradientes radiais sutis para evitar fundo completamente chapado.
- Uso: Problema, Serviços, FAQ (claro); Solução, Diferenciais, CTA final (escuro). `motion-reduce` desliga opacidade da grade onde combinado no bloco.

## Tipografia base (`src/index.css`)

- **H2 global:** `font-black` (Etapa 3 — paridade com institucional).
- **Títulos de seção em blocos:** `SectionHeader` continua usando `uiTokens.typography.h2` (`font-black`); não depende só do estilo global.

## Motion adicional (LP)

- **`Reveal`:** entrada curta ao scroll (`src/shared/ui/Reveal.tsx`): **300ms**, deslocamento **2px**, `ease-out`; com `prefers-reduced-motion` o conteúdo permanece estático (sem tradução).
- Uso recomendado: após `SectionHeader` em blocos de **alta carga cognitiva** (problema, diferenciais, solução, benefícios, comparação, audiência, autoridade, prova social, serviços) — **não** envolver o hero (já tem hierarquia própria).

## Mídia

- **Hero:** fundo **full-bleed** — imagem **ou** vídeo (`hero.visual`), com **overlays** (vinheta + gradientes + grade leve) e **coluna editorial** no desktop (reuso dos `quickPoints` como checklist numerada).
- **Vídeo:** ordem **WebM → MP4**; **poster** sempre; **sem áudio**; em **mobile** usar só poster (sem baixar vídeo); respeitar **`prefers-reduced-motion`**. Detalhes: `docs/refactor/hero-layout-hierarquia-performance.md`.
- **Serviços / Benefícios / Autoridade:** figuras opcionais via config (sem hardcode de path em JSX).
- Evitar excesso: uma figura por bloco quando usado; não transformar LP em galeria.
- Pipeline e naming: `docs/refactor/media-pipeline.md`.

## Páginas legais e institucional

- **Rotas:** `/politica-de-privacidade`, `/termos-de-uso`, `/institucional`.
- **Layout:** `LegalDocumentLayout` — largura de leitura `max-w-3xl`, cartão com borda/sombra leve, `lp-surface-tech-light`, navegação “voltar” + link institucional, rodapé interno com cruzamento entre política e termos.
- **Conteúdo:** apenas em `src/content/legal/*.ts` (sem copy jurídica solta em JSX); linguagem B2B séria, sem certificações inventadas.
- **Navegação global:** `SiteFooter` com bloco “Informação legal”; `SiteHeader` com links **Privacidade** e **Termos** no desktop quando **não** estiver no hero (`/`).
- **CTA “Solicitar contato” fora do `/`:** usa `/#cta-final` para ancorar na landing; no `/` mantém `#cta-final`.

## Blocos de landing

### Obrigatórios

- Hero, Problem, Solution, Services, Differentials, Audience, Authority, FAQ, Final CTA

### Opcionais

- Benefits, Comparison, Process, Coverage, Social proof

## Regras de implementação

- Todo texto e **paths de mídia** comerciais devem vir de `src/content/landings/*.ts`.
- Evitar hardcode de copy ou de asset em componentes de bloco.
- Novos blocos devem manter o padrão visual institucional (densidade, bordas, tipografia).

## Etapa 4 — ritmo, carrossel, widgets e variação entre LPs

Objetivo: **cadência narrativa** sem reset de marca. Três LPs internas compartilham DNA (paleta, tipografia, botões, foco), mas alternam **massa visual**, **molde de seção** e **widgets** para não parecer “a mesma grade com outro texto”.

### Ordem do template (`LandingPageTemplate`)

1. Hero → Problema → Solução → Benefícios (opcional) → **Serviços (carrossel)** → **`postServiceWidgets` (opcional)** → **Diferenciais** → Comparativo / Processo / Cobertura / Prova (opcionais) → Audiência → Autoridade → FAQ → CTA final.

Diferenciais **logo após** serviços + widgets: função de “prova de capacidade” com cards mais vivos, separada do carrossel operacional.

### Problema (`ProblemBlock`)

`problem.architecture?` + opcional `problem.impactLine?` (faixa crítica curta acima da lista) + opcional **`problem.supportPanel?`** (painel editorial no desktop quando `architecture === "vertical"`, split com a lista; em outros modos o painel aparece **acima** do modo escolhido, se existir).

| Valor | Uso |
| --- | --- |
| `vertical` | Lista numerada seca, borda esquerda — **padrão atual** (custo / consequência). |
| `strip` | Faixa escura segmentada (alertas). |
| `matrix` | Grade “sinal” em fundo claro. |
| `timeline` | Linha com marcos numerados. |

Padrão quando omitido: `vertical`.

### Solução (`SolutionBlock`)

`pillars` \| `asymmetric` \| `rail` (padrão `pillars`). Superfície escura em **camadas** (`lp-surface-tech-dark` + faixa superior + grade leve).

- **`solution.railAside?`:** texto curto vindo **só da config** da LP — coluna auxiliar no modo `rail` em `lg+` (sem copy inventada no JSX).

### Serviços — carrossel (`ServicesBlock`)

- **Sem biblioteca externa:** trilho com **`translate3d`** e largura do viewport medida por **`ResizeObserver`** (um slide por vez, **sem “espiar”** o próximo).
- **Controles:** faixa inferior com **setas**, contador **`01 / NN`**, **dots no mobile**, **rótulos (tabs) no `sm+`**, foco no `role="region"` + **Home/End/←/→**.
- **Layout do slide (split):** coluna de mídia (~42% no desktop) + coluna de conteúdo; **placeholder** neutro se não houver imagem na config.
- **A11y:** `aria-live="polite"` com índice atual; `aria-label` por slide.
- **Motion:** transição curta no trilho; **`prefers-reduced-motion: reduce`** remove a transição.
- **Performance:** primeira imagem `eager`, demais `lazy`; altura mínima moderada no desktop para reduzir CLS.

**Limitação conhecida:** gesto de **swipe horizontal** nativo não está no trilho por `transform` (ver `docs/error-logs/`).

`cards[].architecture` permanece no tipo por compatibilidade, **sem efeito** no render (carrossel unificado).

### Widgets pós-serviços (`postServiceWidgets`)

Array opcional em `LandingPageConfig`. Tipos:

| Tipo | Função |
| --- | --- |
| `techStrip` | Faixa curta com ênfase operacional. |
| `statBand` | Três pares label/valor **qualitativos** (sem inventar métrica). |
| `processMini` | Passos numerados curtos. |
| `imageInsight` | Imagem + legenda editorial (insight, não decoração). |

Regra: **0–2** widgets por LP salvo exceção justificada.

### Diferenciais — cards com ícones (`DifferentialsBlock`)

- `iconCards` (alias **`cards`**): **grade 2 colunas no mobile** (menos torre infinita) → `lg:grid-cols-3`; **primeiro item em faixa total** quando `featuredCount > 0` e há **>4** itens (`col-span-2` no mobile, **`lg:col-span-3`** no desktop).
- **Ícones industriais** rotacionados por índice; **hover** discreto (`translate-y`, sombra, borda) com `motion-reduce` desligando transform; micro-linha inferior no hover (opacidade, sem glow).
- `featuredCount` 1 ou 2: primeiros itens com anel/label **“Pilar”**.
- `rails`: lista densa sem grade (contraste com icon cards).

### FAQ e CTA final

- FAQ: **accordion** em **`max-w-4xl`**, cartões mais altos no desktop; fundo com **`lp-surface-tech-light`**.
- CTA final: `focal` \| `command`; bloco **`max-w-5xl`**, faixa superior e grade leve para **fechar** a narrativa antes do rodapé.

### Audiência

- Opcional **`audience.groups[]`** na config: **cartões por grupo** (rótulo + lista) em grade responsiva; sem `groups`, um único grupo “Segmentos” usa `audience.items`.

### Autoridade

- Opcional **`authority.pullQuote?`**: destaque curto (mesma narrativa aprovada) abaixo do texto; split com figura **mais alto** no desktop.

### Rodapé (`SiteFooter`)

Atalhos **textuais** para `#cta-final` e WhatsApp; **grid** com coluna de atalhos alinhada à direita no desktop; fundo **`zinc-100`** para contraste com o CTA escuro.

### Mapa atual das 3 LPs (resumo)

| LP | Problema | Pós-serviço | Diferenciais |
| --- | --- | --- | --- |
| Empilhadeiras | `vertical` + `impactLine` | `processMini` | `iconCards`, `featuredCount: 1` |
| Baterias | `vertical` + `impactLine` | `techStrip` | `iconCards`, `featuredCount: 2` |
| Lítio | `vertical` + `impactLine` | `statBand` + `imageInsight` | `iconCards`, `featuredCount: 1` |

### Limites de efeito (cards / hover)

- Transição curta (~200ms), **sem** glow, **sem** blur decorativo.
- Lift máximo `translate-y-0.5` (0.125rem).
- Tudo degradável com `motion-reduce`.
