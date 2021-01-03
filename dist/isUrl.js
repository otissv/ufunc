"use strict";
/**
 * Checks if a value is a valid URL.
 *
 * @param   value - Value to be evaluated.
 * @returns Returns true if is value is a valid URL, else returns false.
 *
 * @usage
 * import \{ isUrl \} from "ufunc/isUrl"
 *
 * @example
 * isValidUrl('http://foo.com/blah_blah') // true
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUrl = void 0;
function isUrl(string, includeLocal) {
    if (includeLocal === void 0) { includeLocal = false; }
    var protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/;
    var localhostDomainRE = / (0{0,4}:{1,2}){1,7}(0{0,3}1)|^localhost(:[0-9]+)?|^0(?:\.[0-9]+){0,2}\.[0-9]+$|^1(?:\.[0-9]+){0,2}\.[0-9]+$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^192(?:\.[0-9]+){0,2}\.[0-9]+$|^224(?:\.[0-9]+){0,2}\.[0-9]+$|^255(?:\.[0-9]+){0,2}\.[0-9]+$|^168(?:\.[0-9]+){0,2}\.[0-9]+$|^10(?:\.[0-9]+){0,2}\.[0-9]+$/;
    var nonLocalhostDomainRE = /^[^\s.]+\.\S{2,}$/;
    if (typeof string !== 'string') {
        return false;
    }
    else {
        var match = string.match(protocolAndDomainRE);
        var everythingAfterProtocol = match === null || match === void 0 ? void 0 : match[1];
        var isInvalid = !match ||
            !everythingAfterProtocol ||
            everythingAfterProtocol[0] === '-' ||
            /-\./.test(everythingAfterProtocol) ||
            /--/.test(everythingAfterProtocol) ||
            /^-/.test(everythingAfterProtocol) ||
            /\.\/$/.test(everythingAfterProtocol) ||
            // !ipRE.test(everythingAfterProtocol as string) ||
            (!includeLocal &&
                localhostDomainRE.test(everythingAfterProtocol));
        return isInvalid
            ? false
            : nonLocalhostDomainRE.test(everythingAfterProtocol);
    }
}
exports.isUrl = isUrl;
//# sourceMappingURL=isUrl.js.map