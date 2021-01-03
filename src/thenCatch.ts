/* eslint-disable functional/no-try-statement */

/**
 * Evaluates a promises value.
 * @param fn <T>() => Promise<T>: Function to be evaluated.
 * @returns Promise
 */
export const thenCatch = async <T>(fn: <T>() => Promise<T>): Promise<T> => {
  try {
    return await fn();
  } catch (e) {
    const error = new Error(e);
    return Promise.reject(error);
  }
};
