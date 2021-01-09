/**
 * Evaluates if the NODE_ENV environment variable is set to test.
 *
 * @returns Returns true if NODE_ENV environment variable is test.
 *
 * @usage
 * `import \{ isTest \} from "ufunc/isTest"`
 *
 * @example
 * ```
 * isTest() // true | false
 * ```
 */
export const isTest = (): boolean => process.env.NODE_ENV === 'test';
