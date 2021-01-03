"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tail = void 0;
/**
 * Evaluates functions in a right to left sequence. Where the return value of the previous function become the argument of the next function in the sequence
 * @param list T[]:  An array.
 * @returns array with all but the first item in the list.
 */
function tail(list) {
    return list.slice(1, list.length - 1);
}
exports.tail = tail;
//# sourceMappingURL=tail.js.map