/**
 * Evaluates if a value is nullish.
 *
 * @param   None -Fallback value or function.
 * @param   Some -Value or function return value to be evaluated.
 * @returns If Some id nullish returns None else returns some.
 *
 * @usage
 * `import \{ option \} from "ufunc/option"`
 *
 * @example
 * ```
 * option("none", "some")).toBe("some")
 * // "some"
 *
 * option(() => "none", () => "some")).toBe("some")
 * // "some"
 *
 * option("none", false)).toBe("some")
 * // "none"
 *
 * option(() => "none", () => false )).toBe("some")
 * // "none"
 * ```
 */
export declare function option<None, Some>(none: None, some: Some): None | Some;
//# sourceMappingURL=option.d.ts.map