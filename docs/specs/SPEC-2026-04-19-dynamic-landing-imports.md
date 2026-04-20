# SPEC | Dynamic Imports para Landing Configs

**Data:** 2026-04-19  
**Status:** Proposto  
**Autor:** gabrielspencerf

---

## 1. Problema

O arquivo `src/content/landings/index.ts` importa estaticamente as três configs de landing page ao mesmo tempo:

```ts
import { bateriasLandingConfig } from "./baterias";
import { empilhadeirasLandingConfig } from "./empilhadeiras";
import { litioRetrofitLandingConfig } from "./litio-retrofit";
```

Como são `import` estáticos, o Rollup (bundler do Vite) os inclui **todos** no bundle final — mesmo que apenas um seja usado em runtime. Consequências:

- **Bundle maior que o necessário** — usuário baixa conteúdo de 3 landings, usa só 1.
- **Conteúdo exposto** — textos, preços e estratégias das outras landings ficam visíveis no JS público.
- **Cache invalidado desnecessariamente** — qualquer alteração em qualquer landing força rebuild e invalida o cache de todas.

---

## 2. Objetivo

Substituir os imports estáticos das configs de landing por **dynamic imports**, garantindo que o bundle final de cada build contenha apenas a config da landing ativa (`VITE_LANDING_KEY`).

---

## 3. Não-objetivos

- Não mudar o mecanismo de seleção de landing (env var `VITE_LANDING_KEY` — funciona bem).
- Não implementar troca de landing em runtime (cada build é single-landing — isso é intencional).
- Não alterar a estrutura de blocks ou do `LandingPageTemplate`.
- Não introduzir um sistema de build separado por variante (pode ser feito no futuro; este SPEC resolve o bundle).

---

## 4. Análise da Arquitetura Atual

### 4.1 Cadeia de imports (problema)

```
vite.config.ts          ← valida VITE_LANDING_KEY em build-time
config/runtime.ts       ← lê VITE_LANDING_KEY (build-time constant)
config/site.ts          ← importa selectedLandingConfig no nível de módulo  ← 🔴 CRÍTICO
  └─ src/content/landing.ts
       └─ src/content/landings/index.ts
            ├─ ./baterias           (importado SEMPRE)
            ├─ ./empilhadeiras      (importado SEMPRE)
            └─ ./litio-retrofit     (importado SEMPRE)
```

### 4.2 Consumidores de `selectedLandingConfig`

| Arquivo | Linha | Contexto | Risco |
|---|---|---|---|
| `config/site.ts` | 2, 10–11, 30–33 | Nível de módulo (`export const`) | 🔴 Crítico |
| `server.ts` | via `SITE_ROUTES` | Geração de sitemap.xml | 🔴 Derivado do anterior |
| `src/pages/Home.tsx` | 1, 6–13, 15 | Dentro do componente | ✅ Seguro |
| `src/pages/institutional/InstitutionalHomePage.tsx` | 3, 34 | Dentro do componente | ✅ Seguro |

### 4.3 O que já está pronto (favorável)

- `AnimatedRoutes.tsx` já tem `<Suspense fallback={<RouteFallback />}>` envolvendo todas as rotas — nenhum trabalho adicional de Suspense necessário.
- `Home.tsx` já é carregado via `React.lazy()` — a rota já é assíncrona.
- `useSEO` opera dentro de `useEffect` — seguro para valores assíncronos.
- Todos os 15 blocks recebem config via props — nenhum importa landings diretamente.
- `VITE_LANDING_KEY` é substituído por literal em build-time pelo Vite — o Rollup elimina os branches não-usados em dead code elimination.

---

## 5. Riscos e Mitigações

| # | Risco | Severidade | Mitigação |
|---|---|---|---|
| R1 | `config/site.ts` usa `selectedLandingConfig` no nível de módulo | 🔴 Crítico | Etapa 1: converter para função pura que recebe a config como parâmetro |
| R2 | `server.ts` consome `SITE_ROUTES` para sitemap.xml na inicialização | 🔴 Alto (derivado de R1) | Resolvido automaticamente ao resolver R1 |
| R3 | `Home.tsx` e `InstitutionalHomePage.tsx` aguardando config async sem feedback visual | 🟡 Médio | Já mitigado — Suspense + RouteFallback existem |
| R4 | `useSEO` recebe valores vazios antes da config carregar | 🟡 Médio | Hook usa `useEffect`; DOM só é atualizado após o componente montar com config carregada |
| R5 | Vite não quebrar o chunk corretamente sem configuração explícita | 🟡 Médio | Dynamic `import()` com literal de caminho garante code split automático no Rollup |
| R6 | Tipos TypeScript perderem `as const` inference nas configs | 🟢 Baixo | Manter tipagem explícita `LandingPageConfig` nas funções loader |

