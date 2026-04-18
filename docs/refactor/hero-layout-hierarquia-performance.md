# Hero em background, hierarquia visual e performance

Atualização aplicada no código (2026-04-18), alinhada ao pedido de **um vídeo de fundo no hero principal** (sem virar vitrine de bitrate), **fallback**, **overlay** e **melhor relação entre blocos**.

> **Nota:** O trecho técnico sobre “linha de alta Renault / Classe A” do chat não se aplica a este repositório (produto web). Abaixo está só o que foi feito nas landing pages.

## Hero — layout e mídia

### Padrão visual

- Hero **full-bleed** (`min-height` com `100dvh` capado): mídia atrás, **dois gradientes** (vertical + horizontal) para leitura do texto e continuidade com o bloco **Solução** (`zinc-950`).
- Conteúdo em **coluna única** com `max-w-2xl`: hierarquia clara (título > descrição > bullets > CTAs).
- Bullets com **painel leve** (`border-white/10`, `bg-white/5`, `backdrop-blur`) para separar do fundo sem poluir.

### Vídeo (LP empilhadeiras)

- **WebM (VP9)** primeiro (`hero-empilhadeiras-operacao-1280.webm`, ~960px escala, ~777 KB) + **MP4** fallback (`…1280.mp4`).
- **Poster** WebP sempre presente sob o vídeo (LCP e fallback).
- **Sem áudio**; `muted`, `playsInline`, `loop`, `preload="metadata"`, `autoPlay` apenas quando o vídeo está visível.
- **Mobile (`< md`)**: só **poster estático** — vídeo não baixa nem reproduz (economia de dados e CPU).
- **`prefers-reduced-motion`**: em `md+`, vídeo oculto (`motion-reduce:md:hidden`); permanece o poster.
- Informação crítica continua no **texto**; vídeo é **decorativo** (rótulo via `aria-label` na `<section>`).

### Imagem (LPs baterias e lítio)

- Mesmo padrão de **fundo + overlay**; `fetchPriority="high"` na imagem do hero para LCP.

## Hierarquia e “widgets” (blocos)

- **Problema:** cards com `shadow-sm` (menos “flutuando solto”).
- **Solução / Diferenciais:** `border-t border-zinc-800/80` para **costura** entre faixas escuras; cards com `shadow-md` e borda `border-zinc-800/90`.
- **FAQ / Audiência:** cards brancos com `shadow-sm` e FAQ com fundo explícito branco.
- **CTA final:** `border-t` na seção + cartão com `shadow-lg` (fechamento mais “premium” sem competir com o hero).

## Performance e UX

| Decisão | Motivo |
| --- | --- |
| WebM antes do MP4 | Menor peso em browsers compatíveis; MP4 cobre Safari/engine antigos |
| Vídeo só `md+` | Evita bitrate e aquecimento no primeiro mobile |
| `preload="metadata"` | Reduz trabalho inicial vs `auto` |
| Poster como primeira camada | Bom LCP / CLS; leitura imediata |
| `scroll-behavior: smooth` desligado com `prefers-reduced-motion` | Acessibilidade |
| `scroll-margin-top` só em `section[id]:not(#hero)` | Âncoras não empurram o hero de forma estranha |

## O que não foi feito (de propósito)

- **Formulário** não foi reintroduzido (fluxo continua só em CTAs).
- **Múltiplos vídeos** em sequência nas LPs — mantido **apenas um** contexto de vídeo (hero empilhadeiras).
- **Autoplay com som** — não existe.

## Arquivos tocados (resumo)

- `src/features/landing/blocks/HeroBlock.tsx` — refactor completo do hero.
- `src/features/landing/types/index.ts` — vídeo: `webmSrc` + `mp4Src`.
- `src/content/landings/empilhadeiras.ts` — paths WebM/MP4/poster.
- `ProblemBlock`, `SolutionBlock`, `DifferentialsBlock`, `FaqBlock`, `AudienceBlock`, `FinalCtaBlock` — ritmo e sombras.
- `src/index.css` — `prefers-reduced-motion` + ajuste de `scroll-margin-top`.
- `public/assets/landings/empilhadeiras/video/*.webm` — asset gerado.

## Pendências opcionais

- Se o WebM ainda pesar em redes muito lentas, gerar variante **720px** e apontar `webmSrc` no config.
- Validar LCP/CLS no Lighthouse (mobile e desktop) após deploy.
