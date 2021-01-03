declare type FactoryReturnType<T> = {
    readonly flatMap: <F extends Function>(f: F) => FactoryReturnType<T>;
    readonly fold: () => T;
    readonly log: () => FactoryReturnType<T>;
    readonly map: <F extends Function>(f: F) => FactoryReturnType<T>;
};
export declare function factory<T>(value: T): FactoryReturnType<T>;
export {};
//# sourceMappingURL=factory.d.ts.map