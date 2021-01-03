"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.head = void 0;
/***
 * Returns the first item in a array.
 *
 * @param   list - An Array.
 * @returns Returns an array with only the first item in the list.
 *
 * @usage
 * `import \{ head \} from "ufunc/head "`
 *
 * @example
 * ```
 * head([1, 2, 3, 4]) // [1]
 * head([]) // []
 * ```
 */
function head(list) {
    return Array.isArray(list) && list.length !== 0 ? [list[0]] : [];
}
exports.head = head;
//# sourceMappingURL=head.js.map