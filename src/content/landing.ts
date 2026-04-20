import type { LandingPageConfig } from "../features/landing/types";
import { selectedLandingConfig } from "virtual:selected-landing-config";

export { selectedLandingConfig };

export function loadSelectedLandingConfig(): Promise<LandingPageConfig> {
  return Promise.resolve(selectedLandingConfig);
}
