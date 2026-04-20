# Release — Etapa 4: ritmo visual, carrossel e ecossistema de 3 LPs (2026-04-18)

## Resumo

Evolução controlada das **3 LPs internas** para reduzir monotonia: **carrossel de serviços** (leve, acessível), **diferenciais em cards com ícones** + microefeitos, **widgets opcionais** após serviços, **problema em modo vertical** com `impactLine`, **FAQ** mais utilitário e **rodapé** sem duplicar o par de CTAs grandes do fechamento.

## Repetições atacadas

- Sequência repetida “título + grade longa” em **serviços** (três blocos empilhados).
- **Diferenciais** com o mesmo peso visual de listas genéricas (agora icon-cards com hierarquia e hover funcional).
- **CTA duplicado** no footer (agora atalhos textuais).

## Decisões principais

| Tema | Decisão |
| --- | --- |
| Serviços | Carrossel **sem lib externa** (scroll-snap, setas, dots, teclado, `aria-live`). |
| Conteúdo do slide | `microDescription` + primeiro highlight como **destaque operacional** + lista capada + CTA. |
| Pós-serviços | `postServiceWidgets` (0–2) com tipos declarados no design system. |
| Diferenciais | `iconCards` + `featuredCount`; `rails` mantido como alternativa densa. |
| Problema | `vertical` padrão + `impactLine` nas 3 LPs atuais. |
| Template | Diferenciais **subidos** para logo após serviços/widgets; comparativo/processo depois. |

## Variação entre LPs

| LP | `impactLine` / problema | Widgets pós-serviço | `featuredCount` |
| --- | --- | --- | --- |
| Empilhadeiras | Custo de parada | `processMini` | 1 |
| Baterias | Perda de performance | `techStrip` | 2 |
| Lítio | Tempo de recarga / turno | `statBand` + `imageInsight` | 1 |

## Impacto técnico

- **Sem** novas dependências npm.
- Bundle `Home-*` cresceu levemente (carrossel + widgets); dentro do esperado para o ganho de UI.
- `npm run lint` e `npm run build`: **OK** na consolidação desta release.

## Performance (Web Vitals)

- Primeira imagem do carrossel: `loading="eager"`; demais `lazy`.
- **Lighthouse pós-Etapa 4:** ainda sujeito à coleta local/CI — pasta `docs/releases/evidence/etapa-4-2026-04-18/` e motivo se ausente em `docs/error-logs/ERR-2026-04-18-lighthouse-etapa-4-pendente.md`.

## Riscos de regressão

- **CLS** no carrossel: monitorar alturas mínimas e troca de copy.
- **Foco:** usuário precisa focar a região para usar setas do teclado (comportamento explícito no `tabIndex={0}`).
- **SR:** validar leitura do `aria-live` (pode ser ajustado para menos verboso se QA pedir).

## Documentação

- `docs/design-system/README.md`
- `docs/implementation/LP-2026-04-18-etapa-4-familias-secao.md`
- `docs/decision-log/DEC-2026-04-18-etapa-4b-carrossel-e-icon-cards.md`
- `docs/changelog/CHANGELOG.md`
- `docs/dev-logs/error-log.md`

## Pendências reais

1. Arquivar JSONs Lighthouse (institucional + 2 LPs) em `etapa-4-2026-04-18`.
2. QA manual mobile (snap + setas + dedo) em Safari/Chrome.
