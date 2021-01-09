/**
 * Extracts the value of a property in an object.
 *
 * @param obj - Object whose property will be extracted.
 * @param key - Name of the property.
 *
 * @returns Returns the vale of the property.
 */
export const prop = <Obj extends Record<string, any>>(obj: Obj) => (
  key: string,
): Obj[typeof key] => (obj as any)[key];
