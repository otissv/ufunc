/**
 * Evaluates functions in a left to right sequence. Where the return value of the previous function become the argument of the next function in the sequence.
 *
 * @param fns     - Functions to be invoked.
 * @param value   - Initial value to be mapped.
 *
 * @returns Returns the result of all the mapped functions.
 *
 * @usage
 * `import \{ pipe \} from "ufunc/pipe"`
 *
 * @example
 * ```
 * const toUpper = (string: string) => string.toUpperCase();
 * const toSnake = (string: string) => string.replace(' ', '_');
 *
 * pipe(toUpper, toSnake)('Hello World!') // "HELLO_WORLD!"
 * ```
 */
export const pipe = <To>(...fns: readonly Function[]) => <Value>(
  value: Value,
): To | Value =>
  fns.length === 0
    ? value
    : pipe<To>(...fns.slice(1, fns.length))(fns[0](value));
