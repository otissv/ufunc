/**
 *  Check if a value is less than another value
 *
 * @param a - Value to be compare.
 * @param b - value to be compared to.
 *
 * @returns Returns true if a is less than b, else returns false.
 */
export const isLessThan = <Value>(a: Value) => (b: Value): boolean => a < b;
