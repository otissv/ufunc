"use strict";
/* eslint-plugin-disable functional */
Object.defineProperty(exports, "__esModule", { value: true });
var either_1 = require("./either");
describe('either', function () {
    it('should return Some if true', function () {
        var None = 'none';
        var Some = 'some';
        expect(either_1.either(None, Some)(true)).toBe(Some);
        expect(either_1.either(function () { return None; }, function () { return Some; })(true)).toBe(Some);
        expect(either_1.either(function () { return None; }, Some)(true)).toBe(Some);
        expect(either_1.either(None, function () { return Some; })(true)).toBe(Some);
    });
    it('should return None if false', function () {
        var None = 'none';
        var Some = 'some';
        expect(either_1.either(None, Some)(false)).toBe(None);
        expect(either_1.either(function () { return None; }, function () { return Some; })(false)).toBe(None);
        expect(either_1.either(function () { return None; }, Some)(false)).toBe(None);
        expect(either_1.either(None, function () { return Some; })(false)).toBe(None);
    });
});
//# sourceMappingURL=either.test.js.map