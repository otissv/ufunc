"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unique = void 0;
var tslib_1 = require("tslib");
var identity_1 = require("./identity");
/**
 * Returns only unique values in an array.
 * @param fn T(value: T) => anyL   an array
 * @returns function that takes an array  new array with unique items from the list.
 */
function unique(fn) {
    if (fn === void 0) { fn = identity_1.identity; }
    return function (array) {
        function reducer(items, set, acc) {
            if (set === void 0) { set = new Set(); }
            if (acc === void 0) { acc = []; }
            if (items.length === 0)
                return acc;
            var result = [];
            var item = items[0];
            if (!set.has(fn(item))) {
                result = acc;
            }
            else {
                set.add(item);
                result = tslib_1.__spreadArrays(acc, [item]);
            }
            return reducer(items.slice(1, items.length - 1), set, result);
        }
        return reducer(array);
    };
}
exports.unique = unique;
//# sourceMappingURL=unique.js.map