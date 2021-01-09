/**
 * Checks if string is a number
 *
 * @param   value  - Value to be evaluated.
 *
 * @returns Returns true if value is a string.
 *
 * @usage
 * `import \{ isString \} from "ufunc/isString"`
 *
 * @example
 * ```
 * isString('Hello, World!') // true
 *
 * isStringNumber(1 ) // false
 * ```
 */
export const isString = <Value>(value: Value): boolean =>
  typeof value === 'string';
