# Release — Etapa 2: interface institucional + paridade com LPs (2026-04-18)

## Escopo da etapa

Auditoria e correção de **componentes internos** do site institucional usados transversalmente (header, footer, cards, formulário, CTA, template de serviço, carrossel) e alinhamento de **motion e cartões** nas landing pages do repositório `total-bateria - lp1`, **sem** reverter decisões da etapa 1.

## Rotas auditadas (institucional)

Todas as rotas sob `<Layout />` em `src/AnimatedRoutes.tsx`:

- `/`, `/sobre`, `/servicos`, `/segmentos-atendidos`, `/diferenciais`, `/cases-e-clientes`, `/contato`
- Serviços: `/servicos/baterias-tracionarias`, `/servicos/baterias-de-litio`, `/servicos/empilhadeiras`, `/servicos/locacao-de-equipamentos`, `/servicos/pecas-e-acessorios`, `/servicos/treinamentos-e-seguranca`
- Legais: `/politica-de-privacidade`, `/termos-de-uso`

## Componentes corrigidos (institucional)

- `Header`, `DesktopNav`, `HeaderCTA`, `Footer`
- `ContactForm`, `CTASection`, `ServicePageTemplate`, `ServicesCarousel`
- `ServiceCard`, `SegmentCard`, `DifferentialCard`, `CaseCard`, `TestimonialCard`

## Inconsistências eliminadas

- Raio e foco de inputs genéricos (`rounded-md`, `focus:ring` inconsistente) → classes `.tb-form-*`.
- Cards com “blob” e `scale` em hover → superfície única `.tb-card-surface` / `.tb-card-static`.
- `CTASection` com `font-bold` no título vs hierarquia `font-black` do restante.
- Header com blur/sombra excessivos e transição longa.
- Rodapé: newsletter com raio desalinhado; redes com `href` incorreto para `baseUrl` e micro-translação em hover.
- `CaseCard`: gradiente de hover no bloco de depoimento (efeito sem função clara).
- `ServicesCarousel`: transição de slide mais longa que o padrão de motion acordado.

## Impacto visual

- Leitura mais estável em listagens e cards; hierarquia de títulos de CTA e heros secundários de serviço mais próxima das LPs.

## Impacto técnico

- Novas classes em `@layer components` (`src/index.css`).
- `SITE_CONFIG.social` opcional com strings vazias — comportamento explícito no `Footer`.

## Impacto em performance

- **Não medido** nesta release (ver `docs/error-logs/ERR-2026-04-18-web-vitals-nao-medidos.md`).
- Build de produção do institucional concluído com sucesso; CSS principal ~52.5 kB gzip ~8.7 kB (valor do último `vite build` local).

## Riscos de regressão

- **Ícones sociais ocultos** até que `SITE_CONFIG.social` receba URLs — intencional para evitar links falsos.
- Hover de cards mais sutil: validar com stakeholders se ainda transmite affordance suficiente.

## Pendências reais

- Medições Web Vitals e peso em rede real.
- URLs de redes sociais e revisão de copy do rodapé (CNPJ placeholder ainda presente — fora do escopo desta etapa).

## Resumo executivo

A etapa 2 removeu ruído visual “de template”, unificou formulário e cards ao design system em código e aproximou header/CTA do tom industrial das LPs. Métricas de performance continuam **pendentes de instrumentação**.

## Landing pages (`total-bateria - lp1`)

- `Reveal` mais curto (300ms, deslocamento menor).
- `Reveal` aplicado a blocos adicionais (solução, benefícios, comparação, audiência, autoridade, prova social, serviços).
- Cards internos de alguns blocos passam a `rounded-2xl` para alinhar ao token de cartão.
