"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.argVales = void 0;
/**
 * Returns it own arguments
 * @param args T[]: function arguments
 * @returns function arguments in an array
 */
function argVales() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
exports.argVales = argVales;
//# sourceMappingURL=argValues.js.map