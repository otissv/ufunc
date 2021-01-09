import { maybeType } from './maybeType';

/**
 * Checks if value is ot type boolean
 *
 * @param value  - Value to be evaluated.
 *
 * @returns Returns the value if the value is a boolean, else an empty object.
 *
 * @usage
 * import \{ maybeObject \} from "ufunc/maybeObject"
 *
 * @example
 * maybeObject({ a: 1 }) // { a: 1 }
 * maybeObject([]) // []
 * maybeObject(null) // null
 * maybeObject("") // {}
 */
export const maybeObject = (value: Record<string, any>): Record<string, any> =>
  maybeType({})('object')(value);
