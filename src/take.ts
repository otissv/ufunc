/**
 * Evaluates functions in a right to left sequence. Where the return value of the previous function become the argument of the next function in the sequence
 *
 * @param n    - The number of items to take from a list.
 * @param list - List of items
 *
 * @returns Return a new array with only n items from the beginning of the list.
 *
 * @usage
 * `import { take }from "ufunc/take"`
 *
 * @example
 * ```
 * take(4)([1, 2, 3, 4, 5, 6, 7, 8, 9])
 * // [1, 2, 3, 4]
 * ```
 */
export const take = <Value>(
  n: number,
): ((list: readonly Value[]) => readonly Value[]) => (
  list: readonly Value[],
): readonly Value[] => (Array.isArray(list) ? list.slice(0, n) : []);
