# Conversão HEIC -> WebP 1600px (dois passos — compatível com tiled HEIC no ffmpeg 8.x)
param(
  [Parameter(Mandatory = $true)][string]$InputHeic,
  [Parameter(Mandatory = $true)][string]$OutputWebp,
  [int]$MaxWidth = 1600,
  [int]$Quality = 80
)

$tmp = Join-Path $env:TEMP "heic-step-$(New-Guid).png"
try {
  ffmpeg -y -hide_banner -loglevel error -i $InputHeic -frames:v 1 $tmp
  ffmpeg -y -hide_banner -loglevel error -i $tmp -vf "scale=${MaxWidth}:-1" -frames:v 1 -c:v libwebp -quality $Quality $OutputWebp
  Write-Host "OK $OutputWebp"
}
finally {
  Remove-Item $tmp -ErrorAction SilentlyContinue
}
