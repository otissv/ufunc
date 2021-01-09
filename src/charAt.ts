import { maybeString } from './maybeString';

/**
 * Returns a character in a string at a certain position.
 *
 * @param   n       - The Number representing an index in a string.
 * @param   string  - The string where the character will be extracted.
 *
 * @returns Returns the character in the string at position n.
 *
 * @usage
 * `import { charAt } from "ufunc/charAt"`
 *
 * @example
 * ```
 * charAt(4)("hello")
 * // "O"
 * ```
 */
export const charAt = (nth: number) => (string: string): string =>
  typeof nth === 'number'
    ? nth >= 0
      ? maybeString(string).charAt(nth)
      : ''
    : maybeString(string);