---

## 6. Plano de Implementação

### Etapa 1 — Desacoplar `config/site.ts` do import de landing
**Arquivo:** `config/site.ts`  
**Por que primeiro:** É a única dependência síncrona de módulo. Tudo mais depende dela.

**O que muda:**
- Remover o import de `selectedLandingConfig`
- Converter `SITE_CONFIG` para conter apenas campos estáticos (sem dados de landing)
- Converter `SITE_ROUTES` de constante para função `buildSiteRoutes(landingConfig)` que recebe a config como argumento
- Atualizar `server.ts` para chamar `buildSiteRoutes(...)` com a config já carregada

**Antes:**
```ts
import { selectedLandingConfig } from "../src/content/landing";

export const SITE_CONFIG = {
  defaultTitle: selectedLandingConfig.seo.title,       // depende de landing
  defaultDescription: selectedLandingConfig.seo.description,
  ...
} as const;

export const SITE_ROUTES: SiteRouteSeo[] = [
  {
    path: selectedLandingConfig.seo.canonicalPath,     // depende de landing
    ...
  },
  ...
];
```

**Depois:**
```ts
// Sem import de landing config — apenas runtime + legal
export const SITE_CONFIG = {
  name: runtimeConfig.companyName,
  baseUrl: runtimeConfig.siteUrl,
  defaultImage: "/assets/seo-default.svg",
  locale: "pt_BR",
  themeColor: "#dc2626",
  contact: { ... },
} as const;

export function buildSiteRoutes(landingConfig: LandingPageConfig): SiteRouteSeo[] {
  return [
    {
      path: landingConfig.seo.canonicalPath,
      title: landingConfig.seo.title,
      description: landingConfig.seo.description,
      keywords: landingConfig.seo.keywords,
    },
    // ... rotas legais inalteradas
  ];
}
```

**Arquivos tocados:** `config/site.ts`, `server.ts`  
**Risco de regressão:** baixo — sitemap e SEO continuam funcionando, apenas a origem dos dados muda.

---

### Etapa 2 — Converter registry para dynamic imports
**Arquivos:** `src/content/landings/index.ts`, `src/content/landing.ts`

**O que muda:**
- `index.ts`: substituir imports estáticos por funções loader com `import()` dinâmico
- `landing.ts`: exportar função async em vez de constante

**`src/content/landings/index.ts` — depois:**
```ts
import type { LandingPageConfig } from "../../features/landing/types";
import type { LandingKey } from "../../../config/landing-keys";

export const landingLoaders: Record<LandingKey, () => Promise<LandingPageConfig>> = {
  empilhadeiras: () =>
    import("./empilhadeiras").then((m) => m.empilhadeirasLandingConfig),
  baterias: () =>
    import("./baterias").then((m) => m.bateriasLandingConfig),
  "litio-retrofit": () =>
    import("./litio-retrofit").then((m) => m.litioRetrofitLandingConfig),
};
```

**`src/content/landing.ts` — depois:**
```ts
import { runtimeConfig } from "../../config/runtime";
import { landingLoaders } from "./landings";

export function loadSelectedLandingConfig(): Promise<LandingPageConfig> {
  return landingLoaders[runtimeConfig.landingKey]();
}
```

**Por que funciona com tree-shaking:**  
`VITE_LANDING_KEY` é substituído por literal em build-time (ex: `"empilhadeiras"`). O Rollup vê o `Record` com chaves literais e, ao tentar resolver `landingLoaders["empilhadeiras"]()`, identifica as outras chaves como dead code e as remove do bundle.

**Arquivos tocados:** `src/content/landings/index.ts`, `src/content/landing.ts`

---

### Etapa 3 — Atualizar consumers de `selectedLandingConfig`
**Arquivos:** `src/pages/Home.tsx`, `src/pages/institutional/InstitutionalHomePage.tsx`

**Padrão adotado:** `React.use()` com Promise memoizada, ou wrapper com `React.lazy` que recebe config via closure.

Como `Home` já é carregado por `React.lazy` em `AnimatedRoutes.tsx` e já existe um `<Suspense>` no nível de rotas, a abordagem mais simples é criar um componente interno que recebe a config como prop após o load:

