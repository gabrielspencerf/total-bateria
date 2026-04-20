import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Linkedin, Instagram, Facebook, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "../ui/Button";
import { SITE_CONFIG } from "../../../config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-300 pt-20 pb-10 border-t border-zinc-900">
      <div className="lp-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-4">
            <Link to="/" className="tb-brand-footer group mb-6">
              <img
                src="/assets/logos/total-bateria-colorido.png"
                alt="Total Bateria"
                className="h-14 w-auto"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Há 19 anos oferecendo manutenção, locação e soluções completas em empilhadeiras e baterias tracionárias com tecnologia de ponta.
            </p>
            
            <div className="mb-8">
              <h5 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Assine nossa Newsletter</h5>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="newsletter-email" className="sr-only">
                  E-mail para newsletter
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Seu e-mail corporativo"
                  className="tb-form-field-dark min-w-0 flex-1"
                />
                <Button type="submit" variant="primary" size="sm" className="px-4">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </div>

            {SITE_CONFIG.social.linkedin || SITE_CONFIG.social.instagram || SITE_CONFIG.social.facebook ? (
              <div className="flex flex-wrap items-center gap-3">
                {SITE_CONFIG.social.linkedin ? (
                  <a
                    href={SITE_CONFIG.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 transition-colors hover:bg-red-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                    aria-label="LinkedIn da Total Bateria"
                  >
                    <Linkedin className="size-5" />
                  </a>
                ) : null}
                {SITE_CONFIG.social.instagram ? (
                  <a
                    href={SITE_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 transition-colors hover:bg-red-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                    aria-label="Instagram da Total Bateria"
                  >
                    <Instagram className="size-5" />
                  </a>
                ) : null}
                {SITE_CONFIG.social.facebook ? (
                  <a
                    href={SITE_CONFIG.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 transition-colors hover:bg-red-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                    aria-label="Facebook da Total Bateria"
                  >
                    <Facebook className="size-5" />
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>

          {/* Links Rápidos */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Empresa</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="tb-footer-link group">
                  <ChevronRight className="mr-2 size-3 text-red-500 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="tb-footer-link group">
                  <ChevronRight className="mr-2 size-3 text-red-500 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                  Sobre a Empresa
                </Link>
              </li>
              <li>
                <Link to="/segmentos-atendidos" className="tb-footer-link group">
                  <ChevronRight className="mr-2 size-3 text-red-500 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                  Segmentos
                </Link>
              </li>
              <li>
                <Link to="/diferenciais" className="tb-footer-link group">
                  <ChevronRight className="mr-2 size-3 text-red-500 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                  Diferenciais
                </Link>
              </li>
              <li>
                <Link to="/cases-e-clientes" className="tb-footer-link group">
                  <ChevronRight className="mr-2 size-3 text-red-500 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                  Cases e Clientes
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Soluções</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/servicos/baterias-tracionarias" className="tb-footer-link group">
                  <ChevronRight className="mr-2 size-3 text-red-500 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                  Baterias Tracionárias
                </Link>
              </li>
              <li>
                <Link to="/servicos/baterias-de-litio" className="tb-footer-link group">
                  <ChevronRight className="mr-2 size-3 text-red-500 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                  Baterias de Lítio
                </Link>
              </li>
              <li>
                <Link to="/servicos/empilhadeiras" className="tb-footer-link group">
                  <ChevronRight className="mr-2 size-3 text-red-500 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                  Empilhadeiras
                </Link>
              </li>
              <li>
                <Link to="/servicos/locacao-de-equipamentos" className="tb-footer-link group">
                  <ChevronRight className="mr-2 size-3 text-red-500 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                  Locação de Equipamentos
                </Link>
              </li>
              <li>
                <Link to="/servicos/pecas-e-acessorios" className="tb-footer-link group">
                  <ChevronRight className="mr-2 size-3 text-red-500 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                  Peças e Acessórios
                </Link>
              </li>
              <li>
                <Link to="/servicos/treinamentos-e-seguranca" className="tb-footer-link group">
                  <ChevronRight className="mr-2 size-3 text-red-500 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                  Treinamentos e Segurança
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contato</h4>
            <ul className="space-y-5">
              <li className="flex items-start group">
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-red-500 mr-4 flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-zinc-400 text-sm leading-relaxed pt-1">R. Benedito Higino Machado, 79<br/>Maracanã — Jarinu/SP<br/>CEP: 13246-102</span>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-red-500 mr-4 flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-zinc-400 text-sm pt-1">(11) 93331-2768</span>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-red-500 mr-4 flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-zinc-400 text-sm pt-1">adm@totalbateria.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-sm text-zinc-500">
              &copy; {currentYear} Total Bateria. Todos os direitos reservados.
            </span>
            <span className="mx-4 text-zinc-700">|</span>
            <span className="text-sm text-zinc-500">CNPJ: 00.000.000/0001-00</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500">
            <Link
              to="/politica-de-privacidade"
              className="rounded-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              Política de Privacidade
            </Link>
            <Link
              to="/termos-de-uso"
              className="rounded-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
