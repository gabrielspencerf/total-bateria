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
