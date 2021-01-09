import { Step } from './types';

const reducer = <Step extends Function>(step: Step) => (from: number) => (
  to: number,
) => (acc: readonly number[] = []): readonly number[] => {
  const stepFn = step({
    from,
    to,
    list: acc,
  });

  switch (true) {
    case typeof step !== 'function' || typeof to !== 'number':
      return [];
    case to === from:
      return [from, ...acc];
    case to > from:
      return reducer(step)(from)(to - 1)([
        ...acc,
        ...[stepFn(from + acc.length)],
      ]);
    default:
      return reducer(step)(from)(to + 1)([
        ...acc,
        ...[stepFn(from - acc.length)],
      ]);
  }
};

/**
 * Creates a range of number in a list.
 *
 * @param step  - Optional function for incrementing next number.
 * @param from  - Number to start from.
 * @param to    - Number to end with.
 *
 * @returns Returns a list of numbers.
 */
export const range = (step?: Step) => (from: number) => (
  to: number,
): readonly number[] => {
  const stepFn = step
    ? step
    : from < to
    ? () => (accumulativeValue: number) => accumulativeValue + 1
    : () => (accumulativeValue: number) => accumulativeValue - 1;

  return reducer(stepFn)(from)(to)([]);
};
