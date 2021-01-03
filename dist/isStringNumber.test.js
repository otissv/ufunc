"use strict";
/* eslint-plugin-disable functional */
Object.defineProperty(exports, "__esModule", { value: true });
var isStringNumber_1 = require("./isStringNumber");
describe('isStringNumber', function () {
    it('should return true if value is of string can be converted to a number', function () {
        expect(isStringNumber_1.isStringNumber('1')).toBe(true);
        expect(isStringNumber_1.isStringNumber('0')).toBe(true);
    });
    it('should return false if value is not of type string', function () {
        expect(isStringNumber_1.isStringNumber('')).toBe(false);
        expect(isStringNumber_1.isStringNumber('hello')).toBe(false);
        expect(isStringNumber_1.isStringNumber(1)).toBe(false);
    });
});
//# sourceMappingURL=isStringNumber.test.js.map