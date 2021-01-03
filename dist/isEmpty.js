"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
/**
 * Checks if a value empty.
 * @param   value - any value
 * @returns Returns true if value is empty, else returns false.
 *
 * @usage
 * `import \{ isEmpty \} from "ufunc/isEmpty"`
 *
 * @example
 * ```
 * isEmpty(null) // true
 * isEmpty(undefined) // true
 * isEmpty([]) // true
 * isEmpty([undefined]) // true
 * isEmpty({}) // true
 * isEmpty('') // true
 *```
 */
var isEmpty = function (value) {
    var type = typeof value;
    switch (true) {
        case value == null:
        case value.length === 0:
        case Array.isArray(value) &&
            value.filter(function (v) { return typeof v === 'undefined'; }).length ===
                value.length:
            return true;
        case type == 'boolean':
        case type == 'number':
            return false;
        case type == 'object':
            return !Object.keys(value).length;
        default:
            return !value;
    }
};
exports.isEmpty = isEmpty;
//# sourceMappingURL=isEmpty.js.map