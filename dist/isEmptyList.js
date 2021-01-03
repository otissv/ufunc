"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyList = void 0;
/**
 * Checks if a list items has no items.
 * @param list  T[]: An array.
 * @returns   true if length is 0, else false if length is more than or equal to one.
 *
 * @usage
 * import \{ eitherPromise \} from "ufunc/eitherPromise"
 *
 * @example
 */
function isEmptyList(list) {
    return list.length === 0;
}
exports.isEmptyList = isEmptyList;
//# sourceMappingURL=isEmptyList.js.map