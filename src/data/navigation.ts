export interface NavigationItem {
  name: string;
  path: string;
  hasDropdown?: boolean;
}

export interface ServiceNavigationItem {
  name: string;
  path: string;
}

export const navLinks: NavigationItem[] = [
  { name: "Home", path: "/" },
  { name: "Sobre", path: "/sobre" },
  {
    name: "Serviços",
    path: "/servicos",
    hasDropdown: true,
  },
  { name: "Segmentos", path: "/segmentos-atendidos" },
  { name: "Clientes", path: "/cases-e-clientes" },
];

export const servicesLinks: ServiceNavigationItem[] = [
  { name: "Baterias Tracionárias", path: "/servicos/baterias-tracionarias" },
  { name: "Baterias de Lítio", path: "/servicos/baterias-de-litio" },
  { name: "Empilhadeiras", path: "/servicos/empilhadeiras" },
  { name: "Locação de Equipamentos", path: "/servicos/locacao-de-equipamentos" },
  { name: "Peças e Acessórios", path: "/servicos/pecas-e-acessorios" },
  { name: "Treinamentos e Segurança", path: "/servicos/treinamentos-e-seguranca" },
];
