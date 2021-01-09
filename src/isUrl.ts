/**
 * Checks if a value is a valid URL.
 *
 * @param   value - Value to be evaluated.
 *
 * @returns Returns true if is value is a valid URL, else returns false.
 *
 * @usage
 * import \{ isUrl \} from "ufunc/isUrl"
 *
 * @example
 * isValidUrl('http://foo.com/blah_blah') // true
 */

export const isUrl = <Value>(value: Value, includeLocal = false): boolean => {
  const protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/;
  const localhostDomainRE = / (0{0,4}:{1,2}){1,7}(0{0,3}1)|^localhost(:[0-9]+)?|^0(?:\.[0-9]+){0,2}\.[0-9]+$|^1(?:\.[0-9]+){0,2}\.[0-9]+$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^192(?:\.[0-9]+){0,2}\.[0-9]+$|^224(?:\.[0-9]+){0,2}\.[0-9]+$|^255(?:\.[0-9]+){0,2}\.[0-9]+$|^168(?:\.[0-9]+){0,2}\.[0-9]+$|^10(?:\.[0-9]+){0,2}\.[0-9]+$/;
  const nonLocalhostDomainRE = /^[^\s.]+\.\S{2,}$/;

  if (typeof value !== 'string') {
    return false;
  } else {
    const match = value.match(protocolAndDomainRE);
    const everythingAfterProtocol = match?.[1];

    const isInvalid =
      !match ||
      !everythingAfterProtocol ||
      everythingAfterProtocol[0] === '-' ||
      /-\./.test(everythingAfterProtocol) ||
      /--/.test(everythingAfterProtocol) ||
      /^-/.test(everythingAfterProtocol) ||
      /\.\/$/.test(everythingAfterProtocol) ||
      // !ipRE.test(everythingAfterProtocol as string) ||
      (!includeLocal &&
        localhostDomainRE.test(everythingAfterProtocol as string));

    return isInvalid
      ? false
      : nonLocalhostDomainRE.test(everythingAfterProtocol as string);
  }
};
