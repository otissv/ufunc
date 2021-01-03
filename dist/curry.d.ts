declare function sum(a: number, b: number, c: number): number;
declare function curry<T extends Function>(fn: T): (...args: T extends (...args: infer A) => any ? A : never) => any;
declare function args<T extends Function>(fn: T): string[];
//# sourceMappingURL=curry.d.ts.map