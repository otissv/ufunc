"use strict";
/* eslint-plugin-disable functional */
Object.defineProperty(exports, "__esModule", { value: true });
var compose_1 = require("./compose");
describe('compose', function () {
    it('should compose function', function () {
        var toUpper = function (string) { return string.toUpperCase(); };
        var toSnake = function (string) { return string.replace(' ', '_'); };
        var who = function (name) { return function (string) {
            return string.replace(/World/i, name);
        }; };
        expect(compose_1.compose(toUpper)('Hello, World!')).toBe('HELLO, WORLD!');
        expect(compose_1.compose(toUpper, toSnake)('Hello World!')).toBe('HELLO_WORLD!');
        expect(compose_1.compose(toUpper, toSnake, who('Universe'))('Hello World!')).toBe('HELLO_UNIVERSE!');
    });
    it('should return value if no functions', function () {
        expect(compose_1.compose()('Hello, World!')).toBe('Hello, World!');
    });
});
//# sourceMappingURL=compose.test.js.map