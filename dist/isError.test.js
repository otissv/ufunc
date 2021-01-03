"use strict";
/* eslint-plugin-disable functional */
Object.defineProperty(exports, "__esModule", { value: true });
var isError_1 = require("./isError");
describe('isError', function () {
    it('should return true if value is an instance of Error', function () {
        expect(isError_1.isError(new Error())).toBe(true);
    });
    it('should return false if value is not an instance of Error', function () {
        expect(isError_1.isError('error')).toBe(false);
    });
});
//# sourceMappingURL=isError.test.js.map