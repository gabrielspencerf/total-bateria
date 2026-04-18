# Prompt | Revisão de conformidade das LPs + reforço de remoção de formulário

Revise a implementação atual com foco em conformidade absoluta com os documentos de copy e com a decisão mais recente de produto:

## Objetivo

Garantir que as 3 landing pages estejam 100% alinhadas com o que foi repassado nos arquivos markdown de copy, preservando a estrutura comercial e a hierarquia de conteúdo, mas reforçando uma regra mandatória nova:

**não deve existir formulário nas LPs.**

Ou seja:
- remover formulário visual
- remover campos de captação visíveis
- remover bloco com inputs/selects/textarea
- remover submissão de lead por formulário
- remover dependência de formulário no front dessas LPs

A captura final deve ser feita apenas por CTA direto:
- botão principal
- botão de WhatsApp
- CTA final de contato
- eventualmente link/botão de orçamento ou especialista

---

## Arquivos de referência obrigatórios

Use como fonte de verdade:

- `docs/refactor/02-copy-lp-empilhadeiras.md`
- `docs/refactor/03-copy-lp-baterias.md`
- `docs/refactor/04-copy-lp-litio-retrofit.md`

---

## Regra crítica de interpretação

Os documentos de copy ainda contêm seção chamada “FORMULÁRIO DE CAPTAÇÃO”, mas isso não deve mais ser implementado literalmente.

Nova diretriz obrigatória:
- manter apenas a intenção comercial do bloco final
- converter o fechamento em bloco final de CTA
- sem campos
- sem formulário
- sem backend de submit vinculado a essas LPs
- sem componente `LeadFormBlock` renderizado
- sem inputs na interface

Em outras palavras:
- manter headline final
- manter CTA final
- manter WhatsApp
- manter senso de fechamento comercial
- remover o formulário completamente da experiência

---

## O que revisar

1. Conformidade com a copy
- Verifique se headlines, subheadlines, bullets, seções, serviços, diferenciais, FAQ e blocos estratégicos seguem fielmente os docs
- Não reescreva criativamente sem necessidade
- Corrija divergências de texto, hierarquia ou ordem das seções
- Preserve a intenção comercial original

2. Remoção total de formulário
- Remova qualquer bloco de formulário das 3 LPs
- Remova renderização de campos
- Remova CTA de submit de formulário
- Remova dependência visual ou estrutural de captação por form
- Se existir `LeadFormBlock`, ele não deve mais ser usado nessas LPs
- Se fizer sentido, mantenha o componente no código apenas se ele estiver desacoplado e não utilizado
- Se estiver sobrando e sem uso, pode remover

3. Conversão do bloco final
Transforme a antiga seção de formulário em:
- bloco final de CTA
- título forte
- texto curto de reforço
- botão principal
- botão de WhatsApp
- fechamento comercial limpo

Sem inputs.

4. Revisão estrutural
- Confirme que o header não está sticky/fixo
- Confirme que o footer está mais limpo, mais cara de landing page
- Confirme que a página está com leitura escaneável e foco em CTA
- Confirme que a identidade visual continua coerente com o institucional

5. Revisão técnica
- Remova qualquer acoplamento do template à existência obrigatória de formulário
- Ajuste tipos/interfaces se necessário
- Preserve seleção via `VITE_LANDING_KEY`
- Preserve build por landing
- Não reintroduza slug routing
- Não mexa na arquitetura sem necessidade

---

## Entrega esperada

Ao final, informe objetivamente:

1. arquivos alterados
2. quais divergências de copy foram corrigidas
3. como o bloco final foi convertido sem formulário
4. se `LeadFormBlock` foi removido, mantido sem uso ou reaproveitado
5. se houve remoção de lógica/backend ligada a formulário nessas LPs
6. status de lint
7. status de build para:
   - empilhadeiras
   - baterias
   - litio-retrofit

---

## Regras finais

- Não inventar nova copy
- Não criar formulário alternativo escondido
- Não manter formulário “só no mobile” ou “só por compatibilidade”
- Não deixar resto visual de formulário
- Não quebrar o projeto
- Fazer mudanças objetivas, cirúrgicas e consistentes com a decisão atual
