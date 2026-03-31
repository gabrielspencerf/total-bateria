export const SITE_CONFIG = {
  name: "Total Bateria",
  legalName: "Total Bateria",
  baseUrl: "https://www.totalbateria.com.br",
  defaultTitle: "Total Bateria | Solucoes em Baterias e Empilhadeiras",
  defaultDescription:
    "Solucoes corporativas em baterias tracionarias, empilhadeiras, locacao e manutencao para operacoes logisticas que nao podem parar.",
  defaultImage: "/assets/seo-default.svg",
  locale: "pt_BR",
  themeColor: "#dc2626",
  contact: {
    phone: "+55 11 93331-2768",
    email: "adm@totalbateria.com.br",
  },
} as const;

export interface SiteRouteSeo {
  path: string;
  title: string;
  description: string;
  keywords: string[];
}

export const SITE_ROUTES: SiteRouteSeo[] = [
  {
    path: "/",
    title: "Especialistas em Empilhadeiras e Baterias",
    description:
      "Atendimento tecnico para manutencao, locacao e solucoes em baterias tracionarias para empresas.",
    keywords: ["baterias tracionarias", "empilhadeiras", "manutencao industrial"],
  },
  {
    path: "/sobre",
    title: "Sobre a Empresa",
    description:
      "Conheca a trajetoria da Total Bateria e nossa especializacao em operacoes industriais.",
    keywords: ["sobre total bateria", "empresa de baterias", "operacao logistica"],
  },
  {
    path: "/servicos",
    title: "Servicos",
    description:
      "Catalogo completo de servicos para baterias, empilhadeiras, pecas e suporte tecnico.",
    keywords: ["servicos de empilhadeira", "servico de bateria", "locacao de equipamentos"],
  },
  {
    path: "/segmentos-atendidos",
    title: "Segmentos Atendidos",
    description:
      "Atendimento B2B para diferentes segmentos industriais e operacoes logisticas.",
    keywords: ["segmentos industriais", "atendimento corporativo", "operacao logistica"],
  },
  {
    path: "/diferenciais",
    title: "Diferenciais",
    description:
      "Descubra os diferenciais tecnicos e operacionais da Total Bateria.",
    keywords: ["diferenciais", "suporte tecnico", "qualidade operacional"],
  },
  {
    path: "/cases-e-clientes",
    title: "Cases e Clientes",
    description:
      "Resultados reais obtidos em projetos de manutencao e suporte para empresas.",
    keywords: ["cases", "clientes", "resultados"],
  },
  {
    path: "/contato",
    title: "Contato e Orcamento",
    description:
      "Solicite um orcamento tecnico para manutencao, locacao e venda de baterias e empilhadeiras.",
    keywords: ["orcamento", "contato", "atendimento comercial"],
  },
  {
    path: "/servicos/baterias-tracionarias",
    title: "Baterias Tracionarias",
    description: "Venda, manutencao e suporte tecnico para baterias tracionarias.",
    keywords: ["bateria tracionaria", "manutencao de bateria", "ciclo de carga"],
  },
  {
    path: "/servicos/baterias-de-litio",
    title: "Baterias de Litio",
    description: "Solucoes em baterias de litio para operacoes com alta disponibilidade.",
    keywords: ["bateria de litio", "autonomia", "eficiencia energetica"],
  },
  {
    path: "/servicos/empilhadeiras",
    title: "Empilhadeiras",
    description: "Suporte completo para empilhadeiras eletricas e a combustao.",
    keywords: ["empilhadeiras", "manutencao de empilhadeira", "frota industrial"],
  },
  {
    path: "/servicos/locacao-de-equipamentos",
    title: "Locacao de Equipamentos",
    description: "Locacao corporativa de equipamentos com suporte tecnico especializado.",
    keywords: ["locacao", "equipamentos industriais", "frota"],
  },
  {
    path: "/servicos/pecas-e-acessorios",
    title: "Pecas e Acessorios",
    description: "Pecas e acessorios para manter a disponibilidade da sua operacao.",
    keywords: ["pecas", "acessorios", "reposicao de componentes"],
  },
  {
    path: "/servicos/treinamentos-e-seguranca",
    title: "Treinamentos e Seguranca",
    description:
      "Treinamentos tecnicos e orientacoes de seguranca para operacao de equipamentos.",
    keywords: ["treinamento", "seguranca", "operacao de empilhadeira"],
  },
];
