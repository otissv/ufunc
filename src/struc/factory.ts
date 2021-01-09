//TODO: Make lazy

type FactoryReturnType<Value> = {
  readonly flatMap: <F extends Function>(f: F) => FactoryReturnType<Value>;
  readonly fold: () => Value;
  readonly log: () => FactoryReturnType<Value>;
  readonly map: <F extends Function>(f: F) => FactoryReturnType<Value>;
};

export const factory = <Value>(value: Value): FactoryReturnType<Value> => ({
  flatMap: <Fn extends Function>(f: Fn) => f(value),
  fold: () => value,
  log: () => factory(value),
  map: <Fn extends Function>(f: Fn) => factory(f(value)),
});
