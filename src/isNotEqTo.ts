/**
 * Checks if two primitive values are not equal.
 *
 * @param a - Value to be compare.
 * @param b - value to be compared to.
 *
 * @returns Returns true if values are equal else false.
 */

export const isNotEqTo = <Value>(a: Value) => (b: Value): boolean => a !== b;
