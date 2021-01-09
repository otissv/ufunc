import { maybeType } from './maybeType';

/**
 * Checks if value is ot type boolean
 *
 * @param value   - Value to be evaluated.
 *
 * @returns Returns the value if the value is a boolean, else returns false.
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
export const maybeBoolean = <Value>(value: Value): boolean =>
  maybeType(false)('boolean')(value);
