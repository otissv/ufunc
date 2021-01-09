const apply = <Value1>(list1: readonly Value1[]) => <Value2>(
  list2: readonly Value2[],
) => list2.flatMap((f: any) => list1.map(f));

/**
 * Combines two arrays together.
 *
 * @param fn      - Map function
 * @param listA   - List A
 * @param listB   - List B
 *
 * @returns Returns a new combined array.
 *
 * @usage
 * `import { combined } from "ufunc/combined"`
 *
 * @example
 * ```
 * const bases = ['ice cream', 'banana', 'strawberry'];
 * const toppings = ['nuts', 'chocolate sauce', 'sprinkles'];
 * const fn = (a: string) => (b: string) => `${a} with ${b}`;
 *
 * combined(fn)(toppings)(bases)
 * // [
 * //   'ice cream with nuts',
 * //   'ice cream with chocolate sauce',
 * //   'ice cream with sprinkles',
 * //   'banana with nuts',
 * //   'banana with chocolate sauce',
 * //   'banana with sprinkles',
 * //   'strawberry with nuts',
 * //   'strawberry with chocolate sauce',
 * //   'strawberry with sprinkles',
 * //  ]
 * ```
 */
export const combined = <Fn extends Function>(fn: Fn) => <A>(
  listA: readonly A[],
): any => <B>(listB: readonly B[]) => apply(listA)(listB.map(fn as any));
