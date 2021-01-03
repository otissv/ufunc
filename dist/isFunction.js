"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFunction = void 0;
/**
 * Checks if value is of type function.
 *
 * @param   value - Value to be evaluated.
 * @returns Returns true if value is of type value, else returns false.
 *
 * @usage
 * `import \{ isFunction \} from "ufunc/isFunction"`
 *
 * @example
 * ```
 * isFunction(function() { return undefined}) // true
 * isFunction(() => undefined) // true
 * ```
 */
var isFunction = function (value) { return typeof value === 'function'; };
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map