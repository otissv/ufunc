/**
 * Find unique items in a list
 *
 * Returns only unique values in an array.
 * @param list   - List to be evaluated.
 *
 * @returns Returns new array with unique items from the list.
 */

const reducer = <Value>(
  items: readonly Value[],
  // eslint-disable-next-line functional/prefer-readonly-type
  set: Set<Value> = new Set(),
): any => {
  if (items.length === 0) {
    return Array.from(set);
  } else {
    const item = items[0];
    const hasSet = set.has(items[0]);
    const newSet = hasSet ? set : new Set(set);
    // eslint-disable-next-line functional/no-expression-statement
    newSet.add(item);
    return reducer(items.slice(1, items.length), newSet);
  }
};

export const unique = <Value>(list: readonly Value[]): readonly Value[] =>
  reducer(list);
