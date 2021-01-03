"use strict";
/* eslint-plugin-disable functional */
/* eslint-plugin-disable functional */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var eitherPromise_1 = require("./eitherPromise");
describe('eitherPromise', function () {
    it('should return Right if true', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var None, Some, _a, _b, _c, _d;
        return tslib_1.__generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    None = Promise.resolve('none');
                    Some = Promise.resolve('some');
                    _a = expect;
                    return [4 /*yield*/, eitherPromise_1.eitherPromise(None, Some)(true)];
                case 1:
                    _a.apply(void 0, [_e.sent()]).toBe('some');
                    _b = expect;
                    return [4 /*yield*/, eitherPromise_1.eitherPromise(function () { return None; }, function () { return Some; })(true)];
                case 2:
                    _b.apply(void 0, [_e.sent()]).toBe('some');
                    _c = expect;
                    return [4 /*yield*/, eitherPromise_1.eitherPromise(function () { return None; }, Some)(true)];
                case 3:
                    _c.apply(void 0, [_e.sent()]).toBe('some');
                    _d = expect;
                    return [4 /*yield*/, eitherPromise_1.eitherPromise(None, function () { return Some; })(true)];
                case 4:
                    _d.apply(void 0, [_e.sent()]).toBe('some');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should return Right if true', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var None, Some, _a, _b, _c, _d;
        return tslib_1.__generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    None = Promise.resolve('none');
                    Some = Promise.resolve('some');
                    _a = expect;
                    return [4 /*yield*/, eitherPromise_1.eitherPromise(None, Some)(false)];
                case 1:
                    _a.apply(void 0, [_e.sent()]).toBe('none');
                    _b = expect;
                    return [4 /*yield*/, eitherPromise_1.eitherPromise(function () { return None; }, function () { return Some; })(false)];
                case 2:
                    _b.apply(void 0, [_e.sent()]).toBe('none');
                    _c = expect;
                    return [4 /*yield*/, eitherPromise_1.eitherPromise(function () { return None; }, Some)(false)];
                case 3:
                    _c.apply(void 0, [_e.sent()]).toBe('none');
                    _d = expect;
                    return [4 /*yield*/, eitherPromise_1.eitherPromise(None, function () { return Some; })(false)];
                case 4:
                    _d.apply(void 0, [_e.sent()]).toBe('none');
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=eitherPromise.test.js.map