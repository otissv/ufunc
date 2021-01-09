import { maybeString } from './maybeString';
import { toUpper } from './toUpper';

/**
 * Transforms the first character to uppercase.
 *
 * @param string - String to be evaluated.
 *
 * @returns Returns a string with the first character upper cased.
 *
 * @usage
 * `import { toUpperFirst } from "ufunc/toUpperFirst"`
 *
 * @example
 * ```
 * toUpperFirst("hello world") // "Hello world"
 * ```
 */
export const toUpperFirst = (string: string): string =>
  maybeString(string).replace(/^./, toUpper);
