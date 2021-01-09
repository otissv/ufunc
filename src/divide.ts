/**
 * Divides one number by another.
 *
 * @param a   - First number.
 * @param b   - Second number.
 *
 * @return Returns the result of a divided by b.
 * @usage
 * import \{ divide \} from "ufunc/divide"
 *
 * @example
 * ```
 * divide(1)(2) // 3
 * ```
 */
export const divide = (a: number) => (b: number): number => a / b;
