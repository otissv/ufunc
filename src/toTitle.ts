import { maybeString } from './maybeString';
import { toUpper } from './toUpper';

/**
 * Transforms a string to title case.
 *
 * @param   string - String to be evaluated.
 *
 * @returns Returns a string with all words in capitalized.
 *
 * @usage
 * `import { toTitle } from "ufunc/toTitle"`
 *
 * @example
 * ```
 * toTitle("hello world") // "Hello World"
 * ```
 *  */
export const toTitle = (string: string): string =>
  maybeString(string).replace(/(^|\s)\S/g, toUpper);
