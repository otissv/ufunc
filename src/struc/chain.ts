type ChainType<ReturnType> = {
  readonly chain: (fn: Function) => ChainType<ReturnType>;
  readonly exec: <Value>(value: Value) => ReturnType;
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
export const chain = <To>(
  // eslint-disable-next-line functional/prefer-readonly-type
  ...fns: Function[]
): ChainType<To> => ({
  chain: <Fn extends Function>(fn: Fn) => {
    // eslint-disable-next-line functional/no-expression-statement
    return chain(...[...fns, fn]);
  },

  exec: <Value>(initialValue: Value): To => {
    return fns.reduce(
      (previousValue: any, fn: Function) => fn(previousValue),
      initialValue,
    );
  },
});
