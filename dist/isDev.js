"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDev = void 0;
/**
 * Evaluates if the NODE_ENV environment variable is set to development.
 *
 * @returns Returns true if NODE_ENV environment variable is development.
 *
 * @usage
 * `import \{ isDev \} from "ufunc/isDev"`
 *
 * @example
 * ```
 * isDev() // true | false
 * ```
 */
function isDev() {
    return (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'development');
}
exports.isDev = isDev;
//# sourceMappingURL=isDev.js.map