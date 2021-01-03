"use strict";
/* eslint-plugin-disable functional */
Object.defineProperty(exports, "__esModule", { value: true });
var isLength_1 = require("./isLength");
describe('isError', function () {
    it('should return true if value is an instance of Error', function () {
        expect(isLength_1.isLength(0)([])).toBe(true);
        expect(isLength_1.isLength(1)([1])).toBe(true);
        expect(isLength_1.isLength(0)('')).toBe(true);
        expect(isLength_1.isLength(1)('1')).toBe(true);
    });
    it('should return false if value is not an instance of Error', function () {
        expect(isLength_1.isLength(1)([])).toBe(false);
        expect(isLength_1.isLength(0)([1])).toBe(false);
        expect(isLength_1.isLength(1)('')).toBe(false);
        expect(isLength_1.isLength(0)('1')).toBe(false);
    });
});
//# sourceMappingURL=isLength.test.js.map