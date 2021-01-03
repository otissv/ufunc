/**
 * Evaluates if Some and None arguments based on condition.
 *
 * @param   None - Fallback Promise.
 * @param   Some - Promise to be evaluated.
 * @returns Return a function that take a boolean condition as an argument. If condition truthy returns Some, else returns None.
 *
 * @usage
 * `import \{ eitherPromise \} from "ufunc/eitherPromise"`
 *
 * @example
 * ```
 * either(Promise.resolve("none"), Promise.resolve("some"))(true)
 * .then(result => {
 *   console.log(result) // "some"
 * })
 *
 * either(() => Promise.resolve("none"), () => Promise.resolve("some"))(true)
 * .then(result => {
 *   console.log(result) // "some"
 * })
 *
 * either(() => Promise.resolve("none"), Promise.resolve("some"))(true)
 * .then(result => {
 *   console.log(result) // "some"
 * })
 *
 * either(Promise.resolve("none"), () => Promise.resolve("some"))(true)
 * .then(result => {
 *   console.log(result) // "some"
 * })
 
 * either(Promise.resolve("none"), Promise.resolve("some"))(false)
 * .then(result => {
 *   console.log(result) // "none"
 * })
 *
 * either(() => Promise.resolve("none"), () => Promise.resolve("some"))(false)
 * .then(result => {
 *   console.log(result) // "none"
 * })
 *
 * either(() => Promise.resolve("none"), Promise.resolve("some"))(false)
 * .then(result => {
 *   console.log(result) // "none"
 * })
 *
 * either(Promise.resolve("none"), () => Promise.resolve("some"))(false)
 * .then(result => {
 *   console.log(result) // "none"
 * })
 * ```
 */
export declare function eitherPromise<None, Some>(none: None, some: Some): <T>(condition: boolean) => Promise<T>;
//# sourceMappingURL=eitherPromise.d.ts.map