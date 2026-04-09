import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { Layout } from "./components/layout/Layout";
import { RouteErrorBoundary } from "./components/layout/RouteErrorBoundary";

const Home = lazy(() => import("./pages/Home").then((module) => ({ default: module.Home })));
const Sobre = lazy(() => import("./pages/Sobre").then((module) => ({ default: module.Sobre })));
const Servicos = lazy(() => import("./pages/Servicos").then((module) => ({ default: module.Servicos })));
const Segmentos = lazy(() => import("./pages/Segmentos").then((module) => ({ default: module.Segmentos })));
const Diferenciais = lazy(() => import("./pages/Diferenciais").then((module) => ({ default: module.Diferenciais })));
const Cases = lazy(() => import("./pages/Cases").then((module) => ({ default: module.Cases })));
const Contato = lazy(() => import("./pages/Contato").then((module) => ({ default: module.Contato })));
const PoliticaPrivacidade = lazy(() =>
  import("./pages/PoliticaPrivacidade").then((module) => ({ default: module.PoliticaPrivacidade })),
);
const TermosUso = lazy(() => import("./pages/TermosUso").then((module) => ({ default: module.TermosUso })));

const BateriasTracionarias = lazy(() =>
  import("./pages/services/BateriasTracionarias").then((module) => ({ default: module.BateriasTracionarias })),
);
const BateriasLitio = lazy(() => import("./pages/services/BateriasLitio").then((module) => ({ default: module.BateriasLitio })));
const Empilhadeiras = lazy(() => import("./pages/services/Empilhadeiras").then((module) => ({ default: module.Empilhadeiras })));
const Locacao = lazy(() => import("./pages/services/Locacao").then((module) => ({ default: module.Locacao })));
const Pecas = lazy(() => import("./pages/services/Pecas").then((module) => ({ default: module.Pecas })));
const Treinamentos = lazy(() => import("./pages/services/Treinamentos").then((module) => ({ default: module.Treinamentos })));

function RouteFallback() {
  return (
    <div className="w-full bg-white" aria-hidden="true">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 animate-pulse">
        <div className="h-10 w-2/3 max-w-xl rounded-md bg-zinc-200 mb-5" />
        <div className="h-5 w-full max-w-2xl rounded-md bg-zinc-100 mb-3" />
        <div className="h-5 w-5/6 max-w-xl rounded-md bg-zinc-100 mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-40 rounded-xl bg-zinc-100" />
          <div className="h-40 rounded-xl bg-zinc-100" />
          <div className="h-40 rounded-xl bg-zinc-100" />
        </div>
      </div>
    </div>
  );
}

export function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <RouteErrorBoundary>
        <Suspense fallback={<RouteFallback />}>
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
              <Route path="politica-de-privacidade" element={<PoliticaPrivacidade />} />
              <Route path="termos-de-uso" element={<TermosUso />} />
            </Route>
          </Routes>
        </Suspense>
      </RouteErrorBoundary>
    </AnimatePresence>
  );
}
