"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clean = void 0;
/**
 * Removes all falsy values
 *
 * @param   list - List of items to be filtered
 * @pram    options.exclude - A falsy value or a list of falsy values to be exclude from the clean
 * @pram    options.include - A single value or
 * @returns Returns a function that take an array which to be cleaned. The functions inturn returns an array with the cleaned items removed.
 *
 * @usage
 * `import \{ clean \} from "ufunc/clean"`
 *
 * @example
 * ```
 * clean()(0, false, null, undefined, '', 0x0, -0, 0.0])
 * // []
 * ```
 */
function clean(options) {
    if (options === void 0) { options = {}; }
    return function (list) {
        return list.filter(function (e) {
            switch (true) {
                case Array.isArray(options.exclude):
                    return options.exclude.includes(e) ? true : Boolean(e);
                case typeof options.exclude !== 'undefined':
                    return options.exclude === e;
                case Array.isArray(options.include):
                    return options.include.includes(e) ? false : Boolean(e);
                case typeof options.include !== 'undefined':
                    return options.include === e ? false : Boolean(e);
                default:
                    return Boolean(e);
            }
        });
    };
}
exports.clean = clean;
//# sourceMappingURL=clean.js.map