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
export declare function argNames<F extends Function>(fn: F): readonly string[];
//# sourceMappingURL=argNames.d.ts.map