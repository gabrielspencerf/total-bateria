import { runtimeConfig } from "../../config/runtime";
import { landingRegistry } from "./landings";

export const selectedLandingConfig = landingRegistry[runtimeConfig.landingKey];
