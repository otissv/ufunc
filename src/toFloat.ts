/**
 * Converts a value to a float.
 *
 * @param none  - Fallback value. Default is 0.
 * @param value - Value to be converted.
 *
 * @returns Returns a number if value can be converted else returns 0.
 *
 * @usage
 * `import \{ toFloat \} from "ufunc/toFloat "`
 *
 * @example
 * ```
 * toFloat()(true)               // 1
 * toFloat()(false)              // 0
 * toFloat()('0')                // 0
 * toFloat()('10')               // 10
 * toFloat()(10)).toBe(10)       // 10
 * toFloat('not a number')(null) // 'not a number'
 * ```
 */
export const toFloat = <None>(none: None | number = 0) => (
  value: unknown,
): number | None => {
  switch (typeof value) {
    case 'boolean':
      return value ? 1 : 0;
    case 'number':
      return value;
    case 'string': {
      const number = parseFloat(value);
      return Number.isNaN(number) ? none : number;
    }
    default:
      return none;
  }
};
