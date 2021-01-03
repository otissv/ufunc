"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = void 0;
/**
 * Checks if string is a number
 *
 * @param   value  - Value to be evaluated.
 * @returns true if value is a string.
 *
 * @usage
 * `import \{ isString \} from "ufunc/isString"`
 *
 * @example
 * ```
 * isString('Hello, World!') // true
 *
 * isStringNumber(1 ) // false
 * ```
 */
function isString(value) {
    return typeof value === 'string';
}
exports.isString = isString;
//# sourceMappingURL=isString.js.map