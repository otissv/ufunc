"use strict";
/* eslint-plugin-disable functional */
Object.defineProperty(exports, "__esModule", { value: true });
var maybeType_1 = require("./maybeType");
describe('maybeType', function () {
    it('should return value if value is the correct type', function () {
        expect(maybeType_1.maybeType(null, 'string')('hello')).toBe('hello');
        expect(maybeType_1.maybeType(null, 'string')('')).toBe('');
        expect(maybeType_1.maybeType(null, 'number')(1)).toBe(1);
        expect(maybeType_1.maybeType(null, 'number')(0)).toBe(0);
        expect(maybeType_1.maybeType(null, 'boolean')(true)).toBe(true);
        expect(maybeType_1.maybeType(null, 'boolean')(false)).toBe(false);
        expect(maybeType_1.maybeType(null, 'object')({})).toEqual({});
        expect(maybeType_1.maybeType(null, 'object')({ a: 1 })).toEqual({ a: 1 });
    });
    it('should return value none if value is the incorrect type', function () {
        expect(maybeType_1.maybeType(null, 'string')(true)).toBe(null);
        expect(maybeType_1.maybeType(null, 'string')(true)).toBe(null);
        expect(maybeType_1.maybeType(null, 'number')(true)).toBe(null);
        expect(maybeType_1.maybeType(null, 'number')(true)).toBe(null);
        expect(maybeType_1.maybeType(null, 'boolean')(0)).toBe(null);
        expect(maybeType_1.maybeType(null, 'boolean')(0)).toBe(null);
        expect(maybeType_1.maybeType(null, 'object')(true)).toEqual(null);
        expect(maybeType_1.maybeType(null, 'object')(true)).toEqual(null);
    });
});
describe('maybeString', function () {
    it('should return value if value is of type string', function () {
        expect(maybeType_1.maybeString('hello')).toBe('hello');
        expect(maybeType_1.maybeString('')).toBe('');
    });
});
//# sourceMappingURL=maybeType.test.js.map