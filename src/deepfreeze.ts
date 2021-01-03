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
export const deepFreeze = <T extends Record<string | number, any>>(o: T): T => {
  Object.freeze(o);

  Object.getOwnPropertyNames(o).forEach((prop: string) => {
    if (
      Object.prototype.hasOwnProperty.call(o, prop) &&
      o[prop] !== null &&
      (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
      !Object.isFrozen(o[prop])
    ) {
      deepFreeze(o[prop]);
    }
  });

  return o;
};
