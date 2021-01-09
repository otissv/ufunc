import { isFunction } from './isFunction';
/**
 * Evaluates if some items in a list are truthy.
 *
 * @param   list  - An array of items to be evaluated.
 *
 * @returns Returns true if some arguments are true, else returns false.
 *
 * @usage
 * `import \{ someTrue \} from "ufunc/someTrue"`
 *
 * @example
 * ```
 * someTrue([false, true]) // true
 * someTrue([false, 'a', 1, true]) //true
 *
 * someTrue([null, 0, false]) //false
 * ```
 */
export const someTrue = <List extends readonly unknown[]>(
  list: List,
): boolean => [...list].some((e) => Boolean(isFunction(e) ? (e as any)() : e));
