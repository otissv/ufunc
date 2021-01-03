declare type ChainType<ReturnType> = {
    readonly map: (fn: Function) => ChainType<ReturnType>;
    readonly exec: <T>(value: T) => ReturnType;
};
export declare function chain<ReturnType>(...fns: Function[]): ChainType<ReturnType>;
export {};
//# sourceMappingURL=lazy.d.ts.map