/***
 * Returns the first item in a array.
 *
 * @param   list - An Array.
 * @returns Returns an array with only the first item in the list.
 *
 * @usage
 * `import \{ head \} from "ufunc/head "`
 *
 * @example
 * ```
 * head([1, 2, 3, 4]) // [1]
 * head([]) // []
 * ```
 */
export function head<T>(list: readonly T[] | string): readonly T[] {
  return Array.isArray(list) && list.length !== 0 ? [list[0]] : [];
}
