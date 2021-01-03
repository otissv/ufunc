"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trampoline = void 0;
function trampoline(f) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // eslint-disable-next-line functional/no-let
        var result = f.apply(void 0, args);
        // eslint-disable-next-line functional/no-loop-statement
        while (typeof result === 'function') {
            // eslint-disable-next-line functional/no-expression-statement
            result = result();
        }
        return result;
    };
}
exports.trampoline = trampoline;
//# sourceMappingURL=trampoline.js.map