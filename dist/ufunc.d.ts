
/**
 * @public
 * Gets a functions arguments names.
 *
 * @param   fn - function whose arguments will be extracted.
 * @returns Returns an array of argument names.
 *
 * @remarks
 * const {argNames} require("ufunc/argNames")
 *
 * import \{ argNames \} from "ufunc/argNames".
 *
 *
 * @example
 * ```
 * argNames((a: number, b: number) => a + b)
 * // ["a", "b"]
 *
 *
 * ```
 */
export declare function argNames<F extends Function>(fn: F): readonly string[];

/**
 * Removes all falsy values
 * @public
 *
 * @param   list - List of items to be filtered
 * @pram    options.exclude - A falsy value or a list of falsy values to be exclude from the clean
 * @pram    options.include - A single value or
 * @returns Returns a function that take an array which to be cleaned. The functions return an array with the cleaned items removed.
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

/**
 * Checks if string is a number
 * @public
 * @param   value  - Value to be evaluated.
 * @returns true if value is a string.
 *
 * @example
 * ```
 * isString('Hello, World!') // true
 *
 * isStringNumber(1 ) // false
 * ```
 */
export declare function isString(value: string): boolean;

/**
 * Checks if string is a number
 * @public
 * @param   value  - Value to be evaluated.
 * @returns true if value is a string and can be converted to a number.
 *
 * @example
 * ```
 * isStringNumber('1') // true
 *
 * isStringNumber('Hello, World!') // false
 * ```
 */
export declare function isStringNumber(value: string): boolean;

export { }
