"use strict";
/* eslint-plugin-disable functional */
Object.defineProperty(exports, "__esModule", { value: true });
var chain_1 = require("./chain");
describe('argNames', function () {
    it('should return new chain', function () {
        var toUpperCase = function (str) { return str.toUpperCase(); };
        var toSnake = function (str) { return str.replace(' ', '_'); };
        var actual = chain_1.chain(toUpperCase).chain(toSnake);
        expect(Object.keys(actual)).toEqual(['chain', 'exec']);
    });
    it('should return new chain', function () {
        var toUpperCase = function (str) { return str.toUpperCase(); };
        var toSnake = function (str) { return str.replace(' ', '_'); };
        expect(chain_1.chain(toUpperCase).chain(toSnake).exec('hello world')).toBe('HELLO_WORLD');
    });
});
//# sourceMappingURL=chain.test.js.map