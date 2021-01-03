/**
 * Evaluates functions in a left to right sequence. Where the return value of the previous function become the argument of the next function in the sequence
 * @param fns  arguments: Functions to be evaluated.
 * @returns a function that takes a single argument that will be mapped over.
 */
export declare function pipe<I, O>(...fns: readonly any[]): (value: I) => O;
//# sourceMappingURL=pipe.d.ts.map