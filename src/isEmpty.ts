import { isNullOrUndefined } from './isNullOrUndefined';

/**
 * Checks if a value empty.
 *
 * @param   value - The value to be evaluated.
 *
 * @returns Returns true if value is empty, else returns false.
 *
 * @usage
 * `import \{ isEmpty \} from "ufunc/isEmpty"`
 *
 * @example
 * ```
 * isEmpty(null) // true
 * isEmpty(undefined) // true
 * isEmpty([]) // true
 * isEmpty([undefined]) // true
 * isEmpty({}) // true
 * isEmpty('') // true
 *```
 */
export const isEmpty = <Value>(value: Value): boolean => {
  const type: string = typeof value;

  switch (true) {
    case isNullOrUndefined(value):
    case (value as any).length === 0:
    case Array.isArray(value) &&
      value.filter(<V>(v: V) => typeof v === 'undefined').length ===
        value.length:
      return true;

    case type == 'boolean':
    case type == 'number':
      return false;

    case type == 'object':
      return !Object.keys(value).length;

    default:
      return !value;
  }
};
