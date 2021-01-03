"use strict";
/* eslint-plugin-disable functional */
Object.defineProperty(exports, "__esModule", { value: true });
var isTest_1 = require("./isTest");
describe('isTest', function () {
    afterEach(function () {
        process.env.NODE_ENV = 'dev';
    });
    it('should return true if NODE_ENV environment variable is test', function () {
        process.env.NODE_ENV = 'test';
        expect(isTest_1.isTest()).toBe(true);
    });
    it('should return false if NODE_ENV environment variable is not test', function () {
        process.env.NODE_ENV = 'dev';
        expect(isTest_1.isTest()).toBe(false);
    });
});
//# sourceMappingURL=isTest.test.js.map