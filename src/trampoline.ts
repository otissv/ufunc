export function trampoline<F extends Function>(f: F) {
  return function <O>(...args: readonly any[]): O {
    // eslint-disable-next-line functional/no-let
    let result = f(...args);

    // eslint-disable-next-line functional/no-loop-statement
    while (typeof result === 'function') {
      // eslint-disable-next-line functional/no-expression-statement
      result = result();
    }

    return result;
  };
}
