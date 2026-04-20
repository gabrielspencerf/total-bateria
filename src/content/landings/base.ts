import type { LandingCallToAction } from "../../features/landing/types";
import { BRAND_CONTACT, BRAND_IDENTITY, buildWhatsAppLink } from "../../shared/brand";

export function createWhatsAppCta(
  label: string,
  message: string,
  variant: NonNullable<LandingCallToAction["variant"]> = "primary",
): LandingCallToAction {
  return {
    label,
    href: buildWhatsAppLink(BRAND_CONTACT.phoneDigits, message),
    variant,
  };
}

export const defaultLandingBadge = `${BRAND_IDENTITY.tradingName} | B2B`;
