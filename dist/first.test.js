"use strict";
/* eslint-plugin-disable functional */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var first_1 = require("./first");
describe('first', function () {
    it('should return first item in a list', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            expect(first_1.first([1, 2, 3, 4])).toEqual(1);
            return [2 /*return*/];
        });
    }); });
    it('should return empty array if list is empty', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            expect(first_1.first([])).toEqual(undefined);
            expect(first_1.first()).toEqual(undefined);
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=first.test.js.map