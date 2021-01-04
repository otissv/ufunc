"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maybeArray = exports.maybeObject = exports.maybeBoolean = exports.maybeNumber = exports.maybeString = exports.maybeType = void 0;
/**
 * Checks if value is of the correct type.
 *
 * @param   None - Fallback value if value is not designed.
 * @returns Returns a function that takes a value as an argument, which returns the value if value is correct type, else returns None
 *
 * @usage
 * import \{ maybeType \} from "ufunc/maybeType"
 *
 * @example
 * ```
 * maybeType("", "string")("hello") // "hello"
 * maybeType("", "string")(null) // ""
 * ```
 */
function maybeType(None, type) {
    return function (value) { return (typeof value === type ? value : None); };
}
exports.maybeType = maybeType;
/**
 * Checks if value is of type string.
 *
 * @param   value - Value to be evaluated.
 * @returns Returns a function which takes a value as an argument. Returns value if value is a string, else return an empty string.
 *
 * @usage
 * import \{ maybeString \} from "ufunc/maybeString"
 *
 * @example
 */
function maybeString(value) {
    return maybeType('', 'string')(value);
}
exports.maybeString = maybeString;
/**
 * Checks if value is of type number.
 *
 * @param   value - Value to be evaluated.
 * @returns Returns a function that takes a value as an argument, which returns the value if the value is a number, else returns 0.
 *
 * @usage
 * import \{ maybeNumber \} from "ufunc/maybeNumber"
 *
 * @example*/
function maybeNumber(value) {
    return maybeType(0, 'number')(value);
}
exports.maybeNumber = maybeNumber;
/**
 * Checks if value is ot type boolean
 *
 * @param None boolean: Value to be evaluated.
 * @returns function that takes a value as an argument, which returns the value if the value is a boolean, else return false.
 *
 * @usage
 * import \{ maybeBoolean \} from "ufunc/maybeBoolean"
 *
 * @example
 *
 */
function maybeBoolean(value) {
    return maybeType(false, 'boolean')(value);
}
exports.maybeBoolean = maybeBoolean;
/**
 * Checks if value is ot type boolean
 *
 * @param None boolean: Value to be evaluated.
 * @returns function that takes a value as an argument, which returns the value if the value is a boolean, else return false.
 *
 * @usage
 * import \{ maybeBoolean \} from "ufunc/maybeBoolean"
 *
 * @example
 *
 */
function maybeObject(value) {
    return maybeType({}, 'object')(value);
}
exports.maybeObject = maybeObject;
/**
 * Checks if value is an array
 *
 * @param None T[]: Value to be evaluated.
 * @returns Returns a function that takes a value as an argument, which returns value if the value is an array, else returns an empty array
 *
 * @usage
 * import \{ maybeArray \} from "ufunc/maybeArray"
 *
 * @example
 *
 */
function maybeArray(value) {
    return Array.isArray(value) ? value : [];
}
exports.maybeArray = maybeArray;
//# sourceMappingURL=maybeType.js.map