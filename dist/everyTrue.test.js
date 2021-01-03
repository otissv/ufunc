"use strict";
/* eslint-plugin-disable functional */
Object.defineProperty(exports, "__esModule", { value: true });
var everyTrue_1 = require("./everyTrue");
describe('everyTrue', function () {
    it('should return true if all items are truthy', function () {
        expect(everyTrue_1.everyTrue(['a', 1, true])).toBe(true);
    });
    it('should return false if any items are falsy', function () {
        expect(everyTrue_1.everyTrue(['a', 1, true, false])).toBe(false);
    });
});
//# sourceMappingURL=everyTrue.test.js.map