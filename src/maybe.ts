import { either } from './either';

/**
 * Checks if value is defined.
 *
 * @public
 * @param   None - Fallback value if value is not designed.
 * @returns Returns a function that takes a value as an argument, which returns value if it is defined, else returns None
 *
 * @usage
 * import \{ maybe \} from "ufunc/maybe"
 *
 * @example
 */
export function maybe<None>(none: None): <T>(value: T) => T {
  return <T>(value: T): T => either(none, value)(typeof value !== 'undefined');
}

/**
 * Checks if value is of the correct type.
 *
 * @public
 * @param   None - Fallback value if value is not designed.
 * @returns Returns a function that takes a value as an argument, which returns the value if value is correct type, else returns None
 *
 * @usage
 * import \{ maybeType \} from "ufunc/maybeType"
 *
 * @example
 */
function maybeType<N>(None: N, type: string) {
  return <V>(value: V) => (typeof value === type ? value : None);
}

/**
 * Checks if value is of type string.
 *
 * @public
 * @param   value - Value to be evaluated.
 * @returns Returns a function which takes a value as an argument. Returns value if value is a string, else return an empty string.
 *
 * @usage
 * import \{ maybeString \} from "ufunc/maybeString"
 *
 * @example
 */
export function maybeString(value: string): string {
  return maybeType('', 'string')(value);
}

/**
 * Checks if value is of type number.
 *
 * @public
 * @param   value - Value to be evaluated.
 * @returns Returns a function that takes a value as an argument, which returns the value if the value is a number, else returns 0.
 *
 * @usage
 * import \{ maybeNumber \} from "ufunc/maybeNumber"
 *
 * @example*/
export function maybeNumber(value: number): number {
  return maybeType(0, 'number')(value);
}

/**
 * Checks if value is ot type boolean
 *
 * @public
 * @param None boolean: Value to be evaluated.
 * @returns function that takes a value as an argument, which returns the value if the value is a boolean, else return false.
 *
 * @usage
 * import \{ maybeBoolean \} from "ufunc/maybeBoolean"
 *
 * @example
 *
 */
export function maybeBoolean(value: boolean): boolean {
  return maybeType(false, 'boolean')(value);
}

/**
 * Checks if value is ot type boolean
 *
 * @public
 * @param None boolean: Value to be evaluated.
 * @returns function that takes a value as an argument, which returns the value if the value is a boolean, else return false.
 *
 * @usage
 * import \{ maybeBoolean \} from "ufunc/maybeBoolean"
 *
 * @example
 *
 */
export function maybeObject(value: Record<string, any>): Record<string, any> {
  return maybeType({}, 'object')(value);
}

/**
 * Checks if value is an array
 *
 * @public
 * @param None T[]: Value to be evaluated.
 * @returns Returns a function that takes a value as an argument, which returns value if the value is an array, else returns an empty array
 *
 * @usage
 * import \{ maybeArray \} from "ufunc/maybeArray"
 *
 * @example
 *
 */
export function maybeArray<T>(value: readonly T[]): readonly T[] {
  return Array.isArray(value) ? value : [];
}
