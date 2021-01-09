import { joinCase } from './joinCase';

/**
 * Transforms a string to snake case
 *
 * @param   string - String to be evaluated.
 *
 * @returns Returns a string in snake case.
 *
 * @usage
 * `import { toSnakeCase } from "ufunc/toSnakeCase"`
 *
 * @example
 * ```
 * toSnakeCase('hello world') // 'hello_world'
 * ```
 */
export const toSnakeCase = (string: string): string => joinCase('_')(string);
