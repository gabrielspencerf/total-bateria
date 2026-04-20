import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "./AnimatedRoutes";

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
