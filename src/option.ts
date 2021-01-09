/**
 * Evaluates if a value is nullish.
 *
 * @param   none  - Fallback value or function.
 * @param   some  - Value or function return value to be evaluated.
 *
 * @returns If some is nullish returns none else returns some.
 *
 * @usage
 * `import \{ option \} from "ufunc/option"`
 *
 * @example
 * ```
 * option("none")("some")).toBe("some")
 * // "some"
 *
 * option(() => "none")(() => "some")).toBe("some")
 * // "some"
 *
 * option("none")(false)).toBe("some")
 * // "none"
 *
 * option(() => "none")(() => false )).toBe("some")
 * // "none"
 * ```
 */
export const option = <None>(none: None) => <Some>(some: Some): None | Some => {
  const _some = typeof some === 'function' ? some() : some;
  return _some ?? (typeof none === 'function' ? none() : none);
};
