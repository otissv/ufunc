/**
 * Multiplies two numbers together.
 *
 * @param a   - First number.
 * @param b   - Second number.
 *
 * @return Returns the result of a multiplied by b
 *
 * @usage
 * import \{ multiply \} from "ufunc/multiply"
 *
 * @example
 * ```
 * multiply(3)(3) // 9
 * ```
 */
export const multiply = (a: number) => (b: number): number => a * b;
