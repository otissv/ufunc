/**
 * @param n  number representing an index in a string
 * @returns a function that take a string as an argument and returns the character in the string at 'n'.
 */
export declare const charAt: (n: number) => (str: string) => string;
/**
 * @param n  number representing an index in a string
 * @returns a function that take a string as an argument and returns a substr starting from 'n'.
 */
export declare const dropChars: (n: number) => (str: string) => string;
/**
 * @param n  number representing an index in a string
 * @returns a function that take a string as an argument and returns a new string without the first character.
 */
export declare const dropFirstChar: (str: string) => string;
/**
 * @param str   string
 * @returns first character of a string.
 */
export declare const firstChar: (str: string) => string;
/**
 * @param str   string
 * @returns string all in uppercase
 */
export declare const toUpper: (str: string) => string;
/**
 * @param str   string
 * @returns string all in lowercase
 */
export declare const toLower: (str: string) => string;
/**
 * @param str   string
 * @returns string camelcase
 */
export declare const toCamel: (str: string) => string;
/**
 * @param str   string
 * @returns string with all words in capitalized.
 */
export declare const toTitle: (str: string) => string;
/**
 * @param str   string
 * @returns string with the first character capitalized.
 */
export declare const toUpperFirst: (str: string) => string;
/**
 * @param str   string
 * @returns string with the first character lowercased.
 */
export declare const toLowerFirst: (str: string) => string;
/**
 * @param str   string
 * @returns string in pascal case.
 */
export declare const toPascalCase: (str: string) => string;
/**
 * @param joiner   string to use in join function.
 * @returns function that takes a string as an argument and joins the string using the joiner
 */
export declare const joinCase: (joiner: string) => (str: string) => string;
/**
 * @param str   string
 * @returns string in kebab case.
 */
export declare const toKebabCase: (str: string) => string;
/**
 * @param str   string
 * @returns string in snake case.
 */
export declare const toSnakeCase: (str: string) => string;
//# sourceMappingURL=textTransform.d.ts.map