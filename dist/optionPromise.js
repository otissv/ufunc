"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionPromise = void 0;
var tslib_1 = require("tslib");
/**
 * Evaluates if a value is nullish.
 *
 * @public
 * @param None   T | (value: T) => T: Fallback function.
 * @param Some   T | (value: T) => T: Function to be evaluated.
 * @returns Right if truthy else, returns left.
 */
function optionPromise(None, Some) {
    var _this = this;
    return function (value) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var some, _a, _b, _c;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (!(typeof Some === 'function')) return [3 /*break*/, 2];
                    return [4 /*yield*/, Some(value)];
                case 1:
                    _a = _d.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, Some];
                case 3:
                    _a = _d.sent();
                    _d.label = 4;
                case 4:
                    some = _a;
                    if (!(some !== null && some !== void 0)) return [3 /*break*/, 5];
                    _b = some;
                    return [3 /*break*/, 10];
                case 5:
                    if (!(typeof None === 'function')) return [3 /*break*/, 7];
                    return [4 /*yield*/, None(value)];
                case 6:
                    _c = _d.sent();
                    return [3 /*break*/, 9];
                case 7: return [4 /*yield*/, None];
                case 8:
                    _c = _d.sent();
                    _d.label = 9;
                case 9:
                    _b = (_c);
                    _d.label = 10;
                case 10: return [2 /*return*/, (_b)];
            }
        });
    }); };
}
exports.optionPromise = optionPromise;
//# sourceMappingURL=optionPromise.js.map