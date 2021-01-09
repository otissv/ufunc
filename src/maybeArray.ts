/**
 * Checks if value is an array
 *
 * @param value   - Value to be evaluated.
 *
 * @returns Returns the value if the list is an array, else returns an empty array.
 *
 * @usage
 * import \{ maybeArray \} from "ufunc/maybeArray"

 * @example
 * ```
 * maybeArray([1])  // [1]  
 * maybeArray(true) // []
 * ```
 */
export const maybeArray = <Value>(value: Value): Value | readonly [] =>
  Array.isArray(value) ? value : [];
