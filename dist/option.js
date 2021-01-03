"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.option = void 0;
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
function option(none, some) {
    var _some = typeof some === 'function' ? some() : some;
    return _some !== null && _some !== void 0 ? _some : (typeof none === 'function' ? none() : none);
}
exports.option = option;
//# sourceMappingURL=option.js.map