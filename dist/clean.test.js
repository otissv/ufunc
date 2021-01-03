"use strict";
/* eslint-plugin-disable functional */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var clean_1 = require("./clean");
var falsyValues = [0, false, null, undefined, '', 0x0, -0, 0.0];
describe('clean', function () {
    it('should remove falsy values', function () {
        expect(clean_1.clean()(falsyValues)).toEqual([]);
        expect(clean_1.clean()(tslib_1.__spreadArrays(['a'], falsyValues))).toEqual(['a']);
    });
    it('should remove falsy values expect exclude options', function () {
        expect(clean_1.clean({ exclude: [0] })(falsyValues)).toEqual([0, 0x0, -0, 0.0]);
        expect(clean_1.clean({ exclude: 0 })(falsyValues)).toEqual([0, 0x0, -0, 0.0]);
    });
    it('should remove falsy values including exclude options', function () {
        expect(clean_1.clean({
            include: ['0'],
        })(tslib_1.__spreadArrays(['0'], falsyValues))).toEqual([]);
        expect(clean_1.clean({
            include: 'a',
        })(tslib_1.__spreadArrays(['a'], falsyValues))).toEqual([]);
    });
});
//# sourceMappingURL=clean.test.js.map