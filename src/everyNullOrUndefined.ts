import { isNullOrUndefined } from './isNullOrUndefined';

/**
 * Checks if all items in a list are null or undefined
 *
 * @param list - A list of values
 *
 * @return Returns a boolean
 */
export const everyNullOrUndefined = <Value>(list: readonly Value[]): boolean =>
  list.length ===
  list.filter((value: Value) => isNullOrUndefined(value)).length;
