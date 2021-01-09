/**
 * Evaluates functions in a right to left sequence. Where the return value of the previous function become the argument of the next function in the sequence
 *
 * @param list - An array.
 * @returns array with all but the first item in the list.
 *
 * @usage
 * `import { tail }from "ufunc/tail"`
 *
 * @example
 * ```
 * tail([1, 2, 3, 4]) // [2, 3, 4]
 * tail([]) // []
 * tail(null) // []
 * ```
 */
export function tail<T>(list: readonly T[]): readonly T[] {
  return Array.isArray(list) ? list.slice(1, list.length) : [];
}
