"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProduction = void 0;
/**
 * Evaluates if the NODE_ENV environment variable is set to production.
 *
 * @returns Returns true if NODE_ENV environment variable is production.
 *
 * @usage
 * `import \{ isProduction \} from "ufunc/isProduction"`
 *
 * @example
 * ```
 * isProduction() // true | false
 * ```
 */
function isProduction() {
    return (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production');
}
exports.isProduction = isProduction;
//# sourceMappingURL=isProduction.js.map