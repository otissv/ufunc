"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.someTrue = void 0;
var tslib_1 = require("tslib");
/**
 * Evaluates if some items in a list are truthy.
 *
 * @param   list - An array of items to be evaluated.
 * @returns Returns true if some arguments are true, else returns false
 *
 * @usage
 * `import \{ someTrue \} from "ufunc/someTrue"`
 *
 * @example
 * ```
 * someTrue([false, true]) // true
 * someTrue([false, 'a', 1, true]) //true
 *
 * someTrue([null, 0, false]) //false
 * ```
 */
function someTrue(list) {
    return tslib_1.__spreadArrays(list).some(function (e) { return Boolean(e); });
}
exports.someTrue = someTrue;
//# sourceMappingURL=someTrue.js.map