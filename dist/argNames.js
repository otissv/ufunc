"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.argNames = void 0;
function argNames(fn) {
    if (!fn) {
        return [];
    }
    else {
        var match = fn
            .toString()
            .replace(/[\r\n\s]+/g, ' ')
            .match(/(?:function\s*\w*)?\s*(?:\((.*?)\)|([^\s]+))/);
        var result = match.slice(1, 3).filter(Boolean);
        return result.length === 0 ? [] : result.join('').split(/\s*,\s*/);
    }
}
exports.argNames = argNames;
//# sourceMappingURL=argNames.js.map