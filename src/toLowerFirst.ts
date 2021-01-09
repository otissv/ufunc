import { maybeString } from './maybeString';
import { toLower } from './toLower';
/**
 * Transforms the first character to lowercase.
 *
 * @param   string - String to be evaluated.
 *
 * @returns Returns a string with the first character lower cased.
 *
 * @usage
 * `import { toLowerFirst } from "ufunc/toLowerFirst"`
 *
 * @example
 * ```
 * toLowerFirst("HELLO WORLD") // "hELLO WORLD"
 * ```
 */
export const toLowerFirst = (string: string): string =>
  maybeString(string).replace(/^./, toLower);
