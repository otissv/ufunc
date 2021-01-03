"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = void 0;
/**
 * Evaluates functions in a left to right sequence. Where the return value of the previous function become the argument of the next function in the sequence
 * @param fns  arguments: Functions to be evaluated.
 * @returns a function that takes a single argument that will be mapped over.
 */
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (value) {
        return fns.length === 0 ? value : pipe.apply(void 0, fns.slice(1, fns.length))(fns[0](value));
    };
}
exports.pipe = pipe;
//# sourceMappingURL=pipe.js.map