/*
 * types/products.ts
 * -----------------
 * Product types/interfaces for PHI application.
 * author: V. Puska
 * date: 20-Jul-2026
 */

import {AusState} from "./general";

// Health insurance policy type.
export type ProductType = "Combined" | "Hospital" | "GeneralHealth";

/**
 * Product attribute fields used by attribute compression and decompression routines.  These fields are used
 * by the {@link compressAttributes} and {@link decompressAttributes} routines to compress/decompress product attributes
 * from/to a single integer for more efficient storage and retrieval.
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

/**
 * Object representing a distinct product title (name, fund/brand code, product type) and an array
 * of product codes and associated attributes. Eg. `[ "I27/1A412D", 457, ... ]`
 */
export interface ProductSearchTitle {
    name: string;
    // Fund or brand code
    fundBrandCode: string;
    type: ProductType | "";
    // Array of product codes and associated attributes. Eg `[ "I27/1A412D", 457, ... ]`
    products: (string | number) [];
}
