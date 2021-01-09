import { maybeString } from './maybeString';

/**
 * Transforms a string to camel case.
 *
 * @param   string - String to be evaluated.
 *
 * @returns Returns a camel cased string.
 *
 * @usage
 * `import { toCamel } from "ufunc/toCamel"`
 *
 * @example
 * ```
 * toCamel("hello world") // "helloWorld"
 * ```
 */
export const toCamel = (string: string): string => {
  const str = maybeString(string);
  return str.trim() === ''
    ? str
    : str[0].toLowerCase() +
        str
          .substr(1, string.length)
          .replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase());
};
