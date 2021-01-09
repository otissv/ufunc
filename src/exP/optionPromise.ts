/**
 * Evaluates if a value is nullish.
 *
 * @public
 * @param None   T | (value: T) => T: Fallback function.
 * @param Some   T | (value: T) => T: Function to be evaluated.
 * @returns Right if truthy else, returns left.
 */
export const optionPromise = <N, S>(none: N, some: S) => async <Value>(
  value: Value,
): Promise<Value> => {
  const _some = typeof some === 'function' ? await some(value) : await some;
  return _some ?? (typeof none === 'function' ? await none(value) : await none);
};
