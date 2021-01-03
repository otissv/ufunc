"use strict";
/* eslint-plugin-disable functional */
Object.defineProperty(exports, "__esModule", { value: true });
var argNames_1 = require("./argNames");
describe('argNames', function () {
    it('should return functions argument', function () {
        function f1(a) {
            return a;
        }
        expect(argNames_1.argNames(f1)).toEqual(['a']);
    });
    it('should return functions arguments', function () {
        function f1(a, b) {
            return a + b;
        }
        expect(argNames_1.argNames(f1)).toEqual(['a', 'b']);
    });
    it('should return an arrow functions argument', function () {
        var f1 = function (a) { return a; };
        expect(argNames_1.argNames(f1)).toEqual(['a']);
        expect(argNames_1.argNames(function (a) { return a; })).toEqual(['a']);
    });
    it('should return an arrow functions argument', function () {
        var f1 = function (a, b) { return a + b; };
        expect(argNames_1.argNames(f1)).toEqual(['a', 'b']);
        expect(argNames_1.argNames(function (a, b) { return a + b; })).toEqual(['a', 'b']);
    });
    it('should return an empty array if function has no arguments', function () {
        var f1 = function () { return undefined; };
        expect(argNames_1.argNames(f1)).toEqual([]);
        expect(argNames_1.argNames(function () { return undefined; })).toEqual([]);
    });
    it('should return an empty array if no function supplied', function () {
        expect(argNames_1.argNames()).toEqual([]);
    });
});
//# sourceMappingURL=argNames.test.js.map