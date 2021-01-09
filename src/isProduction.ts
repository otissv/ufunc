/**
 * Evaluates if the NODE_ENV environment variable is set to production.
 *
 * @returns Returns true if NODE_ENV environment variable is production.
 *
 * @usage
 * `import \{ isProduction \} from "ufunc/isProduction"`
 *
 * @example
 * ```
 * isProduction() // true | false
 * ```
 */
export const isProduction = (): boolean =>
  process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production';
