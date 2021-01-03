/**
 * Removes all falsy values
 *
 * @param   list - List of items to be filtered
 * @pram    options.exclude - A falsy value or a list of falsy values to be exclude from the clean
 * @pram    options.include - A single value or
 * @returns Returns a function that take an array which to be cleaned. The functions inturn returns an array with the cleaned items removed.
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
export declare function clean<T>(options?: {
    readonly exclude?: any | readonly any[];
    readonly include?: any | readonly any[];
}): (list: readonly T[]) => readonly T[];
//# sourceMappingURL=clean.d.ts.map