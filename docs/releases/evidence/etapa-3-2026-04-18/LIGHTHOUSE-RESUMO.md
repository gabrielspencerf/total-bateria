# Lighthouse — resumo Etapa 3 (localhost / build prod)

Data da coleta: **2026-04-18**. Lighthouse **11.7.1**, throttling simulado. Ver `METODOLOGIA.md`.

## Scores por categoria (0–100)

| Página | Form factor | Performance | Accessibility | Best Practices | SEO |
| --- | --- | ---: | ---: | ---: | ---: |
| Institucional `/` | Mobile | 77 | 86 | 100 | 93 |
| Institucional `/` | Desktop | 96 | 86 | 100 | 92 |
| Institucional `/contato` | Mobile | 84 | 85 | 100 | 92 |
| Institucional `/contato` | Desktop | 99 | 85 | 100 | 91 |
| LP empilhadeiras `/` | Mobile | 80 | 100 | 100 | 93 |
| LP empilhadeiras `/` | Desktop | 98 | 100 | 100 | 92 |

> **LP — segunda coleta (pós-correção a11y):** JSONs atualizados com `vite preview` na porta **4175** após ajustes em `SiteHeader` (sem `<button>` dentro de `<a>`), `aria-label` no WhatsApp mobile, contraste do verde WhatsApp (`green-800`) e destaque do hero (`red-400`). Variação de **Performance** no mobile entre corridas é esperada em localhost.

## Métricas principais (síntese)

| Página | FF | LCP | CLS | TBT (proxy main-thread) | Peso total (auditoria) | Requests |
| --- | --- | --- | --- | --- | --- | ---: |
| Inst `/` | M | ~3.5 s | ~0 | ~170 ms | ~7.1 MiB | 27 |
| Inst `/` | D | ~1.0 s | ~0 | ~0 ms | ~7.4 MiB | 25 |
| Inst `/contato` | M | ~3.0 s | ~0 | ~140 ms | ~183 KiB | 13 |
| Inst `/contato` | D | ~0.8 s | ~0 | ~0 ms | ~183 KiB | 13 |
| LP `/` | M | ~3.9 s | ~0 | ~100 ms | ~1.4 MiB | 14 |
| LP `/` | D | ~0.9 s | ~0 | ~0 ms | ~1.8 MiB | 15 |

Valores exatos estão nos campos `audits` dos arquivos JSON correspondentes.

## Recursos mais pesados (observação)

### Institucional home

- **Vídeo MP4** do hero (`institucional-ambiente-loop-01.mp4`) domina o peso (~6–6.9 MiB transferidos na medição) — principal alavanca para LCP no mobile e para peso total.
- Imagens WebP do carrossel de serviços na home aparecem entre os maiores após o vídeo (~120–200 KiB cada no trace).

### LP empilhadeiras

- **Vídeo** do hero (WebM + MP4 na prática) concentra a maior parte do download (~0.8 + ~0.2 MiB por extensão no trace).
- Imagem operacional e bundle JS seguem na lista.

## Comparação rápida

- **`/contato`** é muito mais leve que a **home institucional** (sem carrossel pesado + sem vídeo na rota), refletindo scores de performance mais altos no mobile.
- A **LP** fica entre as duas: menos pesada que a home institucional, porém com mídia de hero relevante.
- **Acessibilidade:** LP mobile (82) vs LP desktop (95) sugere revisar contrastes/tamanhos em componentes móveis na LP (evidência no JSON `lh-lp-empilhadeiras-home-mobile.json` — audit `color-contrast` e correlatos).

## INP

- Não reportado diretamente nestes JSONs (Lighthouse 11). Usar **TBT** e testes manuais de toque/teclado como complemento até migração para relatório que inclua INP de campo.
