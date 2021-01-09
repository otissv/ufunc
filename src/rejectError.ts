/**
 * Warps an error in a Promise.reject function.
 *
 * @param error - Error object or an error message.
 *
 * @returns Returns an error wrapped in a Promise.reject function.
 */

export const rejectError = (error: string | Error): Promise<Error> => {
  const err = error instanceof Error ? error : new Error(error);
  return Promise.reject(err);
};
