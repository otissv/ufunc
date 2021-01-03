"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidUrl = void 0;
/**
 * Checks if string is a valid URL.
 * @param value string: Value to be evaluated.
 * @returns true if is value is a valid URL, else returns false
 *
 * @usage
 * import \{ eitherPromise \} from "ufunc/eitherPromise"
 *
 * @example
 */
var pipe_1 = require("./pipe");
var maybe_1 = require("./maybe");
function isValidUrl(value) {
    function matchUrl(value) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i');
        return !!pattern.test(value);
    }
    return pipe_1.pipe(maybe_1.maybeString, matchUrl)(value);
}
exports.isValidUrl = isValidUrl;
// blippi
//# sourceMappingURL=isValidUrl.js.map