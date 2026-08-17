/**
 * types/products.ts
 * ----
 * Product types/interfaces for PHI application.
 * @author: V. Puska
 * @date: 20-Jul-2026
 */


import {AusState} from "./general";


/**
 * Product attribute fields used by attribute compression and decompression routines.
 */
export interface ProductAttributeFields {
    state: AusState | "ALL";
    excess: number;
    adultsCovered: number;
    childCover: boolean;
    studentCover: boolean;
    youngAdultCover: boolean;
    disabilityCover: boolean;
}