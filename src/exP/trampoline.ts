export const trampoline = <Fn extends Function>(fn: Fn) => <To>(
  ...args: readonly any[]
): To => {
  // eslint-disable-next-line functional/no-let
  let result = fn(...args);

  // eslint-disable-next-line functional/no-loop-statement
  while (typeof result === 'function') {
    // eslint-disable-next-line functional/no-expression-statement
    result = result();
  }

  return result;
};
