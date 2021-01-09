/**
 * Invokes a function n number of times.
 *
 * @param   fn  - Function to be invoked.
 * @param   n   - Number of the times the function will be to be invoked.
 *
 * @returns Returns an array with the results.
 *
 * @usage
 * `import \{ times \} from "ufunc/times "`
 *
 * @example
 * ```
 * times((i: number) => i)(4)
 * // [0, 1, 2, 3]
 *
 * times((i: number) => ({ _id: i })
 * // [{ _id: 0 }, { _id: 1 }]
 * ```
 */
export const times = <Fn extends Function>(fn: Fn): any => {
  const reducer = (n: number, acc: any = []): any =>
    typeof fn !== 'function' || typeof n !== 'number'
      ? []
      : n === 0
      ? acc
      : reducer(n - 1, [...acc, ...[fn(acc.length, acc)]]);

  return (n: number) => reducer(n);
};
