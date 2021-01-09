/**
 * Evaluates if all items in a list are truthy.
 *
 * @param   list - A list of items to be evaluated.
 * @returns Returns true if all arguments are true, else returns false.
 *
 * @usage
 * `import \{ everyTrue \} from "ufunc/everyTrue"`
 *
 * @example
 * ```
 * everyTrue(['a', 1, true]) // true
 * everyTrue(['a', 1, true, false]) //false
 * ```
 */
export const everyTrue = <Value>(list: readonly Value[]): boolean =>
  list.length > 0 && [...list].every((e) => Boolean(e));
