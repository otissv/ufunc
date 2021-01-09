/**
 * Drops n items from the beginning of a list.
 *
 * @param n    - The number of items to dropRight.
 * @param list - List of items.
 *
 * @returns  Return new array without the n items from the end of the list.
 *
 * @usage
 * `import { dropRight } from "ufunc/dropRight"`
 *
 * @example
 * ```
 * dropRight(2)([1, 2, 3, 4])
 * // [3,4]
 * ```
 */
export const dropRight = (n: number) => <Value>(
  list: readonly Value[],
): readonly Value[] => list.slice(n, list.length);
