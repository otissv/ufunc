"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maybe = void 0;
var either_1 = require("./either");
/**
 * Checks if value is defined.
 *
 * @param   None - Fallback value if value is not designed.
 * @returns Returns a function that takes a value as an argument, which returns value if it is defined, else returns None
 *
 * @usage
 * import \{ maybe \} from "ufunc/maybe"
 *
 * @example
 */
function maybe(none) {
    return function (value) {
        var condition = typeof value === 'function' ? value() : typeof value !== 'undefined';
        return either_1.either(none, value)(condition);
    };
}
exports.maybe = maybe;
//# sourceMappingURL=maybe.js.map