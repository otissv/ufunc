/**
 * Removes all falsy values from a list.
 *
 * @pram    options.exclude - A single falsy value or a list of falsy values to be exclude from the clean.
 * @pram    options.include - A single value or or a list of values to be included in the clean.
 * @param   list - List of items to be filtered.

 * @returns Returns an array with the cleaned items removed.
 *
 * @usage
 * `import \{ clean \} from "ufunc/clean"`
 *
 * @example
 * ```
 * clean()(0, false, null, undefined, '', 0x0, -0, 0.0])
 * // []
 * ```
 */
export const clean = <Value>(
  options: {
    readonly exclude?: any | readonly any[];
    readonly include?: any | readonly any[];
  } = {},
) => (list: readonly Value[]): readonly Value[] =>
  list.filter((e: any) => {
    switch (true) {
      case Array.isArray(options.exclude):
        return options.exclude.includes(e) ? true : Boolean(e);
      case typeof options.exclude !== 'undefined':
        return options.exclude === e;

      case Array.isArray(options.include):
        return options.include.includes(e) ? false : Boolean(e);
      case typeof options.include !== 'undefined':
        return options.include === e ? false : Boolean(e);
      default:
        return Boolean(e);
    }
  });
