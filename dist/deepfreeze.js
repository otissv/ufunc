"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepFreeze = void 0;
/**
 * Freezes an object and all its properties.
 *
 * @param o | Record<string | number, any>:  Object to be frozen.
 * @returns   Returns frozen object.
 *
 *  @usage
 * import \{ deepFreeze \} from "ufunc/deepFreeze"
 *
 * @example
 */
var deepFreeze = function (o) {
    Object.freeze(o);
    Object.getOwnPropertyNames(o).forEach(function (prop) {
        if (Object.prototype.hasOwnProperty.call(o, prop) &&
            o[prop] !== null &&
            (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
            !Object.isFrozen(o[prop])) {
            exports.deepFreeze(o[prop]);
        }
    });
    return o;
};
exports.deepFreeze = deepFreeze;
//# sourceMappingURL=deepfreeze.js.map