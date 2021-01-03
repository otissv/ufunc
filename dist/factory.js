"use strict";
//TODO: Make lazy
Object.defineProperty(exports, "__esModule", { value: true });
exports.factory = void 0;
function factory(value) {
    return {
        flatMap: function (f) { return f(value); },
        fold: function () { return value; },
        log: function () { return factory(value); },
        map: function (f) { return factory(f(value)); },
    };
}
exports.factory = factory;
//# sourceMappingURL=factory.js.map