/**
 * Evaluates if left and right arguments based on condition.
 *
 * @param   none      - Fallback function if condition is false.
 * @param   some      - Function to be invoked if condition is true.
 * @param   condition - Condition to be evaluated.
 *
 * @returns If condition truthy returns some, else returns none.
 *
 * @usage
 * `import \{ either \} from "ufunc/either"`
 *
 * @example
 * ```
 * either("none")("some")(true) // "some"
 * either(() => "none")(() => "some")(true) // "some"
 * either(() => "none")("some")(true) // "some"
 * either("none")(() => "some")(true) // "some"
 *
 * either("none")("some")(false) // "none"
 * either(()=> "none")(()=> "some")(false) // "none"
 * either(()=> "none")("some")(false) // "none"
 * either("none")(()=> "some")(false) // "none"
 * ```
 */
export const either = <None>(none: None) => <Some>(some: Some) => <ReturnType>(
  condition: boolean,
): ReturnType =>
  condition
    ? typeof some === 'function'
      ? some()
      : some
    : typeof none === 'function'
    ? none()
    : none;
