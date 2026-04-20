/** Chaves de LP empacotadas no build — única fonte de verdade para validação (Vite + runtime). */
export const LANDING_KEYS = ["empilhadeiras", "baterias", "litio-retrofit"] as const;

export type LandingKey = (typeof LANDING_KEYS)[number];
