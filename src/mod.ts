/**
 *
 * @param a   - First number.
 * @param b   - Second number.
 *
 * @return Returns the remainder when the first operand is divided by the second operand.
 * @usage
 * import \{ mod \} from "ufunc/mod"
 *
 * @example
 * ```
 * mod(9)(5) // 4
 * ```
 */
export const mod = (a: number) => (b: number): number => a % b;
