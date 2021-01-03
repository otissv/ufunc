//TODO: Make lazy

type FactoryReturnType<T> = {
  readonly flatMap: <F extends Function>(f: F) => FactoryReturnType<T>;
  readonly fold: () => T;
  readonly log: () => FactoryReturnType<T>;
  readonly map: <F extends Function>(f: F) => FactoryReturnType<T>;
};

export function factory<T>(value: T): FactoryReturnType<T> {
  return {
    flatMap: <F extends Function>(f: F) => f(value),
    fold: () => value,
    log: () => factory(value),
    map: <F extends Function>(f: F) => factory(f(value)),
  };
}
