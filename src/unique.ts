/**
 * Find unique items in a list
 *
 * Returns only unique values in an array.
 * @param fn T(value: T) => anyL   an array
 * @returns function that takes an array  new array with unique items from the list.
 */

export function unique<T>(list: readonly T[]): readonly T[] {
  // eslint-disable-next-line functional/prefer-readonly-type
  function reducer(items: readonly T[], set: Set<T> = new Set()): any {
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
  }

  return reducer(list);
}

// export function unique<F extends Function>(fn: F = identity as any) {
//   return <T>(array: T[]): T[] => {
//     function reducer(items: T[], set = new Set(), acc: T[] = []): any {
//       if (items.length === 0) return acc;

//       let result: T[] = [];
//       const item = items[0];

//       if (!set.has(fn(item))) {
//         result = acc;
//       } else {
//         set.add(item);
//         result = [...acc, item];
//       }

//       return reducer(items.slice(1, items.length - 1), set, result);
//     }

//     return reducer(array);
//   };
// }
