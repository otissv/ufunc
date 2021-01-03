"use strict";
/* eslint-plugin-disable functional */
Object.defineProperty(exports, "__esModule", { value: true });
var isValidString_1 = require("./isValidString");
describe('isValidString', function () {
    it('should return true if is string and not empty', function () {
        expect(isValidString_1.isValidString('hello')).toBe(true);
    });
    it('should return false if NODE_ENV environment variable is not test', function () {
        expect(isValidString_1.isValidString('')).toBe(false);
        expect(isValidString_1.isValidString(true)).toBe(false);
        expect(isValidString_1.isValidString(undefined)).toBe(false);
        expect(isValidString_1.isValidString(null)).toBe(false);
        expect(isValidString_1.isValidString([])).toBe(false);
        expect(isValidString_1.isValidString({})).toBe(false);
        expect(isValidString_1.isValidString(0)).toBe(false);
        expect(isValidString_1.isValidString([1])).toBe(false);
        expect(isValidString_1.isValidString({ a: 1 })).toBe(false);
        expect(isValidString_1.isValidString(1)).toBe(false);
    });
});
//# sourceMappingURL=isValidString.test.js.map