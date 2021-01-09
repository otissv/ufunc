/**
 * Evaluates functions in a right to left sequence. Where the return value of the previous function become the argument of the next function in the sequence.
 *
 * @param fns     - Functions to be invoked.
 * @param value   - Initial value to be mapped.
 *
 * @returns Returns the result of all the mapped functions.
 *
 * @usage
 * `import \{ compose \} from "ufunc/compose"`
 *
 * @example
 * ```
 * const toUpper = (string: string) => string.toUpperCase();
 * const toSnake = (string: string) => string.replace(' ', '_');
 *
 * compose(toUpper, toSnake)('Hello World!')
 * // "HELLO_WORLD!"
 * ```
 */
export const compose = <Fn extends Function>(...fns: readonly Fn[]) => <Value>(
  value: Value,
): any => fns.reduceRight((acc: unknown, fn: Fn) => fn(acc), value);
