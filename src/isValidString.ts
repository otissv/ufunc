/**
 * Checks if value is a string and not empty.
 *
 * @param   value - Value to be evaluated.
 *
 * @returns Returns true if the value is a string and is not empty, else returns false
 *
 * @usage
 * `import \{ isValidString \} from "ufunc/isValidString"`
 *
 * @example
 * ```
 * isValidString('hello') // true
 * ```
 */
export const isValidString = <Value>(value: Value): boolean =>
  typeof value === 'string' && value.trim() !== '';
