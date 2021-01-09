/**
 *  Check if a value is greater than another value.
 *
 * @param a - Value to be compare.
 * @param b - value to be compared to.
 *
 * @returns Returns true if a is greater than b, else returns false.
 */
export const isGreaterThan = <Value>(a: Value) => (b: Value): boolean => a > b;
