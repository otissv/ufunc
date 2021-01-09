/**
 * Subtracts one number from another.
 *
 * @param a   - First number.
 * @param b   - Second number.
 *
 * @return Returns the result of a minus b.
 * @usage
 * import \{ subtract \} from "ufunc/subtract"
 *
 * @example
 * ```
 * subtract(5)(2) // 3
 * ```
 */
export const subtract = (a: number) => (b: number): number => a - b;
