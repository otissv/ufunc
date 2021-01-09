import { maybeType } from './maybeType';

/**
 * Checks if value is of type string.
 *
 * @param   value - Value to be evaluated.
 *
 * @returns Returns value if value is a string, else return an empty string.
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
export const maybeString = (value: string): string =>
  maybeType('')('string')(value);
