/**
 * Memorizes (caches) a functions arguments and return value.
 * if the function is called a second time with the same argument a cached value will be returned and the function will not be reevaluated.
 * @returns   a function that takes a function to be memorize
 */
export declare function memorize(): <F extends Function, O>(fn: F) => <A>(...args: readonly A[]) => O;
//# sourceMappingURL=memorize.d.ts.map