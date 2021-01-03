/**
 * Returns the last item in a list.
 *
 * @param   list - array to be evaluated.
 * @returns Returns the last item in a list.
 *
 * @usage
 * `import \{ last \} from "ufunc/last"`
 *
 * @example
 * ```
 * last([1, 2, 3, 4]) // 4
 * last([]) // undefined
 * last() // undefined
 * ```
 */
export function last<T>(list: readonly T[]): T | undefined {
  return Array.isArray(list) ? list[list.length - 1] : undefined;
}
