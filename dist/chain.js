"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chain = void 0;
var tslib_1 = require("tslib");
/**
 * Lazy evaluates a sequence of functions.
 *
 * @param   ...fns - Function to be reduced
 * @returns Returns a transformed value, where the previous functions output becomes the input of the next function.
 *
 * @method chain
 * @param  fn - Function to mapped on a value
 * @returns Returns a new chain.
 *
 *
 * @method exec
 * @param initialValue -  Initial value to passed to the reducer.
 *
 * @usage
 * `import \{ chain \} from "ufunc/chain"`
 *
 * @example
 * ```
 * chain(toUpperCase).chain(toSnake).exec('hello world') // HELLO_WORLD
 * ```
 */
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
        chain: function (fn) {
            // eslint-disable-next-line functional/no-expression-statement
            return chain.apply(void 0, tslib_1.__spreadArrays(fns, [fn]));
        },
        exec: function (initialValue) {
            return fns.reduce(function (previousValue, f) { return f(previousValue); }, initialValue);
        },
    };
}
exports.chain = chain;
//# sourceMappingURL=chain.js.map