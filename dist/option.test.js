"use strict";
/* eslint-plugin-disable functional */
Object.defineProperty(exports, "__esModule", { value: true });
var option_1 = require("./option");
describe('option', function () {
    it('should return Some if true', function () {
        var None = 'none';
        var Some = 'some';
        expect(option_1.option(None, Some)).toBe(Some);
        expect(option_1.option(function () { return None; }, function () { return Some; })).toBe(Some);
        expect(option_1.option(function () { return None; }, Some)).toBe(Some);
        expect(option_1.option(None, function () { return Some; })).toBe(Some);
    });
    it('should return None if false', function () {
        var None = 'none';
        var Some = null;
        expect(option_1.option(None, Some)).toBe(None);
        expect(option_1.option(function () { return None; }, function () { return Some; })).toBe(None);
        expect(option_1.option(function () { return None; }, Some)).toBe(None);
        expect(option_1.option(None, function () { return Some; })).toBe(None);
    });
});
//# sourceMappingURL=option.test.js.map