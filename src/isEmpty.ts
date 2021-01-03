/**
 * Checks if a value empty.
 * @param   value - any value
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
export const isEmpty = <T>(value: T): boolean => {
  const type: string = typeof value;

  switch (true) {
    case value == null:
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
