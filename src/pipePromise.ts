/**
 * Evaluates functions in a left to right sequence. Where the return value of the previous function become the argument of the next function in the sequence.
 *
 * @param fns     - Functions to be invoked.
 * @param value   - Initial value to be mapped.
 *
 * @returns Returns a Promise with the result of all the mapped functions.
 *
 * @usage
 * `import \{ pipePromise \} from "ufunc/pipePromise"`
 *
 * @example
 * ```
 * const toUpper = async (string: string) => string.toUpperCase();
 * const toSnake = async (string: string) => string.replace(' ', '_');
 *
 * pipePromise(toUpper, toSnake)('Hello World!') // "HELLO_WORLD!"
 * ```
 */
export const pipePromise = (...fns: readonly Function[]) => async <Value>(
  value: Value | Promise<Value>,
): Promise<any> => {
  // eslint-disable-next-line functional/no-try-statement
  try {
    return fns.length === 0
      ? await value
      : await pipePromise(...fns.slice(1, fns.length))(
          await fns[0](await value),
        );
  } catch (error) {
    return error;
  }
};

// def addErrorHandling[From, To](errorStrategy: (From, Exception) => To)(raw: From => To): From => To =
//     from => try {raw(from) } catch {case exception: Exception => errorStrategy(from, exception)}
