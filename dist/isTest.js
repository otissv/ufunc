"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTest = void 0;
/**
 * Evaluates if the NODE_ENV environment variable is set to test.
 *
 * @returns Returns true if NODE_ENV environment variable is test.
 *
 * @usage
 * `import \{ isTest \} from "ufunc/isTest"`
 *
 * @example
 * ```
 * isTest() // true | false
 * ```
 */
function isTest() {
    return process.env.NODE_ENV === 'test';
}
exports.isTest = isTest;
//# sourceMappingURL=isTest.js.map