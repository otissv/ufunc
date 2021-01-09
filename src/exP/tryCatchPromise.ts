/* eslint-disable functional/no-try-statement */

/**
 * Evaluates a promises value.
 * @param fn <Value>() => Promise<Value>: Function to be evaluated.
 * @returns Promise
 */
export const tryCatchPromise = (
  fn: <Value, ReturnType>(value: Value) => Promise<ReturnType>,
) => async <Value, ReturnType>(value: Value): Promise<ReturnType | Error> => {
  try {
    return await fn(value);
  } catch (e) {
    const error = new Error(e);
    return Promise.reject(error);
  }
};
