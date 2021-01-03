"use strict";
/* eslint-plugin-disable functional */
Object.defineProperty(exports, "__esModule", { value: true });
var isString_1 = require("./isString");
describe('iString', function () {
    it('should return true if value is of type string', function () {
        expect(isString_1.isString('')).toBe(true);
        expect(isString_1.isString('hello')).toBe(true);
    });
    it('should return false if value is not of type string', function () {
        expect(isString_1.isString(false)).toBe(false);
        expect(isString_1.isString(true)).toBe(false);
        expect(isString_1.isString(1)).toBe(false);
        expect(isString_1.isString(0)).toBe(false);
        expect(isString_1.isString([])).toBe(false);
        expect(isString_1.isString({})).toBe(false);
    });
});
//# sourceMappingURL=isString.test.js.map