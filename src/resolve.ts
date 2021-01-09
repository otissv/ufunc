/**
 * Warps an error in a Promise.resolve function.
 *
 * @param value - value to be wrapped.
 *
 * @returns Returns an value wrapped in a Promise.resolve function.
 */
export const resolve = <Value>(value: Value): Promise<Value> =>
  Promise.resolve(value);
