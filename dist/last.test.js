"use strict";
/* eslint-plugin-disable functional */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var last_1 = require("./last");
describe('first', function () {
    it('should return first item in a list', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            expect(last_1.last([1, 2, 3, 4])).toEqual(4);
            return [2 /*return*/];
        });
    }); });
    it('should return empty array if list is empty', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            expect(last_1.last([])).toEqual(undefined);
            expect(last_1.last()).toEqual(undefined);
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=last.test.js.map