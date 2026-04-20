# Auditoria de mídia | `material_estrutura`

Data da auditoria: 2026-04-18.

## Resumo executivo

| Origem | Arquivos | Ação na base |
| --- | --- | --- |
| `empilhadeira/` | 7 | 1 vídeo hero otimizado + 3 WebP + bruto mantido como input |
| `geral/` | 7 | 4 WebP em `shared/` + bruto mantido; vídeos MP4 **não** publicados na LP (peso alto, conteúdo genérico) |

Peso aproximado do bruto: **~280 MB**. Peso dos assets publicados otimizados em `public/assets/landings/`: **~3,25 MB**.

---

## Inventário (nome, extensão, origem, tamanho bruto)

### `material_estrutura/empilhadeira`

| Arquivo | Ext. | Tamanho (aprox.) | Uso ideal | LP destino | Papel |
| --- | --- | --- | --- | --- | --- |
| C1956.MP4 | mp4 | ~48 MB | Bruto — mesmo tipo de cena que demais C19xx | empilhadeiras | **Descartado para web** (redundante; manter só como arquivo de arquivo) |
| C1983.MP4 | mp4 | ~48 MB | Idem | empilhadeiras | **Descartado para web** |
| C1985.MP4 | mp4 | ~44 MB | Fonte do **trecho curto** recompressado | empilhadeiras | **Fonte →** `hero-empilhadeiras-operacao-1280.mp4` |
| IMG_0776.MOV | mov | ~52 MB | Mesma família de operação; peso alto | empilhadeiras | **Descartado para web** (não convertido; MP4 já cobre hero) |
| IMG_0778.HEIC | heic | ~1,6 MB | Cena operacional / técnico | empilhadeiras | **Convertido** → `empilhadeira-operacao-tecnica-1600.webp` |
| IMG_0782.HEIC | heic | ~4,4 MB | Serviço / proximidade equipamento | empilhadeiras | **Convertido** → `empilhadeira-servico-manutencao-1600.webp` |
| IMG_0804.HEIC | heic | ~0,8 MB | Frota / ambiente | empilhadeiras | **Convertido** → `empilhadeira-frota-ambiente-1600.webp` |

### `material_estrutura/geral`

| Arquivo | Ext. | Tamanho (aprox.) | Uso ideal | LP destino | Papel |
| --- | --- | --- | --- | --- | --- |
| C1953.MP4 | mp4 | ~28 MB | Operação CD / frota | baterias / litio / empilhadeiras | **Descartado para web** neste ciclo (evitar 3× vídeos pesados; hero das outras LPs em imagem) |
| C1961.MP4 | mp4 | ~28 MB | Idem | geral | **Descartado para web** |
| C1978.MP4 | mp4 | ~28 MB | Idem | geral | **Descartado para web** |
| IMG_0710.HEIC | heic | ~0,83 MB | Galpão / operação | baterias (hero), shared | **Convertido** → `shared-galpao-operacao-01-1600.webp` |
| IMG_0716.HEIC | heic | ~0,62 MB | Logística | litio (benefícios), shared | **Convertido** → `shared-operacao-logistica-02-1600.webp` |
| IMG_0787.HEIC | heic | ~1,1 MB | Equipamentos industriais | baterias (autoridade), litio (hero), shared | **Convertido** → `shared-equipamentos-industriais-01-1600.webp` |
| IMG_0799.HEIC | heic | ~1,1 MB | CD / armazém | baterias (serviço), shared | **Convertido** → `shared-centro-distribuicao-01-1600.webp` |

---

## Descartes e motivos (fluxo principal da LP)

- **MP4 duplicados** (`C1956`, `C1983`, geral `C1953`, `C1961`, `C1978`): conteúdo similar, **custo de carregamento** injustificado para hero sem edição; permanecem como material bruto para futura edição/corte.
- **`IMG_0776.MOV`**: **~52 MB**; hero já atendido por trecho leve derivado de `C1985.MP4`.

---

## Assets finais em `public/assets/landings/`

### `empilhadeiras/`

| Arquivo | Uso na LP |
| --- | --- |
| `video/hero-empilhadeiras-operacao-1280.webm` | Hero: WebM VP9 (~960px), preferência de carga |
| `video/hero-empilhadeiras-operacao-1280.mp4` | Hero: fallback H.264 |
| `video/hero-empilhadeiras-operacao-poster-1280.webp` | Poster / mobile / reduced-motion |
| `empilhadeira-servico-manutencao-1600.webp` | Imagem apoio 1º card de serviços |
| `empilhadeira-operacao-tecnica-1600.webp` | Apoio visual 2º card (locação) |
| `empilhadeira-frota-ambiente-1600.webp` | Figura bloco autoridade |

### `shared/`

| Arquivo | Uso |
| --- | --- |
| `shared-galpao-operacao-01-1600.webp` | Hero **baterias** |
| `shared-centro-distribuicao-01-1600.webp` | Apoio serviço **baterias** |
| `shared-equipamentos-industriais-01-1600.webp` | Hero **litio** + autoridade **baterias** |
| `shared-operacao-logistica-02-1600.webp` | Figura **benefícios** litio |

Pastas `baterias/` e `litio-retrofit/` ficaram reservadas para futuros assets exclusivos (nenhum arquivo obrigatório neste ciclo).

---

## Curadoria comercial (por LP)

- **empilhadeiras:** vídeo curto no hero (prova de operação real) + foto manutenção no 1º serviço + frota na autoridade.
- **baterias:** hero galpão (energia operação) + CD no card de manutenção + equipamentos na autoridade (continuidade B2B).
- **litio-retrofit:** hero equipamentos (modernização) + operação logística nos benefícios + **galpão** (`shared-galpao-operacao-01`) no 1º card de retrofit (contexto industrial, material `geral`).

Nenhuma galeria extra; uma figura opcional por bloco, alinhado ao pedido de **pouca mídia, alta leitura**.
