import { maybeType } from './maybeType';

/**
 * Checks if value is of type number.
 *
 * @param value   - Value to be evaluated.
 *
 * @returns Returns the value if the value is a number, else returns 0.
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
export const maybeNumber = (value: number): number =>
  maybeType(0)('number')(value);
