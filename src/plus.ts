/**
 * Adds two numbers together.
 *
 * @param a   - First number.
 * @param b   - Second number.
 *
 * @return Returns the result of a plus b.
 * @usage
 * import \{ plus \} from "ufunc/plus"
 *
 * @example
 * ```
 * plus(1)(2) // 3
 * ```
 */
export const plus = (a: number) => (b: number): number => a + b;
