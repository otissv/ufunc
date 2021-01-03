/**
 * Evaluates if the NODE_ENV environment variable is set to development.
 *
 * @returns Returns true if NODE_ENV environment variable is development.
 *
 * @usage
 * `import \{ isDev \} from "ufunc/isDev"`
 *
 * @example
 * ```
 * isDev() // true | false
 * ```
 */
export function isDev(): boolean {
  return (
    process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'development'
  );
}
