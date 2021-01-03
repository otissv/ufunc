"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = void 0;
/**
 * Evaluates functions in a right to left sequence. Where the return value of the previous function become the argument of the next function in the sequence
 *
 * @param fns - Functions to be evaluated
 * @returns Returns a function that takes a single argument will be mapped over.
 *
 * @usage
 * `import \{ compose \} from "ufunc/compose"`
 *
 * @example
 * ```
 * const toUpper = (string: string) => string.toUpperCase();
 * const toSnake = (string: string) => string.replace(' ', '_');
 *
 * compose(toUpper, toSnake)('Hello World!') // "HELLO_WORLD!"
 * ```
 */
function compose() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (value) {
        return fns.length === 0
            ? value
            : compose.apply(void 0, fns.slice(0, fns.length - 1))(fns[fns.length - 1](value));
    };
}
exports.compose = compose;
//# sourceMappingURL=compose.js.map