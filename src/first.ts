/***
 * Returns the first item in a list.
 *
 * @param   list - An Array.
 *
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
export const first = <Value>(list: readonly Value[]): Value | undefined =>
  Array.isArray(list) ? list[0] : undefined;
