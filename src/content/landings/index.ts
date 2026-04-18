import type { LandingPageConfig } from "../../features/landing/types";
import type { LandingKey } from "../../../config/runtime";
import { bateriasLandingConfig } from "./baterias";
import { empilhadeirasLandingConfig } from "./empilhadeiras";
import { litioRetrofitLandingConfig } from "./litio-retrofit";

export const landingRegistry: Record<LandingKey, LandingPageConfig> = {
  empilhadeiras: empilhadeirasLandingConfig,
  baterias: bateriasLandingConfig,
  "litio-retrofit": litioRetrofitLandingConfig,
};
