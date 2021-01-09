/**
 * Checks if value is of a specific length.
 *
 * @param length  - Number to check value's length against.
 * @param value   - Value to be evaluated.
 *
 * @returns Returns a function that takes a value as an argument which returns true if value is the same as length, else returns false.
 *
 * @usage
 * `import \{ isLength \} from "ufunc/isLength"`
 *s
 * @example
 */
export const isLength = (length: number) => <Value>(value: Value): boolean =>
  value != null && (value as any).length === length;
