/**
 * Checks if value is defined.
 *
 * @public
 * @param   None - Fallback value if value is not designed.
 * @returns Returns a function that takes a value as an argument, which returns value if it is defined, else returns None
 *
 * @usage
 * import \{ maybe \} from "ufunc/maybe"
 *
 * @example
 */
export declare function maybe<None>(none: None): <T>(value: T) => T;
/**
 * Checks if value is of type string.
 *
 * @public
 * @param   value - Value to be evaluated.
 * @returns Returns a function which takes a value as an argument. Returns value if value is a string, else return an empty string.
 *
 * @usage
 * import \{ maybeString \} from "ufunc/maybeString"
 *
 * @example
 */
export declare function maybeString(value: string): string;
/**
 * Checks if value is of type number.
 *
 * @public
 * @param   value - Value to be evaluated.
 * @returns Returns a function that takes a value as an argument, which returns the value if the value is a number, else returns 0.
 *
 * @usage
 * import \{ maybeNumber \} from "ufunc/maybeNumber"
 *
 * @example*/
export declare function maybeNumber(value: number): number;
/**
 * Checks if value is ot type boolean
 *
 * @public
 * @param None boolean: Value to be evaluated.
 * @returns function that takes a value as an argument, which returns the value if the value is a boolean, else return false.
 *
 * @usage
 * import \{ maybeBoolean \} from "ufunc/maybeBoolean"
 *
 * @example
 *
 */
export declare function maybeBoolean(value: boolean): boolean;
/**
 * Checks if value is ot type boolean
 *
 * @public
 * @param None boolean: Value to be evaluated.
 * @returns function that takes a value as an argument, which returns the value if the value is a boolean, else return false.
 *
 * @usage
 * import \{ maybeBoolean \} from "ufunc/maybeBoolean"
 *
 * @example
 *
 */
export declare function maybeObject(value: Record<string, any>): Record<string, any>;
/**
 * Checks if value is an array
 *
 * @public
 * @param None T[]: Value to be evaluated.
 * @returns Returns a function that takes a value as an argument, which returns value if the value is an array, else returns an empty array
 *
 * @usage
 * import \{ maybeArray \} from "ufunc/maybeArray"
 *
 * @example
 *
 */
export declare function maybeArray<T>(value: readonly T[]): readonly T[];
//# sourceMappingURL=maybe.d.ts.map