"use strict";
/* eslint-plugin-disable functional */
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_1 = require("./isFunction");
describe('isError', function () {
    it('should return true if value is an instance of Error', function () {
        expect(isFunction_1.isFunction(function () {
            return undefined;
        })).toBe(true);
        expect(isFunction_1.isFunction(function () { return undefined; })).toBe(true);
    });
    it('should return false if value is not an instance of Error', function () {
        expect(isFunction_1.isFunction('error')).toBe(false);
    });
});
//# sourceMappingURL=isFunction.test.js.map