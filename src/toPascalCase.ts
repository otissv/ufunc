import { maybeString } from './maybeString';

/**
 * Transforms a string to pascal case.
 *
 * @param string - String to be evaluated.
 *
 * @returns Returns a string in pascal case.
 *
 * @usage
 * `import { toPascalCase } from "ufunc/toPascalCase"`
 *
 * @example
 * ```
 * toPascalCase("hello world") // "HelloWorld"
 * ```
 */
export const toPascalCase = (string: string): string =>
  maybeString(string)
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
      new RegExp(/\s+(.)(\w+)/, 'g'),
      (_$1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`,
    )
    .replace(new RegExp(/\s/, 'g'), '')
    .replace(new RegExp(/\w/), (s) => s.toUpperCase());
