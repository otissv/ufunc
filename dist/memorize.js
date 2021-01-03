"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memorize = void 0;
var either_1 = require("./either");
/**
 * Memorizes (caches) a functions arguments and return value.
 * if the function is called a second time with the same argument a cached value will be returned and the function will not be reevaluated.
 * @returns   a function that takes a function to be memorize
 */
function memorize() {
    return function memo(fn) {
        // eslint-disable-next-line functional/prefer-readonly-type
        var cache = new Map();
        return function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var fnSignature = fn.toString();
            var stringifyArgs = JSON.stringify(args);
            var cachedFn = (_a = cache.get(fnSignature)) !== null && _a !== void 0 ? _a : {
                args: '',
                value: '',
            };
            return either_1.either(function () {
                var value = fn.apply(void 0, args);
                // eslint-disable-next-line functional/no-expression-statement
                cache.set(stringifyArgs, value);
                return value;
            }, cachedFn.value)(cachedFn.args !== stringifyArgs);
        };
    };
}
exports.memorize = memorize;
//# sourceMappingURL=memorize.js.map