/**
 * Evaluates if a value is nullish.
 *
 * @public
 * @param None   T | (value: T) => T: Fallback function.
 * @param Some   T | (value: T) => T: Function to be evaluated.
 * @returns Right if truthy else, returns left.
 */
export declare function optionPromise<N, S>(None: N, Some: S): <T>(value: T) => Promise<T>;
//# sourceMappingURL=optionPromise.d.ts.map