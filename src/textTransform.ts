/**
 * @param n  number representing an index in a string
 * @returns a function that take a string as an argument and returns the character in the string at 'n'.
 */
export const charAt = (n: number) => (str: string): string => str.charAt(n);

/**
 * @param n  number representing an index in a string
 * @returns a function that take a string as an argument and returns a substr starting from 'n'.
 */
export const dropChars = (n: number) => (str: string): string => str.substr(n);

/**
 * @param n  number representing an index in a string
 * @returns a function that take a string as an argument and returns a new string without the first character.
 */
export const dropFirstChar = dropChars(1);

/**
 * @param str   string
 * @returns first character of a string.
 */
export const firstChar = (str: string): string => str.charAt(0);

/**
 * @param str   string
 * @returns string all in uppercase
 */
export const toUpper = (str: string): string => str.toUpperCase();

/**
 * @param str   string
 * @returns string all in lowercase
 */
export const toLower = (str: string): string => str.toLowerCase();

/**
 * @param str   string
 * @returns string camelcase
 */
export const toCamel = (str: string): string =>
  str[0].toLowerCase() +
  str
    .substr(1, str.length)
    .replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase());

/**
 * @param str   string
 * @returns string with all words in capitalized.
 */
export const toTitle = (str: string): string =>
  str.replace(/(^|\s)\S/g, toUpper);

/**
 * @param str   string
 * @returns string with the first character capitalized.
 */
export const toUpperFirst = (str: string): string => str.replace(/^./, toUpper);
/**
 * @param str   string
 * @returns string with the first character lowercased.
 */
export const toLowerFirst = (str: string): string => str.replace(/^./, toLower);

/**
 * @param str   string
 * @returns string in pascal case.
 */
export const toPascalCase = (str: string): string =>
  str.replace(
    /\w\S*/g,
    (m) => toUpper(firstChar(m)) + toLower(dropFirstChar(m)),
  );

/**
 * @param joiner   string to use in join function.
 * @returns function that takes a string as an argument and joins the string using the joiner
 */
export const joinCase: (joiner: string) => (str: string) => string = (
  joiner: string,
) => (str: string) => {
  const result = str.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
  );

  return result ? result.map(toLower).join(joiner) : str;
};

/**
 * @param str   string
 * @returns string in kebab case.
 */
export const toKebabCase = joinCase('-');
/**
 * @param str   string
 * @returns string in snake case.
 */
export const toSnakeCase = joinCase('_');
