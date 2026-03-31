# Estrutura Atual

## Stack principal

- Frontend: React + TypeScript + Vite
- Estilos: Tailwind CSS
- Backend: Express (API de contato + entrega SPA)
- Roteamento: `react-router-dom` (multipage no contexto SPA)

## Estrutura de pastas

- `src/components/layout`: header, footer, layout base
- `src/components/ui`: componentes reutilizaveis de interface
- `src/pages`: paginas institucionais e paginas de servicos
- `src/data`: conteudo textual e configuracoes de conteudo
- `src/hooks`: hooks compartilhados (ex.: SEO)
- `config`: configuracoes compartilhadas entre server e frontend
- `public/assets`: ativos locais (sem CDN para imagens institucionais)
- `docs`: governanca tecnica e de produto

## Diretrizes tecnicas atuais

- Evitar dependencia de CDN para recursos de UI e imagens institucionais.
- Centralizar configuracao de SEO e rotas em `config/site.ts`.
- Manter cada arquivo com responsabilidade unica e baixo acoplamento.
