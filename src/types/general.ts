/*
 * types/general.ts
 * ----------------
 * General types for PHI application.
 * author : V. Puska
 * date   : 20-Jul-2026
 */

/**
 * Australian state code type.
 */
export type AusState = "NSW" | "VIC" | "QLD" | "TAS" | "SA" | "WA" | "NT";

/**
 * Array constant of Australian state codes:<br> `["NSW", "VIC", "QLD", "TAS", "SA", "WA", "NT"]`
 */
export const AUS_STATES: AusState[] = ["NSW", "VIC", "QLD", "TAS", "SA", "WA", "NT"];