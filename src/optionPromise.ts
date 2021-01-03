/**
 * Evaluates if a value is nullish.
 *
 * @public
 * @param None   T | (value: T) => T: Fallback function.
 * @param Some   T | (value: T) => T: Function to be evaluated.
 * @returns Right if truthy else, returns left.
 */
export function optionPromise<N, S>(None: N, Some: S) {
  return async <T>(value: T): Promise<T> => {
    const some = typeof Some === 'function' ? await Some(value) : await Some;
    return (
      some ?? (typeof None === 'function' ? await None(value) : await None)
    );
  };
}
