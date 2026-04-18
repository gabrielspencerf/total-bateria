# DEC — refinamento estrutural da landing (2026-04-18)

## Contexto

A landing já tinha DNA visual estável, mas ainda transmitia **blocos soltos**, **carrossel frágil** (peek, setas sobrepostas, altura excessiva) e **subuso de largura** no desktop. O pedido foi corrigir **estrutura**, não cosmético.

## Decisões

1. **Carrossel sem Embla (por ora)**  
   **Por quê:** manter bundle enxuto e controle total do layout.  
   **Como:** `ResizeObserver` mede a largura útil do viewport do trilho; slides com `width === vw` e trilho com `translate3d(-index * vw, 0, 0)`.  
   **Trade-off:** sem **swipe** nativo de touch no trilho (documentado em error-logs). Setas, tabs/dots e teclado cobrem navegação.

2. **Header fixo só na home (`/`)**  
   **Por quê:** integrar header ao hero sem afetar `/institucional` nem futuras rotas.  
   **Como:** `useLocation().pathname === "/"` alterna estilos e logo (colorida vs branca).

3. **Superfícies `lp-*` em CSS puro**  
   **Por quê:** profundidade sem textura bitmap nem dependência extra.  
   **Como:** classes em `@layer components` (`lp-grid-faint`, `lp-surface-tech-light`, …).

4. **Novos campos no contrato de conteúdo**  
   **Por quê:** evitar copy hardcoded em JSX (regra do repo).  
   **Como:** `supportPanel`, `railAside`, `groups`, `pullQuote` opcionais nos tipos + preenchimento em `src/content/landings/*.ts`.

5. **Hero aside com os mesmos `quickPoints`**  
   **Por quê:** reforço editorial **sem inventar** estatística; muda só a diagramação da mesma informação.

## Regressões observadas

- Nenhuma em `tsc --noEmit` após o refactor.
- Build Vite local exige env `VITE_*` (pré-existente).

## Próximos passos (opcional)

- Se o swipe touch for requisito absoluto: reavaliar **scroll-snap** interno com snap obrigatório **ou** Embla com mesma pele visual.
- Medir novamente Lighthouse/Web Vitals após deploy com env válido.
