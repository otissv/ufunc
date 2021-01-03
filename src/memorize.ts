import { either } from './either';

type CacheInterface = {
  readonly args: string;
  readonly value?: any;
};
/**
 * Memorizes (caches) a functions arguments and return value.
 * if the function is called a second time with the same argument a cached value will be returned and the function will not be reevaluated.
 * @returns   a function that takes a function to be memorize
 */
export function memorize() {
  return function memo<F extends Function, O>(
    fn: F,
  ): <A>(...args: readonly A[]) => O {
    // eslint-disable-next-line functional/prefer-readonly-type
    const cache: Map<string, CacheInterface> = new Map();

    return <A>(...args: readonly A[]): O => {
      const fnSignature = fn.toString();
      const stringifyArgs = JSON.stringify(args);

      const cachedFn: CacheInterface | undefined = cache.get(fnSignature) ?? {
        args: '',
        value: '',
      };

      return either(() => {
        const value = fn(...args);
        // eslint-disable-next-line functional/no-expression-statement
        cache.set(stringifyArgs, value);
        return value;
      }, cachedFn.value)(cachedFn.args !== stringifyArgs);
    };
  };
}
