/**
 * Evaluates if Some and None arguments based on condition.
 *
 * @param   none      - Fallback Promise if condition is false.
 * @param   some      - Promise to be invoked if condition is true.
 * @param   condition - Condition to be evaluated.
 * 
 * @usage
 * `import \{ eitherPromise \} from "ufunc/eitherPromise"`
 *
 * @example
 * ```
 * either(Promise.resolve("none"))(Promise.resolve("some"))(true)
 * .then(result => {
 *   console.log(result) // "some"
 * })
 *
 * either(() => Promise.resolve("none"))(() => Promise.resolve("some"))(true)
 * .then(result => {
 *   console.log(result) // "some"
 * })
 *
 * either(() => Promise.resolve("none"))(Promise.resolve("some"))(true)
 * .then(result => {
 *   console.log(result) // "some"
 * })
 *
 * either(Promise.resolve("none"))(() => Promise.resolve("some"))(true)
 * .then(result => {
 *   console.log(result) // "some"
 * })
 
 * either(Promise.resolve("none"))(Promise.resolve("some"))(false)
 * .then(result => {
 *   console.log(result) // "none"
 * })
 *
 * either(() => Promise.resolve("none"))(() => Promise.resolve("some"))(false)
 * .then(result => {
 *   console.log(result) // "none"
 * })
 *
 * either(() => Promise.resolve("none"))(Promise.resolve("some"))(false)
 * .then(result => {
 *   console.log(result) // "none"
 * })
 *
 * either(Promise.resolve("none"))(() => Promise.resolve("some"))(false)
 * .then(result => {
 *   console.log(result) // "none"
 * }) 
 * ```
 */
export const eitherPromise = <None>(none: None) => <Some>(some: Some) => async <
  ReturnType
>(
  condition: boolean,
): Promise<ReturnType> =>
  condition
    ? typeof some === 'function'
      ? await some()
      : some
    : typeof none === 'function'
    ? await none()
    : none;
