type ChainType<ReturnType> = {
  readonly chain: (fn: Function) => ChainType<ReturnType>;
  readonly exec: <T>(value: T) => ReturnType;
};

/**
 * Lazy evaluates a sequence of functions.
 *
 * @param   ...fns - Function to be reduced
 * @returns Returns a transformed value, where the previous functions output becomes the input of the next function.
 *
 * @method chain
 * @param  fn - Function to mapped on a value
 * @returns Returns a new chain.
 *
 *
 * @method exec
 * @param initialValue -  Initial value to passed to the reducer.
 *
 * @usage
 * `import \{ chain \} from "ufunc/chain"`
 *
 * @example
 * ```
 * chain(toUpperCase).chain(toSnake).exec('hello world') // HELLO_WORLD
 * ```
 */
export function chain<ReturnType>(
  // eslint-disable-next-line functional/prefer-readonly-type
  ...fns: Function[]
): ChainType<ReturnType> {
  return {
    chain: <F extends Function>(fn: F) => {
      // eslint-disable-next-line functional/no-expression-statement
      return chain(...[...fns, fn]);
    },

    exec: <T>(initialValue: T): ReturnType => {
      return fns.reduce(
        (previousValue: any, f: Function) => f(previousValue),
        initialValue,
      );
    },
  };
}
