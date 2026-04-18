# LP — refinamento estrutural (diagramação, carrossel, superfícies)

Data: 2026-04-18

## Objetivo

Elevar a landing de “consistente” para **bem diagramada** em desktop e mobile: menos área morta, menos blocos isolados, carrossel de serviços **robusto**, hierarquia mais clara e superfícies com **camadas** leves (sem bitmap pesado).

## O que mudou (alto nível)

| Área | Implementação |
| --- | --- |
| Container | `max-width` **1320px** em `index.css` + `uiTokens.container` com `max-w-[1320px]`. |
| Header | `SiteHeader` com `useLocation`: em **`/`** → `fixed`, vidro escuro, logo branca; CTAs com contraste sobre o hero. |
| Hero | Overlays em camadas, grade leve, colunas no desktop, **aside** com checklist numerada (mesmos `quickPoints`), CTAs full-width no mobile. |
| Problema | Fundo `lp-surface-tech-light`; opcional **`supportPanel`** em split (só conteúdo da config). |
| Solução | `lp-surface-tech-dark` + faixa superior; **`railAside`** opcional na config para coluna auxiliar no modo `rail`. |
| Serviços | Carrossel com **`ResizeObserver`** + **`translate3d`**, faixa de controles (setas, contador, dots mobile, tabs desktop), slide **split** imagem/texto. |
| Diferenciais | Grade **2→3**; primeiro pilar em **faixa total** quando `featuredCount > 0` e `items.length > 4`. |
| Audiência | Opcional **`audience.groups`**; fallback em um grupo “Segmentos” com `items`. |
| Autoridade | `pullQuote` opcional; split com imagem mais alto; fundo de seção ligado à audiência (`border-t-0`). |
| FAQ | `max-w-4xl`, cartões de accordion maiores. |
| CTA final | `max-w-5xl`, faixa superior, grade leve; espaçamento `default`. |
| Rodapé | `zinc-100`, grid com atalhos à direita no desktop. |

## Contratos novos (`src/features/landing/types/index.ts`)

- `LandingProblemConfig.supportPanel?`
- `LandingSolutionConfig.railAside?`
- `LandingAudienceConfig.groups?`
- `LandingAuthorityConfig.pullQuote?`

Conteúdo atualizado nas três LPs em `src/content/landings/*.ts` onde fazia sentido.

## Performance e riscos

- **ResizeObserver** no carrossel: custo baixo; revalida largura em resize/orientação.
- **Sem swipe touch** no trilho por `transform` — documentado em `docs/error-logs/ERR-2026-04-18-carousel-touch.md`.
- Build local depende de variáveis `VITE_*` (já existente no projeto); `tsc --noEmit` validado.

## Arquivos principais

- `src/features/landing/blocks/*` (blocos listados acima)
- `src/shared/layout/SiteHeader.tsx`, `SiteFooter.tsx`
- `src/index.css` (`.container`, utilitários `lp-*`)
- `src/shared/ui/tokens.ts`
