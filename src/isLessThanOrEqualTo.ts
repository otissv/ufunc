/**
 *  Check if a value is less than or equal to another value
 * @param a - Value to be compare.
 * @param b - value to be compared to.
 *
 * @returns Returns true if a is less than or equal to b, else returns false.
 */
export const isLessThanOrEqualTo = <Value>(a: Value) => (b: Value): boolean =>
  a <= b;
