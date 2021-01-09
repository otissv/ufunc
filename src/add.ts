/**
 * Transforms a string to snake case
 *
 * @param   string - String to be evaluated.
 *
 * @returns Returns a string in snake case.
 *
 * @usage
 * `import { add } from "ufunc/add"`
 *
 * @example
 * ```
 * add('test')('2') // 'test2'
 * ```
 */
export const add = <Value>(a: Value) => (b: Value): Value => a + (b as any);
