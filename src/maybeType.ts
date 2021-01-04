/**
 * Checks if value is of the correct type.
 *
 * @param   None - Fallback value if value is not designed.
 * @returns Returns a function that takes a value as an argument, which returns the value if value is correct type, else returns None
 *
 * @usage
 * import \{ maybeType \} from "ufunc/maybeType"
 *
 * @example
 * ```
 * maybeType(null, "string")("hello") // "hello"
 * maybeType(null, "number")(1) // tr1ue
 * maybeType(null, "boolean")(true) // true
 * maybeType(null, "object")({}) // {}
 *
 * maybeType(null, "string")(false) // false
 * maybeType(null, "number")(false) // false
 * maybeType(null, "boolean")(1) // false
 * maybeType(null, "object")(false) // false
 * ```
 */
export function maybeType<N>(None: N, type: string) {
  return <V>(value: V): V | N => (typeof value === type ? value : None);
}

/**
 * Checks if value is of type string.
 *
 * @param   value - Value to be evaluated.
 * @returns Returns a function which takes a value as an argument. Returns value if value is a string, else return an empty string.
 *
 * @usage
 * import \{ maybeString \} from "ufunc/maybeString"
 *
 * @example
 * ```
 * maybeString("hello") // "hello"
 * maybeString(null) // ""
 * ```
 */
export function maybeString(value: string): string {
  return maybeType('', 'string')(value);
}

/**
 * Checks if value is of type number.
 *
 * @param   value - Value to be evaluated.
 * @returns Returns a function that takes a value as an argument, which returns the value if the value is a number, else returns 0.
 *
 * @usage
 * import \{ maybeNumber \} from "ufunc/maybeNumber"
 *
 * @example
 * ```
 * maybeNumber(1) // 1
 * maybeNumber(null) // 0
 * ```
 * */
export function maybeNumber(value: number): number {
  return maybeType(0, 'number')(value);
}

/**
 * Checks if value is ot type boolean
 *
 * @param None boolean: Value to be evaluated.
 * @returns function that takes a value as an argument, which returns the value if the value is a boolean, else return false.
 *
 * @usage
 * import \{ maybeBoolean \} from "ufunc/maybeBoolean"
 *
 * @example
 * ```
 * maybeBoolean(true) // true
 * maybeBoolean(null) // false
 * ```
 */
export function maybeBoolean(value: boolean): boolean {
  return maybeType(false, 'boolean')(value);
}

/**
 * Checks if value is ot type boolean
 *
 * @param None boolean: Value to be evaluated.
 * @returns function that takes a value as an argument, which returns the value if the value is a boolean, else return false.
 *
 * @usage
 * import \{ maybeBoolean \} from "ufunc/maybeBoolean"
 *
 * @example
 * maybeObject({ a: 1 }) // { a: 1 }
 * maybeObject([]) // []
 * maybeObject(null) // null
 * maybeObject("") // {}
 */
export function maybeObject(value: Record<string, any>): Record<string, any> {
  return maybeType({}, 'object')(value);
}

/**
 * Checks if value is an array
 *
 * @param None T[]: Value to be evaluated.
 * @returns Returns a function that takes a value as an argument, which returns value if the value is an array, else returns an empty array
 *
 * @usage
 * import \{ maybeArray \} from "ufunc/maybeArray"
 * maybeArray([1]) // [1]
 * maybeArray(true) // []
 * @example
 *
 */
export function maybeArray<T>(value: readonly T[]): readonly T[] {
  return Array.isArray(value) ? value : [];
}
