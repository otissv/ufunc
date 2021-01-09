/**
 * Evaluates functions in a right to left sequence. Where the return value of the previous function become the argument of the next function in the sequence
 *
 * @param n - number of items to takeEnd from a list.
 * @returns array with all but the first item in the list.
 *
 * @usage
 * `import { takeEnd }from "ufunc/tatakeEndil"`
 *
 * @example
 * ```
 *
 * ```
 */
export function takeEnd<T>(n: number): (list: readonly T[]) => readonly T[] {
  return (list: readonly T[]): readonly T[] =>
    Array.isArray(list) ? list.slice(list.length - n, list.length) : [];
}
