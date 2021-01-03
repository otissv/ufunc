"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidString = void 0;
/**
 * Checks if value is a string and not empty.
 *
 * @param   value - Value to be evaluated.
 * @returns Returns true if the value is a string and is not empty, else returns false
 *
 * @usage
 * `import \{ isValidString \} from "ufunc/isValidString"`
 *
 * @example
 * ```
 * isValidString('hello') // true
 * ```
 */
function isValidString(value) {
    return typeof value === 'string' && value.trim() !== '';
}
exports.isValidString = isValidString;
//# sourceMappingURL=isValidString.js.map