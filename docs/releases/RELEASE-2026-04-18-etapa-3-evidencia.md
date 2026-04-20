# Release — Etapa 3: evidência, hardening e base oficial (2026-04-18)

## Escopo

1. **Medição:** Lighthouse 11.7.1 em build de produção servido por `vite preview` (localhost) — proxy documentado para **staging** real.
2. **Hardening interativo:** `MobileNav`, `ServicesDropdown`, links do hero, rodapé, `ContactForm` (disabled no envio), foco visível e HTML válido na LP (`SiteHeader`).
3. **Tipografia:** decisão explícita sobre **H2 global `font-black`** + exceção documentada no hero institucional; LP `index.css` alinhado.
4. **Hero / mídia:** suporte a **WebM opcional** no institucional; pendência formal se asset não existir.
5. **Design system:** atualizado com regras finais e link para evidências.

## Arquivos alterados (principais)

### Institucional (`total-bateria`)

- `src/index.css` — H2 `font-black`; classes `.tb-footer-link`, `.tb-brand-footer`.
- `src/data/mediaRuntime.ts` — política WebM+MP4; `heroBackgroundVideoWebmPrimary` (`null` até asset).
- `src/components/ui/HeroSection.tsx` — `<source>` WebM condicional; `focus-within` nos CTAs; comentário de exceção tipográfica no H2 do card.
- `src/components/layout/header/ServicesDropdown.tsx` — foco, `pointer-events`, painel sem `scale`, blur moderado.
- `src/components/layout/header/MobileNav.tsx` — `useReducedMotion`, foco visível, backdrop com `motion-reduce`.
- `src/components/layout/Footer.tsx` — links com utilitários de foco; ícones `aria-hidden`.
- `src/components/ui/ContactForm.tsx` — `disabled={isSubmitting}` em todos os campos.
- `src/components/ui/Button.tsx` — variante `whatsapp` com `green-800`.
- `docs/design-system/README.md`, `docs/changelog/CHANGELOG.md`, `docs/releases/evidence/etapa-3-2026-04-18/*`, este arquivo.
- `docs/decision-log/DEC-2026-04-18-etapa-3-*`, `docs/implementation/INST-2026-04-18-etapa-3.md`.

### LP (`total-bateria - lp1`)

- `src/index.css` — H2 `font-black`.
- `src/shared/layout/SiteHeader.tsx` — CTAs como `<a>` estilizados; `aria-label` WhatsApp; logo com `alt=""` + `aria-label` no link.
- `src/shared/ui/Button.tsx` — `whatsapp` `green-800`.
- `src/features/landing/blocks/HeroBlock.tsx` — destaque `text-red-400`.
- `docs/design-system/README.md`, `docs/changelog/CHANGELOG.md`, `docs/releases/evidence/etapa-3-2026-04-18/*`.

## Evidências Lighthouse

| Destino | Artefatos |
| --- | --- |
| Resumo legível | `docs/releases/evidence/etapa-3-2026-04-18/LIGHTHOUSE-RESUMO.md` |
| Metodologia / limites | `.../METODOLOGIA.md` |
| JSON bruto | `lh-inst-*.json` (4), LP em repositório `lp1` |

### Scores (síntese — ver tabela no resumo)

- **Institucional home mobile:** Performance 77, A11y 86, BP 100, SEO 93.
- **Institucional home desktop:** Performance 96, A11y 86, BP 100, SEO 92.
- **Institucional /contato mobile:** 84 / 85 / 100 / 92.
- **Institucional /contato desktop:** 99 / 85 / 100 / 91.
- **LP empilhadeiras mobile (pós-fix a11y, porta 4175):** Performance 80, **A11y 100**, BP 100, SEO 93.
- **LP empilhadeiras desktop:** Performance 98, **A11y 100**, BP 100, SEO 92.

### Métricas-chave (LCP / CLS / TBT)

- Valores numéricos e peso total estão no **JSON** e na tabela de `LIGHTHOUSE-RESUMO.md`.
- **INP:** não disponível nestes relatórios LH 11; usar **TBT** como proxy + teste manual.

### Vídeo / imagem (achados)

- **Home institucional:** MP4 do hero domina transferência (~6 MiB+); principal alavanca de peso e LCP no mobile.
- **LP:** vídeos do hero + imagens operacionais lideram o top de bytes.

## Inconsistências corrigidas (hardening)

- Dropdown de serviços: painel com `z-index` explícito, sem `scale` decorativo, `pointer-events-none` fechado, foco em itens.
- Mobile nav: redução de motion, foco em links/submenu, backdrop respeita `prefers-reduced-motion`.
- Rodapé: foco consistente; classes reutilizáveis.
- Formulário: bloqueio de edição durante submit.
- LP header: remoção de `<button>` dentro de `<a>`; nome acessível no WhatsApp só com ícone; contraste do verde.

## Antes / depois (resumo)

- **Antes:** métricas Lighthouse não arquivadas; padrão `--only-categories` gerando JSON sem scores; a11y LP mobile com falhas (`link-name`, `button-name`, `color-contrast`).
- **Depois:** JSON + resumo versionados; scores reproduzíveis; **A11y LP 100** na coleta pós-correção.

## Riscos de regressão

- **`heroBackgroundVideoWebmPrimary`:** quando preenchido, validar em Safari/Firefox ordem de codecs.
- **`SiteHeader`:** CTAs duplicam classes do `Button` — alterações futuras no `Button` exigem espelhar nos tokens do header ou extrair util compartilhado.

## Pendências reais

1. **Staging/HTTPS:** repetir Lighthouse no domínio final (CDN, compressão, cache).
2. **WebM hero institucional:** exportar arquivo, versionar em `public/`, setar `heroBackgroundVideoWebmPrimary` — ver `PEND-hero-webm.md`.
3. **`<a><Button>` em blocos LP (ex. `HeroBlock`):** ainda podem existir; não falharam na última coleta após contraste, mas HTML semântico ideal seria unificar em `<a>` estilizado ou `Button` como polimórfico — backlog pequeno.
4. **RUM / INP de campo.**

## Resumo executivo

A Etapa 3 **comprova** com Lighthouse local o trade-off de peso da home institucional (vídeo) versus páginas leves (`/contato`), **endurece** navegação e formulário com foco/disabled/HTML válido, **decide** H2 global `font-black` com exceção explícita no hero, e **documenta** limites (localhost, INP). O design system passa a referenciar evidências em `docs/releases/evidence/etapa-3-2026-04-18/`.
