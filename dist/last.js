"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.last = void 0;
/**
 * Returns the last item in a list.
 *
 * @param   list - array to be evaluated.
 * @returns Returns the last item in a list.
 *
 * @usage
 * `import \{ last \} from "ufunc/last"`
 *
 * @example
 * ```
 * last([1, 2, 3, 4]) // 4
 * last([]) // undefined
 * last() // undefined
 * ```
 */
function last(list) {
    return Array.isArray(list) ? list[list.length - 1] : undefined;
}
exports.last = last;
//# sourceMappingURL=last.js.map