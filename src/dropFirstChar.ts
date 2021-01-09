import { dropChars } from './dropChars';

/**
 * Removes first character in a string.
 *
 * @param   string - String to be evaluated.
 *
 * @returns Returns a new string without the first character.
 *
 *  @usage
 * `import { dropFirstChar } from "ufunc/dropFirstChar"`
 *
 * @example
 * ```
 * dropFirstChar("hello") // "ello"
 * ```
 */
export const dropFirstChar = (string: string): string => dropChars(0)(string);
