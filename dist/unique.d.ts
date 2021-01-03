/**
 * Returns only unique values in an array.
 * @param fn T(value: T) => anyL   an array
 * @returns function that takes an array  new array with unique items from the list.
 */
export declare function unique<F extends Function>(fn?: F): <T>(array: T[]) => T[];
//# sourceMappingURL=unique.d.ts.map