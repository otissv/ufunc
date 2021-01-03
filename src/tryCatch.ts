/* eslint-disable functional/no-try-statement */

/**
 * Tries to execute a function.
 * @param fn <T>() => T: Function to be executed.
 * @returns function value if no errors thrown, else returns an Error object.
 */
export const tryCatch = <T>(fn: <T>() => T): T | Error => {
  try {
    return fn();
  } catch (e) {
    return new Error(e);
  }
};
