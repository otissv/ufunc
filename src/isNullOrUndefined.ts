/**
 * Checks if a value is null or undefined.
 *
 * @param   value - The value to be evaluated.
 *
 * @param Returns true if value is null or undefined, else returns false.
 *
 *
 * @usage
 * `import \{ isNullOrUndefined \} from "ufunc/isNullOrUndefined "`
 *
 * @example
 * ```
 * isNullOrUndefined(null)      // true
 * isNullOrUndefined(undefined) // true
 * isNullOrUndefined(true)      // false
 * isNullOrUndefined(0)         // false
 * isNullOrUndefined({})        // false
 * isNullOrUndefined(false)     // false
 * isNullOrUndefined([])        // false
 * ```
 */
export const isNullOrUndefined = <Value>(value: Value): boolean =>
  Object.is(value, null) || Object.is(value, undefined);
