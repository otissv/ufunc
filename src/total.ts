import { plus } from './plus';

/**
 * Sums a list of numbers.
 *
 * @param list - Array of numbers.
 *
 * @returns Returns the total of all numbers added together.
 *
 * @usage
 * `import { total } from "ufunc/total"`
 *
 * @example
 * ```
 * total([2, 4, 6, 8]) // 20
 * ```
 */
export const total = (list: readonly number[]): number =>
  list.reduce((a, b) => plus(a)(b), 0);
