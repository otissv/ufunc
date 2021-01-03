"use strict";
/* eslint-plugin-disable functional */
Object.defineProperty(exports, "__esModule", { value: true });
var isProduction_1 = require("./isProduction");
describe('identity', function () {
    afterEach(function () {
        process.env.NODE_ENV = 'test';
    });
    it('should return true if NODE_ENV environment variable is production', function () {
        process.env.NODE_ENV = 'production';
        expect(isProduction_1.isProduction()).toBe(true);
    });
    it('should return true if NODE_ENV environment variable is prod', function () {
        process.env.NODE_ENV = 'prod';
        expect(isProduction_1.isProduction()).toBe(true);
    });
    it('should return false if NODE_ENV environment variable is node production', function () {
        process.env.NODE_ENV = 'test';
        expect(isProduction_1.isProduction()).toBe(false);
    });
});
//# sourceMappingURL=isProduction.test.js.map