# Prompt | Refatoração da Base para Template de Landing via Variável de Ambiente

Você vai atuar como arquiteto front-end sênior e especialista em refatoração de landing pages B2B.

## Objetivo

Refatorar a base atual para operar como um template-base de landing pages, onde a landing correta é selecionada em build-time por variável de ambiente.

A aplicação deve continuar sendo uma única base técnica, mas cada build final deve empacotar apenas uma LP, própria para um domínio específico.

---

## Referência arquitetural

Este projeto deve adotar o mesmo princípio do repositório `medsenior_lp`, que seleciona a instância correta via variável de ambiente no build.

Adapte esse mesmo modelo para landing pages comerciais, trocando a lógica de `location` por `landing`.

---

## Decisão mandatória

- Não usar slug routing
- Não manter múltiplas LPs navegáveis na mesma build
- Não duplicar estrutura por página
- Não criar múltiplas stacks diferentes
- Não fazer fallback silencioso para uma LP default em produção

A seleção da LP deve acontecer somente via env var.

---

## Variável principal

`VITE_LANDING_KEY`

Valores esperados inicialmente:

- `empilhadeiras`
- `baterias`
- `litio-retrofit`

---

## Outras variáveis esperadas

- `VITE_SITE_URL`
- `VITE_WHATSAPP_NUMBER`
- `VITE_LEAD_DESTINATION`
- `VITE_COMPANY_NAME`
- `VITE_REGION_LABEL` (se necessário)

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

## Regras obrigatórias

1. Criar um `registry` central com as landings disponíveis.
2. Ler `VITE_LANDING_KEY` em `config/runtime.ts`.
3. Resolver a LP selecionada a partir do registry.
4. Falhar o build se a variável estiver ausente ou inválida.
5. Fazer `Home.tsx` renderizar apenas a landing selecionada.
6. Ajustar `config/site.ts` para derivar SEO e canonical da LP escolhida.
7. Garantir que textos, CTAs, FAQs, serviços, mídia e formulário saiam do config da landing.
8. Remover qualquer lógica restante de múltiplas LPs por slug ou registry por rota.
9. Manter coerência visual com o institucional.
10. Preservar lint, build e tipagem.

---

## Regras de design

A interface deve seguir a linguagem do institucional:

- aparência corporativa
- sensação industrial/técnica
- contraste forte
- tipografia consistente
- CTA principal evidente
- WhatsApp secundário, sem dominar a estética
- espaçamento consistente
- grid limpo
- containers previsíveis
- cards padronizados
- sem efeitos exagerados
- sem aparência de template genérico de marketing

---

## Estrutura mínima da landing

A engine deve aceitar blocos como:

- hero
- problem
- solution
- services
- differentials
- audience
- authority
- faq
- form

E blocos opcionais:

- benefits
- comparison
- process
- coverage

Se algum ainda não existir, criar de forma reutilizável.

---

## Formulário

O formulário deve ser configurável por landing.

Nada hardcoded no componente.

Cada config deve aceitar lista de campos com:

- tipo
- nome
- label
- placeholder
- required
- options

Exemplo de modelo:

```ts
type LeadFormField = {
  type: "text" | "email" | "tel" | "select" | "textarea"
  name: string
  label: string
  placeholder?: string
  required?: boolean
  options?: { label: string; value: string }[]
}
```

---

## Conteúdo

Use os arquivos de copy presentes em:

- `docs/refactor/02-copy-lp-empilhadeiras.md`
- `docs/refactor/03-copy-lp-baterias.md`
- `docs/refactor/04-copy-lp-litio-retrofit.md`

A copy deve ser aplicada com máxima fidelidade.

Você pode apenas:

- padronizar pontuação
- ajustar labels
- corrigir consistência de nomenclatura
- transformar placeholders em config

Você não deve reescrever criativamente a proposta comercial.

---

## SEO

Cada landing deve possuir config própria com:

- title
- description
- keywords
- ogTitle
- ogDescription
- canonicalPath

Tudo derivado da LP selecionada no build.

---

## Documentação obrigatória

Atualizar:

- `docs/estrutura-atual.md`
- `docs/atualizacoes.md`
- `docs/design-system/README.md`
- `docs/dev-logs/error-log.md` se houver erro/correção durante o processo

---

## Critérios de aceite

- build funcionando
- lint funcionando
- tipagem correta
- LP selecionada corretamente por env var
- sem fallback silencioso
- sem conteúdo hardcoded no template
- identidade visual coerente com o institucional
- base pronta para novos domínios

---

## Entrega esperada

Ao final, gerar um relatório contendo:

1. arquivos criados
2. arquivos alterados
3. o que foi removido da lógica multi-LP anterior
4. como a LP é selecionada no build
5. exemplo de build para cada LP
6. quais arquivos editar para adicionar uma quarta landing
7. pontos pendentes de conteúdo real, se houver
