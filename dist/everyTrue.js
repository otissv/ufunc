"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.everyTrue = void 0;
var tslib_1 = require("tslib");
/**
 * Evaluates if all items in a list are truthy.
 *
 * @param   list - An array of items to be evaluated.
 * @returns Returns true if all arguments are true, else returns false.
 *
 * @usage
 * `import \{ everyTrue \} from "ufunc/everyTrue"`
 *
 * @example
 * ```
 * everyTrue(['a', 1, true]) // true
 * everyTrue(['a', 1, true, false]) //false
 * ```
 */
function everyTrue(list) {
    return tslib_1.__spreadArrays(list).every(function (e) { return Boolean(e); });
}
exports.everyTrue = everyTrue;
//# sourceMappingURL=everyTrue.js.map