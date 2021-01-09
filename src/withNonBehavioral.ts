/**
 * Passes arguments to non-behavioral functions and called the main function.
 * Non-behavioral functions are side effects that do not have any affect the on the main function.
 *
 * @param fn              - Function to be called.
 * @param nonBehavioral   - Side effect function.
 * @param args            - Functions arguments.
 *
 * @returns Returns the result of the function called with the arguments.
 */
export const withNonBehavioral = <Fn extends Function>(fn: Fn) => <
  NonBehavioral extends Function
>(
  ...nonBehavioral: readonly NonBehavioral[]
) => <Args>(...args: readonly Args[]): any => {
  // eslint-disable-next-line functional/no-expression-statement
  nonBehavioral &&
    nonBehavioral.forEach((nonBehavioralFn: Function) => {
      return nonBehavioralFn(fn.name, ...args);
    });

  return fn(...args);
};