**`src/pages/Home.tsx` — depois:**
```ts
import { use } from "react";
import { loadSelectedLandingConfig } from "../content/landing";
import { LandingPageTemplate } from "../features/landing/templates/LandingPageTemplate";
import { useSEO } from "../hooks/useSEO";

// Promise criada fora do componente para não ser recriada a cada render
const landingConfigPromise = loadSelectedLandingConfig();

export function Home() {
  const config = use(landingConfigPromise); // suspende até resolver

  useSEO({
    title: config.seo.title,
    description: config.seo.description,
    keywords: config.seo.keywords,
    path: config.seo.canonicalPath,
    ogTitle: config.seo.ogTitle,
    ogDescription: config.seo.ogDescription,
  });

  return <LandingPageTemplate config={config} />;
}
```

> `React.use()` disponível no React 19 (versão atual do projeto). Suspende o componente até a Promise resolver. O `<Suspense>` já existente em `AnimatedRoutes` captura o suspend e exibe `RouteFallback`.

**`InstitutionalHomePage.tsx`** — mesmo padrão com `use(landingConfigPromise)`.

**Arquivos tocados:** `src/pages/Home.tsx`, `src/pages/institutional/InstitutionalHomePage.tsx`

---

### Etapa 4 — Atualizar `server.ts` para uso do `buildSiteRoutes`
**Arquivo:** `server.ts`

No servidor (Node.js), não há Suspense. A config precisa ser carregada antes de registrar as rotas Express.

```ts
import { runtimeConfig } from "./config/runtime";
import { landingLoaders } from "./src/content/landings";
import { buildSiteRoutes, SITE_CONFIG } from "./config/site";

async function startServer() {
  // Carrega a config da landing ativa antes de registrar rotas
  const landingConfig = await landingLoaders[runtimeConfig.landingKey]();
  const siteRoutes = buildSiteRoutes(landingConfig);

  // ... registro de rotas Express usando siteRoutes
}
```

**Arquivos tocados:** `server.ts`

---

### Etapa 5 — Verificar code splitting no build
**Arquivo:** `vite.config.ts`

Após as etapas anteriores, rodar `npm run build` e verificar o output em `dist/assets/`. Devem aparecer chunks separados para cada landing config.

Se o Rollup não separar automaticamente (improvável mas possível), adicionar hint explícito:

```ts
// vite.config.ts — dentro de build.rollupOptions (só se necessário)
build: {
  rollupOptions: {
    output: {
      manualChunks(id) {
        if (id.includes("landings/empilhadeiras")) return "landing-empilhadeiras";
        if (id.includes("landings/baterias")) return "landing-baterias";
        if (id.includes("landings/litio-retrofit")) return "landing-litio-retrofit";
      },
    },
  },
},
```

**Arquivos tocados:** `vite.config.ts` (somente se necessário)

---

## 7. Ordem de Execução e Dependências entre Etapas

```
Etapa 1 (site.ts)
    │
    ├──► Etapa 4 (server.ts)   ← depende do buildSiteRoutes da Etapa 1
    │
Etapa 2 (landings/index.ts + landing.ts)
    │
    └──► Etapa 3 (Home.tsx + InstitutionalHomePage.tsx)   ← depende da Etapa 2
              │
              └──► Etapa 5 (verificação de build)   ← depende de tudo
```

As Etapas 1+4 e Etapas 2+3 podem ser desenvolvidas em paralelo, mas a Etapa 5 só pode ser executada após todas as outras.

---

## 8. Critérios de Aceitação

- [ ] `npm run build` completa sem erros com qualquer das 3 `VITE_LANDING_KEY`s
- [ ] Output em `dist/assets/` contém chunks separados por landing (verificar com `ls dist/assets/*.js`)
- [ ] O bundle principal **não contém** strings exclusivas das outras duas landings (verificar com `grep`)
- [ ] Sitemap (`/sitemap.xml`) retorna o `canonicalPath` correto para a landing ativa
- [ ] Página carrega com o skeleton `RouteFallback` visível brevemente e depois renderiza normalmente
- [ ] `useSEO` popula `<title>` e meta tags corretamente após o load
- [ ] `InstitutionalHomePage` continua exibindo o link correto para a landing principal

---

## 9. Impacto Esperado no Bundle

| | Antes | Depois |
|---|---|---|
| Configs no bundle principal | 3 (todas) | 1 (apenas a ativa) |
| Redução estimada | — | ~65–70% do peso das configs |
| Chunks adicionais criados | 0 | 2 chunks inertes (não baixados) |
| Conteúdo das outras landings exposto | Sim | Não |
| Invalidação de cache por mudança em landing alheia | Sim | Não |

---

## 10. Rollback

Todas as etapas são reversíveis de forma independente. Se necessário, reverter via `git revert` ou restaurar os 5 arquivos modificados para o estado do commit anterior ao início da implementação.
