"use strict";
/* eslint-plugin-disable functional */
Object.defineProperty(exports, "__esModule", { value: true });
var isEmpty_1 = require("./isEmpty");
describe('isEmpty', function () {
    afterEach(function () {
        process.env.NODE_ENV = 'test';
    });
    it('should return true value is empty', function () {
        process.env.NODE_ENV = 'development';
        expect(isEmpty_1.isEmpty(null)).toBe(true);
        expect(isEmpty_1.isEmpty(undefined)).toBe(true);
        expect(isEmpty_1.isEmpty([])).toBe(true);
        expect(isEmpty_1.isEmpty([undefined])).toBe(true);
        expect(isEmpty_1.isEmpty({})).toBe(true);
        expect(isEmpty_1.isEmpty('')).toBe(true);
    });
    it('should return false value is empty', function () {
        process.env.NODE_ENV = 'development';
        expect(isEmpty_1.isEmpty(true)).toBe(false);
        expect(isEmpty_1.isEmpty(false)).toBe(false);
        expect(isEmpty_1.isEmpty([0])).toBe(false);
        expect(isEmpty_1.isEmpty({ a: 1 })).toBe(false);
        expect(isEmpty_1.isEmpty(0)).toBe(false);
        expect(isEmpty_1.isEmpty(0)).toBe(false);
        expect(isEmpty_1.isEmpty('hello')).toBe(false);
    });
});
//# sourceMappingURL=isEmpty.test.js.map