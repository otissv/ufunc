/**
 * Checks if value is of the correct type.
 *
 * @param   none    - Fallback value if value is not defined.
 * @param   string  - typeof value to be checked.
 * @param   value   - Value to be evaluated.
 *
 * @returns Returns the value if value is correct type, else returns none.
 *
 * @usage
 * import \{ maybeType \} from "ufunc/maybeType"
 *
 * @example
 * ```
 * maybeType(null)("string")("hello") // "hello"
 * maybeType(null)("number")(1) // tr1ue
 * maybeType(null)("boolean")(true) // true
 * maybeType(null)("object")({}) // {}
 *
 * maybeType(null)("string")(false) // false
 * maybeType(null)("number")(false) // false
 * maybeType(null)("boolean")(1) // false
 * maybeType(null)("object")(false) // false
 * ```
 */
export const maybeType = <Type>(none: Type) => (type: string) => <Value>(
  value: Value,
): Type => (typeof value === type ? (value as any) : none);
