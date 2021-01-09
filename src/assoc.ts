/**
 * Returns a new object with an updated property.
 *
 * @param obj - Object whose property will be update.
 * @param key - Name of property to be updated.
 *
 * @returns Returns a function that takes a key which returns a function
 *  that takes a value that returns a new object where the value is assigned to a property with the name of the key.
 *
 * @usage
 * `import \{ assoc \} from "ufunc/assoc"`
 *
 * @example
 * ```
 * assoc()('b')(2)
 * // { b: 2 }
 *
 * assoc({ a: 1, b: 0 })('b')(2)
 * { a: 1, b: 2 }
 * ```
 */
export const assoc = <Obj extends Record<string, any>>(obj?: Obj) => (
  key: string,
) => <Value>(value: Value): Obj => ({ ...((obj as any) || {}), [key]: value });
