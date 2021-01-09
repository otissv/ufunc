import { isFunction } from './isFunction';

type OrReturnType = {
  readonly or: <Value>(value: Value) => OrReturnType;
  readonly exec: <Value>(value?: Value) => boolean;
};

const reducer = (conditions: readonly unknown[]) => <Value>(value?: Value) => (
  bool: boolean,
): boolean => {
  return conditions.length === 0 || bool
    ? bool
    : reducer(conditions.slice(1, conditions.length))(value)(
        isFunction(conditions[0])
          ? (conditions[0] as any)(value)
          : conditions[0],
      );
};

export const or = (...conditions: readonly unknown[]): OrReturnType => ({
  or: <Condition>(condition: Condition) => or(...conditions, condition),
  exec: <Value>(value?: Value) => reducer(conditions)(value)(false),
});
