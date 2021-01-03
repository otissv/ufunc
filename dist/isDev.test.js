"use strict";
/* eslint-plugin-disable functional */
Object.defineProperty(exports, "__esModule", { value: true });
var isDev_1 = require("./isDev");
describe('isDev', function () {
    afterEach(function () {
        process.env.NODE_ENV = 'test';
    });
    it('should return true if NODE_ENV environment variable is development', function () {
        process.env.NODE_ENV = 'development';
        expect(isDev_1.isDev()).toBe(true);
    });
    it('should return true if NODE_ENV environment variable is dev', function () {
        process.env.NODE_ENV = 'dev';
        expect(isDev_1.isDev()).toBe(true);
    });
    it('should return false if NODE_ENV environment variable is not development', function () {
        process.env.NODE_ENV = 'test';
        expect(isDev_1.isDev()).toBe(false);
    });
});
//# sourceMappingURL=isDev.test.js.map