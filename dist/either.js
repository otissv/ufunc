"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.either = void 0;
/**
 * Evaluates if left and right arguments based on condition.
 *
 * @param   None - Fallback function.
 * @param   Some - Function to be evaluated.
 * @returns Return a function that take a boolean condition as an argument. If condition truthy returns Some, else returns None.
 *
 * @usage
 * `import \{ either \} from "ufunc/either"`
 *
 * @example
 * ```
 * either("none", "some")(true) // "some"
 * either(() => "none", () => "some")(true) // "some"
 * either(() => "none", "some")(true) // "some"
 * either("none", () => "some")(true) // "some"
 *
 * either("none", "some")(false) // "none"
 * either(()=> "none", ()=> "some")(false) // "none"
 * either(()=> "none", "some")(false) // "none"
 * either("none", ()=> "some")(false) // "none"
 * ```
 */
function either(none, some) {
    return function (condition) {
        if (condition) {
            return typeof some === 'function' ? some() : some;
        }
        else {
            return typeof none === 'function' ? none() : none;
        }
    };
}
exports.either = either;
//# sourceMappingURL=either.js.map