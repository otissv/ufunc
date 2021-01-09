/* eslint-disable functional/no-expression-statement */
/**
 * Freezes an object and all its properties.
 *
 * @param o | Record<string | number, any>:  Object to be frozen.
 * @returns   Returns frozen object.
 *
 *  @usage
 * import \{ deepFreeze \} from "ufunc/deepFreeze"
 *
 * @example
 */
export const deepFreeze = <Value extends Record<string | number, any>>(
  obj: Value,
): Value => {
  Object.freeze(obj);

  Object.getOwnPropertyNames(obj).forEach((prop: string) => {
    if (
      Object.prototype.hasOwnProperty.call(obj, prop) &&
      obj[prop] !== null &&
      (typeof obj[prop] === 'object' || typeof obj[prop] === 'function') &&
      !Object.isFrozen(obj[prop])
      // eslint-disable-next-line functional/no-conditional-statement
    ) {
      deepFreeze(obj[prop]);
    }
  });

  return obj;
};
