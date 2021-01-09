/**
 * Returns the head of an array.
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
export const head = <Value>(
  list: readonly Value[] | string,
): readonly Value[] =>
  Array.isArray(list) && list.length !== 0 ? [list[0]] : [];
