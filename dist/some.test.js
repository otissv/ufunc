"use strict";
/* eslint-plugin-disable functional */
Object.defineProperty(exports, "__esModule", { value: true });
var someTrue_1 = require("./someTrue");
describe('everyTrue', function () {
    it('should return true if one or more items are truthy', function () {
        expect(someTrue_1.someTrue([false, true])).toBe(true);
        expect(someTrue_1.someTrue([false, 'a', 1, true])).toBe(true);
    });
    it('should return false if any items are falsy', function () {
        expect(someTrue_1.someTrue([null, 0, false])).toBe(false);
        expect(someTrue_1.someTrue([])).toBe(false);
    });
});
//# sourceMappingURL=some.test.js.map