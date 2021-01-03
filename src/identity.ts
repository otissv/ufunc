/**
 * Returns the first argument supplied to itself.
 * @param   arg - function argument
 * @returns Returns the first argument supplied to itself.
 *
 * @usage
 * `import \{ identity \} from "ufunc/identity"`
 *
 * @example
 */
export function identity<T>(arg: T): T {
  return arg;
}
