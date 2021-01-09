/**
 * Memorizes (caches) a functions arguments and return value.
 * if the function is called a second time with the same argument a cached value will be returned and the function will not be reevaluated.
 * @returns   a function that takes a function to be memorize
 */
export const memorize = () => {
  return <Fn extends Function>(fn: Fn): any => {
    const cache: Record<
      string,
      {
        readonly args: string;
        readonly value: any | readonly any[];
      }
    > = {};

    return <Value>(...args: readonly Value[]) => {
      const fnSignature = fn.toString();
      const stringifyArgs = JSON.stringify(args);

      // eslint-disable-next-line functional/no-conditional-statement
      if (!cache[fnSignature] || cache[fnSignature].args !== stringifyArgs) {
        // eslint-disable-next-line functional/no-expression-statement,  functional/immutable-data
        cache[fnSignature] = {
          args: stringifyArgs,
          value: fn(...args),
        };
      }

      return cache[fnSignature].value;
    };
  };
};
