# Atualizações da refatoração

## 2026-04-18

### Ecossistema institucional + LP + documentação

- Institucional (`../total-bateria`): tema Montserrat/tokens, botão alinhado à LP, hero com **um** vídeo (sem carrossel), `SectionHeading` com `font-black`, docs em `/docs` (README, design-system, implementation, error-logs, decision-log, releases, changelog).
- LP: componente `Reveal` (scroll) em Problema e Diferenciais; Montserrat no `index.html`; árvore `/docs` mínima obrigatória.

### Mídia e performance

- Auditoria de `material_estrutura/` documentada em `docs/refactor/media-audit.md`.
- HEIC convertidos para **WebP** (~1600px, qualidade 80) em `public/assets/landings/shared` e `.../empilhadeiras`.
- Vídeo hero da LP **empilhadeiras**: trecho **12s**, 1280px, H.264 CRF 28, sem áudio, **~1,8 MB** + poster WebP.
- MP4/MOV brutos redundantes ou muito pesados **não** publicados no fluxo principal (permanecem como input em `material_estrutura/`).
- Conteúdo das LPs passa a referenciar mídia otimizada (`hero.visual`, imagens opcionais em serviços/autoridade/benefícios).

### Consistência visual

- Cards de serviços com fundo branco e `shadow-sm` para alinhar à leitura “institucional / B2B”.
- Hero com sombra suave no frame de mídia.

### Hero em background (2026-04-18 — iteração)

- Hero **full-bleed**: mídia de fundo + **overlays** em gradiente para contraste e continuidade com a faixa escura seguinte.
- **Vídeo** só na LP empilhadeiras: **WebM + MP4**, poster obrigatório; **sem vídeo em `< md`** (só poster); **`prefers-reduced-motion`** oculta vídeo em desktop.
- LPs com **imagem** no hero (baterias, lítio) usam o **mesmo layout** de fundo (premium, consistente).
- Ajustes de **ritmo entre blocos**: bordas superiores sutis nas faixas escuras, sombras coerentes em cards, CTA final com mais peso visual.
- Detalhamento: `docs/refactor/hero-layout-hierarquia-performance.md`.

### Documentação

- Novos guias: `docs/refactor/media-pipeline.md`, `material_estrutura/README.md`.
- `docs/estrutura-atual.md` e design system atualizados (sem formulário; com mídia).

## 2026-04-16

### Arquitetura

- Refatorada a base para modelo template com seleção de landing por `VITE_LANDING_KEY`.
- Removido o roteamento multi-LP por slug (`/lp/:slug`).
- Centralizado o catálogo de LPs em `landingRegistry` com chaves:
  - `empilhadeiras`
  - `baterias`
  - `litio-retrofit`

### Runtime e configuração

- Criado `config/runtime.ts` com validação obrigatória de:
  - `VITE_LANDING_KEY`
  - `VITE_SITE_URL`
  - `VITE_WHATSAPP_NUMBER`
  - `VITE_COMPANY_NAME`
  - ~~`VITE_LEAD_DESTINATION`~~ (removido como obrigatório em ciclo posterior; captura por CTA)
- Ajustado `config/site.ts` para derivar SEO/canonical da landing ativa.

### Conteúdo e blocos

- Adicionadas novas LPs em `src/content/landings` com base nas copies do refactor.
- Engine de blocos ampliada para aceitar:
  - obrigatórios: `hero`, `problem`, `solution`, `services`, `differentials`, `audience`, `authority`, `faq`, CTA final (sem formulário)
  - opcionais: `benefits`, `comparison`, `process`, `coverage`

### Limpeza técnica

- Removidas configs antigas de LP por slug.
- Removida página de roteamento dinâmico de landing.
