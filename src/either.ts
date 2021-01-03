/**
 * Evaluates if left and right arguments based on condition.
 *
 * @param   None - Fallback function.
 * @param   Some - Function to be evaluated.
 * @returns Return a function that take a boolean condition as an argument. If condition truthy returns Some, else returns None.
 *
 * @usage
 * `import \{ either \} from "ufunc/either"`
 *
 * @example
 * ```
 * either("none", "some")(true) // "some"
 * either(() => "none", () => "some")(true) // "some"
 * either(() => "none", "some")(true) // "some"
 * either("none", () => "some")(true) // "some"
 *
 * either("none", "some")(false) // "none"
 * either(()=> "none", ()=> "some")(false) // "none"
 * either(()=> "none", "some")(false) // "none"
 * either("none", ()=> "some")(false) // "none"
 * ```
 */
export function either<None, Some>(
  none: None,
  some: Some,
): <T>(condition: boolean) => T {
  return <T>(condition: boolean): T => {
    if (condition) {
      return typeof some === 'function' ? some() : some;
    } else {
      return typeof none === 'function' ? none() : none;
    }
  };
}
