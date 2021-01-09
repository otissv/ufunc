/**
 * Checks if value is of type function.
 *
 * @param   value - Value to be evaluated.
 *
 * @returns Returns true if value is of type value, else returns false.
 *
 * @usage
 * `import \{ isFunction \} from "ufunc/isFunction"`
 *
 * @example
 * ```
 * isFunction(function() { return undefined}) // true
 * isFunction(() => undefined) // true
 * ```
 */
export const isFunction = <Value>(value: Value): boolean =>
  typeof value === 'function';
