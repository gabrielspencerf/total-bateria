# Changelog | Total Bateria (institucional)

## [2026-04-18] — Etapa 3: evidência Lighthouse + hardening

### Adicionado

- Evidências Lighthouse (JSON + `LIGHTHOUSE-RESUMO.md` + `METODOLOGIA.md`) em `docs/releases/evidence/etapa-3-2026-04-18/`.
- `heroBackgroundVideoWebmPrimary` e `<source>` WebM opcional no hero; `PEND-hero-webm.md` quando asset ausente.
- Classes `.tb-footer-link` e `.tb-brand-footer` para foco consistente no rodapé.

### Alterado

- **H2 global** em `src/index.css`: `font-black` (decisão documentada).
- `ServicesDropdown`, `MobileNav`, `Footer`, `HeroSection` (foco CTAs), `ContactForm` (disabled no submit), `Button` variante WhatsApp (`green-800`).
- `runtimeMediaPolicy.allowedVideoFormats` inclui `.webm`.

### Documentação

- Release `RELEASE-2026-04-18-etapa-3-evidencia.md`, decision logs e `INST-2026-04-18-etapa-3.md`.

## [2026-04-18] — Interface etapa 2 (componentes e paridade LP)

### Alterado

- Cards de serviço, segmento, diferencial, case e depoimento: removidos blobs/`scale` decorativos; hover só borda/sombra em linha com `.tb-card-surface`.
- `ContactForm`: campos com `.tb-form-field` / `.tb-form-label`; alertas com `rounded-xl`; cabeçalho do formulário com `font-black`.
- `Header`: blur/sombra/duração reduzidos; botão do menu mobile com `focus-visible`.
- `DesktopNav`: foco visível em links.
- `HeaderCTA`: removidas sombras exageradas nos botões.
- `CTASection`: ritmo vertical, `font-black` no título, parágrafo opcional sem quebrar layout.
- `Footer`: input da newsletter com `.tb-form-field-dark`; ícones sociais condicionais a URLs em `SITE_CONFIG.social`.
- `ServicePageTemplate`: hero e intro com hierarquia `font-black` onde aplicável; blocos “list-card” com `.tb-card-static`.
- `ServicesCarousel`: slide 300ms; títulos `font-black`; foco em links e setas.
- `src/index.css`: classes de design system para formulário, cartão e utilitários alinhados à LP.

### Documentação

- Atualizados `design-system`, `decision-log`, `implementation`, `releases`, `error-logs` (métricas Web Vitals pendentes de medição automatizada).

## [2026-04-18] — Ecossistema visual etapa 1

### Alterado

- `Button`: paridade com landing — `rounded-xl`, hover só cor, sem sweep/glow/translate.
- `HeroSection`: um vídeo de fundo em desktop; poster + gradientes; sem carrossel; mobile e `prefers-reduced-motion` estáticos.
- `SectionHeading`: `font-black` em títulos de seção.
- `index.css`: tema Montserrat, tokens de marca, scroll e motion acessíveis.

### Adicionado

- `heroBackgroundVideoPrimary` em `mediaRuntime.ts`.
- Documentação em `/docs` (README, design-system, implementation, error-logs, decision-log, releases, changelog).

### Removido

- Troca automática de vídeo de fundo a cada 7 segundos.
