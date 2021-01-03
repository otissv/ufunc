"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLength = void 0;
/**
 * Checks if value is of a specific length.
 * @param   length - Number to check value's length against.
 * @returns Returns a function that takes a value as an argument which returns true if value is the same as length, else returns false.
 *
 * @usage
 * `import \{ isLength \} from "ufunc/isLength"`
 *
 * @example
 */
var isLength = function (length) { return function (value) {
    return value != null && value.length === length;
}; };
exports.isLength = isLength;
//# sourceMappingURL=isLength.js.map