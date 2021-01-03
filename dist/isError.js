"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isError = void 0;
/**
 * Checks if a value is an instance of Error.
 *
 * @param value - Value to be evaluated.
 * @returns Return true if value is an instance of error else returns false.
 *
 * @usage
 * `import \{ isError \} from "ufunc/isError"`
 *
 * @example
 * ```
 * isError(new Error()) // true
 * isError('error') // true
 * ```
 */
function isError(value) {
    return value instanceof Error;
}
exports.isError = isError;
//# sourceMappingURL=isError.js.map