import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { Servicos } from "./pages/Servicos";
import { Segmentos } from "./pages/Segmentos";
import { Diferenciais } from "./pages/Diferenciais";
import { Cases } from "./pages/Cases";
import { Contato } from "./pages/Contato";

// Services
import { BateriasTracionarias } from "./pages/services/BateriasTracionarias";
import { BateriasLitio } from "./pages/services/BateriasLitio";
import { Empilhadeiras } from "./pages/services/Empilhadeiras";
import { Locacao } from "./pages/services/Locacao";
import { Pecas } from "./pages/services/Pecas";
import { Treinamentos } from "./pages/services/Treinamentos";

export function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="servicos/baterias-tracionarias" element={<BateriasTracionarias />} />
          <Route path="servicos/baterias-de-litio" element={<BateriasLitio />} />
          <Route path="servicos/empilhadeiras" element={<Empilhadeiras />} />
          <Route path="servicos/locacao-de-equipamentos" element={<Locacao />} />
          <Route path="servicos/pecas-e-acessorios" element={<Pecas />} />
          <Route path="servicos/treinamentos-e-seguranca" element={<Treinamentos />} />
          <Route path="segmentos-atendidos" element={<Segmentos />} />
          <Route path="diferenciais" element={<Diferenciais />} />
          <Route path="cases-e-clientes" element={<Cases />} />
          <Route path="contato" element={<Contato />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
