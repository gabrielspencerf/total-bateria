import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Linkedin, Instagram, Facebook, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "../ui/Button";
import { SITE_CONFIG } from "../../../config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-300 pt-20 pb-10 border-t border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6 group">
              <span className="text-3xl font-black text-red-600 tracking-tighter italic group-hover:text-red-500 transition-colors">TOTAL</span>
              <span className="text-3xl font-black text-white tracking-tighter italic ml-1 group-hover:text-zinc-300 transition-colors">BATERIA</span>
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
                  className="bg-zinc-900 border border-zinc-800 text-white px-4 py-2 rounded-md w-full focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                />
                <Button type="submit" variant="primary" size="sm" className="px-4">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href={SITE_CONFIG.baseUrl}
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-red-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn da Total Bateria"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.baseUrl}
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-red-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram da Total Bateria"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.baseUrl}
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-red-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook da Total Bateria"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Empresa</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-zinc-400 hover:text-red-500 transition-colors flex items-center group"><ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-red-500" /> Home</Link></li>
              <li><Link to="/sobre" className="text-zinc-400 hover:text-red-500 transition-colors flex items-center group"><ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-red-500" /> Sobre a Empresa</Link></li>
              <li><Link to="/segmentos-atendidos" className="text-zinc-400 hover:text-red-500 transition-colors flex items-center group"><ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-red-500" /> Segmentos</Link></li>
              <li><Link to="/diferenciais" className="text-zinc-400 hover:text-red-500 transition-colors flex items-center group"><ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-red-500" /> Diferenciais</Link></li>
              <li><Link to="/cases-e-clientes" className="text-zinc-400 hover:text-red-500 transition-colors flex items-center group"><ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-red-500" /> Cases e Clientes</Link></li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Soluções</h4>
            <ul className="space-y-4">
              <li><Link to="/servicos/baterias-tracionarias" className="text-zinc-400 hover:text-red-500 transition-colors flex items-center group"><ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-red-500" /> Baterias Tracionárias</Link></li>
              <li><Link to="/servicos/baterias-de-litio" className="text-zinc-400 hover:text-red-500 transition-colors flex items-center group"><ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-red-500" /> Baterias de Lítio</Link></li>
              <li><Link to="/servicos/empilhadeiras" className="text-zinc-400 hover:text-red-500 transition-colors flex items-center group"><ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-red-500" /> Empilhadeiras</Link></li>
              <li><Link to="/servicos/locacao-de-equipamentos" className="text-zinc-400 hover:text-red-500 transition-colors flex items-center group"><ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-red-500" /> Locação de Equipamentos</Link></li>
              <li><Link to="/servicos/pecas-e-acessorios" className="text-zinc-400 hover:text-red-500 transition-colors flex items-center group"><ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-red-500" /> Peças e Acessórios</Link></li>
              <li><Link to="/servicos/treinamentos-e-seguranca" className="text-zinc-400 hover:text-red-500 transition-colors flex items-center group"><ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-red-500" /> Treinamentos e Segurança</Link></li>
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
          <div className="flex space-x-6 text-sm text-zinc-500">
            <Link to="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link to="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
