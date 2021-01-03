/**
 * Evaluates if all items in a list are truthy.
 *
 * @param   list - An array of items to be evaluated.
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
export function everyTrue<T>(list: readonly T[]): boolean {
  return [...list].every((e) => Boolean(e));
}
