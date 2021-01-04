"use strict";
/* eslint-plugin-disable functional */
Object.defineProperty(exports, "__esModule", { value: true });
var maybe_1 = require("./maybe");
describe('maybe', function () {
    it('should return value if value is defined', function () {
        expect(maybe_1.maybe('empty')(true)).toBe(true);
        expect(maybe_1.maybe('empty')(function () { return 'hello'; })).toBe('hello');
        expect(maybe_1.maybe(function () { return 'empty'; })('hello')).toBe('hello');
        expect(maybe_1.maybe(function () { return 'empty'; })(function () { return 'hello'; })).toBe('hello');
    });
    it('should return none if value is undefined', function () {
        expect(maybe_1.maybe('none')(undefined)).toBe('none');
        expect(maybe_1.maybe('none')(function () { return undefined; })).toBe('none');
        expect(maybe_1.maybe(function () { return 'none'; })(undefined)).toBe('none');
        expect(maybe_1.maybe('none')(function () { return undefined; })).toBe('none');
    });
});
//# sourceMappingURL=maybe.test.js.map