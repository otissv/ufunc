/**
 *  Check if a value is greater than or equal to another value.
 *
 * @param a - Value to be compare.
 * @param b - value to be compared to.
 *
 * @returns Returns true if a is greater than or equal to b, else returns false.
 */
export const isGreaterThanOrEqualTo = <Value>(a: Value) => (
  b: Value,
): boolean => a >= b;
