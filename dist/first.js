"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.first = void 0;
/***
 * Returns the first item in a array.
 *
 * @param   list - An Array.
 * @returns Returns the first item in a array.
 *
 * @usage
 * `import \{ first \} from "ufunc/first "`
 *
 * @example
 * ```
 * first([1, 2, 3, 4]) // 1
 * first([]) // undefined
 * ```
 */
function first(list) {
    return Array.isArray(list) ? list[0] : undefined;
}
exports.first = first;
//# sourceMappingURL=first.js.map