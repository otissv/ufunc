import { maybeString } from './maybeString';

/**
 * Transforms a string to lowercase.
 *
 * @param   string - String to be evaluated.
 * @returns Returns a string all in lowercase.
 *
 * @usage
 * `import { toLower } from "ufunc/toLower"`
 *
 * @example
 * ```
 * toLower("HELLO") // "hello"
 * ```
 */
export const toLower = (string: string): string =>
  maybeString(string).toLowerCase();
