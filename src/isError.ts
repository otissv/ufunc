/**
 * Checks if a value is an instance of Error.
 *
 * @param value - Value to be evaluated.
 * @returns Return true if value is an instance of error else returns false.
 *
 * @usage
 * `import \{ isError \} from "ufunc/isError"`
 *
 * @example
 * ```
 * isError(new Error()) // true
 * isError('error') // true
 * ```
 */
export function isError<T>(value: T): boolean {
  return value instanceof Error;
}
