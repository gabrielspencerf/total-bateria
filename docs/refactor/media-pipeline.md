# Pipeline de mídia | LPs Total Bateria

## Onde fica cada coisa

| Tipo | Local |
| --- | --- |
| Bruto (HEIC, MOV, MP4 pesado) | `material_estrutura/` |
| Otimizado servido pelo Vite | `public/assets/landings/` |

## Convenção de nomes (slug, sem espaços)

Padrão: `{escopo}-{assunto}-{detalhe}-{larguraAprox}.webp`

- **escopo:** `shared` \| `empilhadeiras` \| `baterias` \| `litio-retrofit` (pastas sob `landings/`)
- **assunto:** galpao, operacao, servico, hero, video, etc.
- **largura:** sufixo `-1600` ou `-1280` quando for imagem redimensionada

Vídeos hero: `public/assets/landings/{lp}/video/hero-{lp}-{tema}-1280.mp4` + poster `.webp` homônimo `-poster-1280.webp`.

## HEIC → WebP (ffmpeg)

O decoder HEIC do ffmpeg monta um filtergraph complexo; **não** use `-vf scale=...` no mesmo passo do input HEIC (erro “simple and complex filtering”). Fluxo em **dois passos**:

```powershell
$tmp = "temp-heic.png"
ffmpeg -y -i "entrada.HEIC" -frames:v 1 $tmp
ffmpeg -y -i $tmp -vf "scale=1600:-1" -frames:v 1 -c:v libwebp -quality 80 "saida-1600.webp"
Remove-Item $tmp
```

- Largura máxima típica: **1600px** (hero / prova visual em desktop).
- Qualidade WebP: **80** (equilíbrio peso x aparência em LP).

## Vídeo curto para hero (ffmpeg)

Exemplo (12s, 1280px, sem áudio, H.264, fast start):

```powershell
ffmpeg -y -i "origem.mp4" -t 12 -vf "scale=1280:-2,fps=24" -c:v libx264 -preset medium -crf 28 -pix_fmt yuv420p -an -movflags +faststart "hero-empilhadeiras-operacao-1280.mp4"
```

Poster (primeiro frame):

```powershell
ffmpeg -y -i "hero-empilhadeiras-operacao-1280.mp4" -frames:v 1 -vf "scale=1280:-2" -c:v libwebp -quality 82 "hero-empilhadeiras-operacao-poster-1280.webp"
```

WebM (VP9, exemplo leve ~960px; ajuste `crf` conforme qualidade):

```powershell
ffmpeg -y -i "hero-empilhadeiras-operacao-1280.mp4" -an -vf "scale=960:-2" -c:v libvpx-vp9 -crf 42 -b:v 0 -row-mt 1 -cpu-used 4 "hero-empilhadeiras-operacao-1280.webm"
```

No site, o hero usa **`<source>` WebM antes do MP4**; mobile usa só o **poster** (sem baixar vídeo).

## Uso no código

- Caminhos de mídia ficam nos arquivos `src/content/landings/*.ts` (`hero.visual`, `services.cards[].imageSrc`, `authority.figure`, `benefits.figure`, etc.).
- Blocos (`HeroBlock`, `ServicesBlock`, …) **não** hardcodam paths de asset.

## Novas mídias no futuro

1. Colocar bruto em `material_estrutura/{empilhadeira|geral}/`.
2. Converter com os comandos acima (ou script em `tools/convert-landing-media.ps1`).
3. Copiar resultado para `public/assets/landings/...` com nome slug.
4. Apontar no config da LP e documentar em `docs/refactor/media-audit.md` se for conjunto relevante.
