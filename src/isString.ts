/**
 * Checks if string is a number
 *
 * @param   value  - Value to be evaluated.
 * @returns true if value is a string.
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
export function isString(value: string): boolean {
  return typeof value === 'string';
}
