"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSnakeCase = exports.toKebabCase = exports.joinCase = exports.toPascalCase = exports.toLowerFirst = exports.toUpperFirst = exports.toTitle = exports.toCamel = exports.toLower = exports.toUpper = exports.firstChar = exports.dropFirstChar = exports.dropChars = exports.charAt = void 0;
/**
 * @param n  number representing an index in a string
 * @returns a function that take a string as an argument and returns the character in the string at 'n'.
 */
var charAt = function (n) { return function (str) { return str.charAt(n); }; };
exports.charAt = charAt;
/**
 * @param n  number representing an index in a string
 * @returns a function that take a string as an argument and returns a substr starting from 'n'.
 */
var dropChars = function (n) { return function (str) { return str.substr(n); }; };
exports.dropChars = dropChars;
/**
 * @param n  number representing an index in a string
 * @returns a function that take a string as an argument and returns a new string without the first character.
 */
exports.dropFirstChar = exports.dropChars(1);
/**
 * @param str   string
 * @returns first character of a string.
 */
var firstChar = function (str) { return str.charAt(0); };
exports.firstChar = firstChar;
/**
 * @param str   string
 * @returns string all in uppercase
 */
var toUpper = function (str) { return str.toUpperCase(); };
exports.toUpper = toUpper;
/**
 * @param str   string
 * @returns string all in lowercase
 */
var toLower = function (str) { return str.toLowerCase(); };
exports.toLower = toLower;
/**
 * @param str   string
 * @returns string camelcase
 */
var toCamel = function (str) {
    return str[0].toLowerCase() +
        str
            .substr(1, str.length)
            .replace(/[^a-zA-Z0-9]+(.)/g, function (_m, chr) { return chr.toUpperCase(); });
};
exports.toCamel = toCamel;
/**
 * @param str   string
 * @returns string with all words in capitalized.
 */
var toTitle = function (str) {
    return str.replace(/(^|\s)\S/g, exports.toUpper);
};
exports.toTitle = toTitle;
/**
 * @param str   string
 * @returns string with the first character capitalized.
 */
var toUpperFirst = function (str) { return str.replace(/^./, exports.toUpper); };
exports.toUpperFirst = toUpperFirst;
/**
 * @param str   string
 * @returns string with the first character lowercased.
 */
var toLowerFirst = function (str) { return str.replace(/^./, exports.toLower); };
exports.toLowerFirst = toLowerFirst;
/**
 * @param str   string
 * @returns string in pascal case.
 */
var toPascalCase = function (str) {
    return str.replace(/\w\S*/g, function (m) { return exports.toUpper(exports.firstChar(m)) + exports.toLower(exports.dropFirstChar(m)); });
};
exports.toPascalCase = toPascalCase;
/**
 * @param joiner   string to use in join function.
 * @returns function that takes a string as an argument and joins the string using the joiner
 */
var joinCase = function (joiner) { return function (str) {
    var result = str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);
    return result ? result.map(exports.toLower).join(joiner) : str;
}; };
exports.joinCase = joinCase;
/**
 * @param str   string
 * @returns string in kebab case.
 */
exports.toKebabCase = exports.joinCase('-');
/**
 * @param str   string
 * @returns string in snake case.
 */
exports.toSnakeCase = exports.joinCase('_');
//# sourceMappingURL=textTransform.js.map