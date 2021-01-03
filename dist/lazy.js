"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chain = void 0;
var tslib_1 = require("tslib");
function chain() {
    // eslint-disable-next-line functional/prefer-readonly-type
    var fns = [];
    for (
    // eslint-disable-next-line functional/prefer-readonly-type
    var _i = 0; 
    // eslint-disable-next-line functional/prefer-readonly-type
    _i < arguments.length; 
    // eslint-disable-next-line functional/prefer-readonly-type
    _i++) {
        // eslint-disable-next-line functional/prefer-readonly-type
        fns[_i] = arguments[_i];
    }
    return {
        map: function (fn) {
            // eslint-disable-next-line functional/no-expression-statement
            return chain.apply(void 0, tslib_1.__spreadArrays(fns, [fn]));
        },
        exec: function (value) {
            return fns.reduceRight(function (previousValue, f) { return f(previousValue); }, value);
        },
    };
}
exports.chain = chain;
// const result = chain<string>((s: string) => {
//   // eslint-disable-next-line functional/no-expression-statement
//   s.toUpperCase();
// }).exec<string>('otis virginie');
//# sourceMappingURL=lazy.js.map