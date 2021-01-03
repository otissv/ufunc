"use strict";
/* eslint-plugin-disable functional */
Object.defineProperty(exports, "__esModule", { value: true });
var identity_1 = require("./identity");
describe('identity', function () {
    it('should return functions argument', function () {
        expect(identity_1.identity('Hello, World!')).toBe('Hello, World!');
    });
});
//# sourceMappingURL=identity.test.js.map