/***
 * Returns the first item in a array.
 *
 * @param   list - An Array.
 * @returns Returns the first item in a array.
 *
 * @usage
 * `import \{ first \} from "ufunc/first "`
 *
 * @example
 * ```
 * first([1, 2, 3, 4]) // 1
 * first([]) // undefined
 * ```
 */
export function first<T>(list: readonly T[]): T | undefined {
  return Array.isArray(list) ? list[0] : undefined;
}
