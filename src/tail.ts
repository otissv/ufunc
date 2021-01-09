/**
 * Returns the tail of an array.
 *
 * @param   list  - An array.
 *
 * @returns  Returns an array with all but the first item in the list.
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
export const tail = <Value>(list: readonly Value[]): readonly Value[] =>
  Array.isArray(list) ? list.slice(1, list.length) : [];
