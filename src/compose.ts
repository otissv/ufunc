/**
 * Evaluates functions in a right to left sequence. Where the return value of the previous function become the argument of the next function in the sequence
 *
 * @param fns - Functions to be evaluated
 * @returns Returns a function that takes a single argument will be mapped over.
 *
 * @usage
 * `import \{ compose \} from "ufunc/compose"`
 *
 * @example
 * ```
 * const toUpper = (string: string) => string.toUpperCase();
 * const toSnake = (string: string) => string.replace(' ', '_');
 *
 * compose(toUpper, toSnake)('Hello World!') // "HELLO_WORLD!"
 * ```
 */
export function compose<ReturnType>(
  ...fns: readonly Function[]
): (value: any) => ReturnType {
  return <T>(value: T): any =>
    fns.length === 0
      ? value
      : compose(...fns.slice(0, fns.length - 1))(fns[fns.length - 1](value));
}
