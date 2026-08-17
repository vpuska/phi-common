/**
 * util/products.ts
 * ----
 * General product routines.
 * @author: V. Puska
 * @date: 20-Jul-2026
 */

import {AUS_STATES, AusState} from "../types/general";
import {ProductAttributeFields} from "../types/products";

const STATE_CODES_FOR_COMPRESSION = ["ALL", ...AUS_STATES]

/**
 * Compress product attributes into a single integer.
 * @param obj
 */
export function compressAttributes(obj: ProductAttributeFields) : number {
    const state = STATE_CODES_FOR_COMPRESSION.indexOf(obj.state.toUpperCase()) + 1;
    return +obj.disabilityCover |
        +obj.youngAdultCover << 1 |
        +obj.studentCover << 2 |
        +obj.childCover << 3 |
        +obj.adultsCovered << 4 |
        state << 6 |
        obj.excess << 10
}

/**
 * Decompress product attributes from a single integer.
 * @param i
 */
export function decompressAttributes(i : number) : ProductAttributeFields {
    return {
        excess: i >> 10,
        state: STATE_CODES_FOR_COMPRESSION[((i >> 6) & 0xF) - 1] as AusState | "ALL",
        adultsCovered: (i >> 4) & 0x3,
        childCover: !!(i & 8),
        studentCover: !!(i & 4),
        youngAdultCover: !!(i & 2),
        disabilityCover: !!(i & 1)
    }
}