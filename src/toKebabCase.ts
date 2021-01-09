import { joinCase } from './joinCase';

/**
 * Transforms a string to kebab case
 *
 * @param   string - String to be evaluated.
 * @returns Returns a string in kebab case.
 *
 * @usage
 * `import { toKebabCase } from "ufunc/toKebabCase"`
 *
 * @example
 * ```
 * toKebabCase("hello world") // "hello-world"
 * ```
 */
export const toKebabCase = (string: string): string => joinCase('-')(string);
