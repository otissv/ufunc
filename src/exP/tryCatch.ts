/* eslint-disable functional/no-try-statement */

/**
 * Tries to execute a function.
 * @param fn  -Function to be executed.
 * @returns function value if no errors thrown, else returns an Error object.
 */
export const tryCatch = (
  fn: <Value, ReturnType>(value: Value) => ReturnType,
) => <Value, ReturnType>(value: Value): ReturnType | Error => {
  try {
    return fn(value);
  } catch (e) {
    return new Error(e);
  }
};
