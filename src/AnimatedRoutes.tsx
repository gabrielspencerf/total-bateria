import { lazy, Suspense } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { SiteLayout } from "./shared/layout";
import { RouteErrorBoundary } from "./components/layout/RouteErrorBoundary";

const Home = lazy(() => import("./pages/Home").then((module) => ({ default: module.Home })));
const InstitutionalHomePage = lazy(() =>
  import("./pages/institutional/InstitutionalHomePage").then((module) => ({ default: module.InstitutionalHomePage })),
);
const PrivacyPolicyPage = lazy(() =>
  import("./pages/institutional/PrivacyPolicyPage").then((module) => ({ default: module.PrivacyPolicyPage })),
);
const TermsOfUsePage = lazy(() =>
  import("./pages/institutional/TermsOfUsePage").then((module) => ({ default: module.TermsOfUsePage })),
);

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
            <Route path="/" element={<SiteLayout />}>
              <Route index element={<Home />} />
              <Route path="institucional" element={<InstitutionalHomePage />} />
              <Route path="politica-de-privacidade" element={<PrivacyPolicyPage />} />
              <Route path="termos-de-uso" element={<TermsOfUsePage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Suspense>
      </RouteErrorBoundary>
    </AnimatePresence>
  );
}
