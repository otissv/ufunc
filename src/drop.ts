/**
 * Drops n items from the end of a list
 *
 * @param n     - The number of items to drop
 * @param list  - List of items
 *
 * @returns Return new array without the n items from the beginning of the list.
 *
 * @usage
 * `import { drop } from "ufunc/drop"`
 *
 * @example
 * ```
 * drop(2)([1, 2, 3, 4])
 * // [1, 2]
 * ```
 */
export const drop = (n: number) => <Value>(
  list: readonly Value[],
): readonly Value[] => list.slice(0, n);
