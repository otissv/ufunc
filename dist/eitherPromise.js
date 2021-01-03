"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eitherPromise = void 0;
var tslib_1 = require("tslib");
/**
 * Evaluates if Some and None arguments based on condition.
 *
 * @param   None - Fallback Promise.
 * @param   Some - Promise to be evaluated.
 * @returns Return a function that take a boolean condition as an argument. If condition truthy returns Some, else returns None.
 *
 * @usage
 * `import \{ eitherPromise \} from "ufunc/eitherPromise"`
 *
 * @example
 * ```
 * either(Promise.resolve("none"), Promise.resolve("some"))(true)
 * .then(result => {
 *   console.log(result) // "some"
 * })
 *
 * either(() => Promise.resolve("none"), () => Promise.resolve("some"))(true)
 * .then(result => {
 *   console.log(result) // "some"
 * })
 *
 * either(() => Promise.resolve("none"), Promise.resolve("some"))(true)
 * .then(result => {
 *   console.log(result) // "some"
 * })
 *
 * either(Promise.resolve("none"), () => Promise.resolve("some"))(true)
 * .then(result => {
 *   console.log(result) // "some"
 * })
 
 * either(Promise.resolve("none"), Promise.resolve("some"))(false)
 * .then(result => {
 *   console.log(result) // "none"
 * })
 *
 * either(() => Promise.resolve("none"), () => Promise.resolve("some"))(false)
 * .then(result => {
 *   console.log(result) // "none"
 * })
 *
 * either(() => Promise.resolve("none"), Promise.resolve("some"))(false)
 * .then(result => {
 *   console.log(result) // "none"
 * })
 *
 * either(Promise.resolve("none"), () => Promise.resolve("some"))(false)
 * .then(result => {
 *   console.log(result) // "none"
 * })
 * ```
 */
function eitherPromise(none, some) {
    var _this = this;
    return function (condition) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var _a, _b;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!condition) return [3 /*break*/, 4];
                    if (!(typeof some === 'function')) return [3 /*break*/, 2];
                    return [4 /*yield*/, some()];
                case 1:
                    _a = _c.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = some;
                    _c.label = 3;
                case 3: return [2 /*return*/, _a];
                case 4:
                    if (!(typeof none === 'function')) return [3 /*break*/, 6];
                    return [4 /*yield*/, none()];
                case 5:
                    _b = _c.sent();
                    return [3 /*break*/, 7];
                case 6:
                    _b = none;
                    _c.label = 7;
                case 7: return [2 /*return*/, _b];
            }
        });
    }); };
}
exports.eitherPromise = eitherPromise;
//# sourceMappingURL=eitherPromise.js.map