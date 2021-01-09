import { maybeString } from './maybeString';

/**
 * Removes a number characters from the beginning of a string.
 *
 * @param   n       - The number representing number of characters to drop.
 * @param   string  - String to be evaluated.
 *
 * @returns Returns a sub-string starting from position n.
 *
 * @usage
 * `import { charAt } from "ufunc/charAt"`
 *
 * @example
 * ```
 * dropChars(0)("ello")
 * // "hello"
 * ```
 */
export const dropChars = (n: number) => (string: string): string =>
  typeof n === 'number'
    ? n >= 0
      ? maybeString(string).substr(n + 1)
      : ''
    : maybeString(string);
