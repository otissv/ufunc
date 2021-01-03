/**
 * Returns a functions arguments names.
 *
 * @pram    fn - function whose arguments will be extracted.
 * @returns Returns an array of argument names.
 *
 * @usage
 * `import \{ argNames \} from "ufunc/argNames"`
 *
 * @example
 * ```
 * argNames((a: number, b: number) => a + b)
 * // ["a", "b"]
 * ```
 */

export function argNames<F extends Function>(fn: F): readonly string[] {
  if (!fn) {
    return [];
  } else {
    const match = fn
      .toString()
      .replace(/[\r\n\s]+/g, ' ')
      .match(
        /(?:function\s*\w*)?\s*(?:\((.*?)\)|([^\s]+))/,
      ) as RegExpMatchArray;

    const result = match.slice(1, 3).filter(Boolean);
    return result.length === 0 ? [] : result.join('').split(/\s*,\s*/);
  }
}
