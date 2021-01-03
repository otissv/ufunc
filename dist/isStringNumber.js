"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStringNumber = void 0;
/**
 * Checks if string is a number
 *
 * @param   value  - Value to be evaluated.
 * @returns true if value is a string and can be converted to a number.
 *
 * @usage
 * `import \{ isStringNumber \} from "ufunc/isStringNumber"`
 *
 * @example
 * ```
 * isStringNumber('1') // true
 *
 * isStringNumber('Hello, World!') // false
 * ```
 */
function isStringNumber(value) {
    return typeof value === 'string' && !!value.match(/^-?\d+\.?\d*$/);
}
exports.isStringNumber = isStringNumber;
//# sourceMappingURL=isStringNumber.js.map