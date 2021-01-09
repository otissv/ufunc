import { maybeString } from './maybeString';

/**
 * Gets first character of a string
 *
 * @param   string - String to be evaluated.
 * @returns Return the first character of a string.
 *
 * @usage
 * `import { firstChar } from "ufunc/firstChar"`
 *
 * @example
 * ```
 * firstChar("hello") // "h"
 * ```
 */
export const firstChar = (string: string): string =>
  maybeString(string).charAt(0);
