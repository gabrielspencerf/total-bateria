# Briefing de Arquitetura | Template Base de Landing Pages

## Objetivo

Refatorar o projeto para operar como uma base única de landing pages B2B, com seleção da LP correta em build-time via variável de ambiente.

Não haverá slug routing para múltiplas LPs.

Cada domínio terá sua própria build, mas todas as builds sairão da mesma base técnica.

---

## Modelo desejado

- 1 codebase
- 1 design system compartilhado
- 1 template de landing page
- múltiplos arquivos de conteúdo
- 1 variável de ambiente definindo qual LP será empacotada no build

---

## Variável principal

`VITE_LANDING_KEY`

Valores esperados inicialmente:

- `empilhadeiras`
- `baterias`
- `litio-retrofit`

---

## Outras variáveis previstas

- `VITE_SITE_URL`
- `VITE_WHATSAPP_NUMBER`
- `VITE_LEAD_DESTINATION`
- `VITE_COMPANY_NAME`
- `VITE_REGION_LABEL` (opcional, se necessário)

---

## Comportamento esperado

Durante o `npm run build`, a aplicação deve:

1. Ler `VITE_LANDING_KEY`
2. Resolver a configuração correspondente no registry
3. Renderizar apenas a landing selecionada
4. Gerar SEO e config do site com base na landing escolhida
5. Falhar o build se a variável estiver ausente ou inválida

---

## O que NÃO deve existir

- múltiplas LPs navegáveis simultaneamente na mesma build
- slug routing do tipo `/lp/:slug`
- fallback silencioso para landing default errada
- copy hardcoded dentro de JSX
- componentes específicos demais para uma única página
- lógica espalhada em `Home.tsx`

---

## Estrutura desejada

```txt
src/
  shared/
    ui/
    layout/
    brand/
  features/
    landing/
      blocks/
      templates/
      types/
  content/
    landings/
      empilhadeiras.ts
      baterias.ts
      litio-retrofit.ts
      registry.ts
    landing.ts
  config/
    runtime.ts
    site.ts
  pages/
    Home.tsx
```

---

## Regra central

A `Home.tsx` sempre renderiza a LP selecionada no build.

A escolha da LP não acontece por rota.
A escolha da LP acontece por ambiente.

---

## Benefícios do modelo

- mesma identidade visual entre LPs
- deploy separado por domínio
- build previsível
- menor retrabalho
- melhor governança visual e técnica
- maior velocidade para criar novas LPs

---

## Exemplo de build

### Empilhadeiras
```bash
VITE_LANDING_KEY=empilhadeiras \
VITE_SITE_URL=https://dominio-empilhadeiras.com.br \
npm run build
```

### Baterias
```bash
VITE_LANDING_KEY=baterias \
VITE_SITE_URL=https://dominio-baterias.com.br \
npm run build
```

### Lítio / Retrofit
```bash
VITE_LANDING_KEY=litio-retrofit \
VITE_SITE_URL=https://dominio-litio.com.br \
npm run build
```

---

## Observações

A base de referência para o padrão de build-time selection é o projeto `medsenior_lp`, adaptando o conceito de seleção por praça para seleção por landing.

A diferença principal aqui é:

- lá: `VITE_LOCATION`
- aqui: `VITE_LANDING_KEY`

Sem fallback silencioso em produção.
Se estiver errado, o build deve quebrar.
