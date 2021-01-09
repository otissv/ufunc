import { maybeString } from './maybeType';

/**
 * Returns a character in a string at a certain position.
 *
 * @param   n  - number representing an index in a string
 * @returns Returns a function that takes a string as an argument and returns the character in the string at position n.
 *
 * @usage
 * `import { charAt } from "ufunc/textTransform"`
 *
 * @example
 * ```
 * charAt(0)("hello") // "h"
 * ```
 */
export function charAt(nth: number): (string: string) => string {
  return (string: string): string => {
    if (typeof nth === 'number') {
      return nth >= 0 ? maybeString(string).charAt(nth) : '';
    } else {
      return maybeString(string);
    }
  };
}

/**
 * Removes a number characters from the beginning of a string.
 *
 * @param   n - Number representing number of characters to drop
 * @returns Returns function that takes a string as an argument and returns a substr starting from position n.
 *
 * * @usage
 * `import { charAt } from "ufunc/textTransform"`
 *
 * @example
 * ```
 * dropChars(0)("hello") // "hello"
 * ```
 */
export function dropChars(n: number): (string: string) => string {
  return (string: string): string => {
    if (typeof n === 'number') {
      return n >= 0 ? maybeString(string).substr(n + 1) : '';
    } else {
      return maybeString(string);
    }
  };
}

/**
 * Removes a number characters from the end of a string.
 *
 * @param   n - number representing number of characters to drop
 * @returns Returns function that takes a string as an argument and returns a substr starting from position n.
 *
 * @usage
 * `import { dropCharsRight } from "ufunc/textTransform"`
 *
 * @example
 * ```
 * dropCharsRight(0)("hello") // "ello"
 * ```
 */
export function dropCharsRight(n: number): (string: string) => string {
  return (string: string): string => {
    if (typeof n === 'number') {
      const str = maybeString(string);
      return n >= 0 ? str.substr(0, str.length - (n + 1)) : '';
    } else {
      return maybeString(string);
    }
  };
}

/**
 * Removes first character in a string.
 *
 * @param   string - String to be evaluated.
 * @returns Returns a function that takes a string as an argument and returns a new string without the first character.
 *
 *  @usage
 * `import { dropFirstChar } from "ufunc/textTransform"`
 *
 * @example
 * ```
 * dropFirstChar("hello") // "ello"
 * ```
 */
export function dropFirstChar(string: string): string {
  return dropChars(0)(string);
}

/**
 * Gets first character of a string
 *
 * @param   string - String to be evaluated.
 * @returns Return the first character of a string.
 *
 * @usage
 * `import { firstChar } from "ufunc/textTransform"`
 *
 * @example
 * ```
 * firstChar("hello") // "h"
 * ```
 */
export function firstChar(string: string): string {
  return maybeString(string).charAt(0);
}

/**
 * Transforms a string case into another case.
 *
 * @param   joiner  - string to use in join function.
 * @returns Returns a function that takes a string as an argument and joins the string using the joiner.
 *
 * @usage
 * `import { joinCase } from "ufunc/textTransform"`
 *
 * @example
 * ```
 * joinCase("-")("hello world") // "hello-world"
 * ```
 */
export function joinCase(joiner: string): (string: string) => string {
  return (string: string): string => {
    const str = maybeString(string);

    const result = str.match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
    );

    return result ? result.map(toLower).join(joiner) : str;
  };
}

/**
 * Transforms a string to camel case.
 *
 * @param   string - String to be evaluated.
 * @returns Returns a camel cased string.
 *
 * @usage
 * `import { toCamel } from "ufunc/textTransform"`
 *
 * @example
 * ```
 * toCamel("hello world") // "helloWorld"
 * ```
 */
export function toCamel(string: string): string {
  const str = maybeString(string);
  return str.trim() === ''
    ? str
    : str[0].toLowerCase() +
        str
          .substr(1, string.length)
          .replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase());
}

/**
 * Transforms a string to kebab case
 *
 * @param   string - String to be evaluated.
 * @returns Returns a string in kebab case.
 *
 * @usage
 * `import { toKebabCase } from "ufunc/textTransform"`
 *
 * @example
 * ```
 * toKebabCase("hello world") // "hello-world"
 * ```
 */
export function toKebabCase(string: string): string {
  return joinCase('-')(string);
}

/**
 * Transforms a string to lowercase.
 *
 * @param   string - String to be evaluated.
 * @returns Returns a string all in lowercase.
 *
 * @usage
 * `import { toLower } from "ufunc/textTransform"`
 *
 * @example
 * ```
 * toLower("HELLO") // "hello"
 * ```
 */
export function toLower(string: string): string {
  return maybeString(string).toLowerCase();
}

/**
 * Transforms the first character to lowercase.
 *
 * @param   string - String to be evaluated.
 * @returns Returns a string with the first character lower cased.
 *
 * @usage
 * `import { toLowerFirst } from "ufunc/textTransform"`
 *
 * @example
 * ```
 * toLowerFirst("HELLO WORLD") // "hELLO WORLD"
 * ```
 */
export function toLowerFirst(string: string): string {
  return maybeString(string).replace(/^./, toLower);
}

/**
 * Transforms a string to pascal case
 *
 * @param string - String to be evaluated.
 * @returns Returns a string in pascal case.
 *
 * @usage
 * `import { toPascalCase } from "ufunc/textTransform"`
 *
 * @example
 * ```
 * toPascalCase("hello world") // "HelloWorld"
 * ```
 */
export function toPascalCase(string: string): string {
  return maybeString(string)
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
      new RegExp(/\s+(.)(\w+)/, 'g'),
      (_$1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`,
    )
    .replace(new RegExp(/\s/, 'g'), '')
    .replace(new RegExp(/\w/), (s) => s.toUpperCase());
}

/**
 * Transforms a string to snake case
 *
 * @param   string - String to be evaluated.
 * @returns Returns a string in snake case.
 */
export function toSnakeCase(string: string): string {
  return joinCase('_')(string);
}

/**
 * Transforms a string to title case.
 *
 * @param   string - String to be evaluated.
 * @returns Returns a string with all words in capitalized.
 *
 * @usage
 * `import { toTitle } from "ufunc/textTransform"`
 *
 * @example
 * ```
 * toTitle("hello world") // "Hello World"
 * ```
 *  */
export function toTitle(string: string): string {
  return maybeString(string).replace(/(^|\s)\S/g, toUpper);
}

/**
 * Transforms a string to uppercase.
 *
 * @param   string - String to be evaluated.
 * @returns Return a string all in uppercase.
 *
 * @usage
 * `import { toUpper } from "ufunc/textTransform"`
 *
 * @example
 * ```
 * toUpper("hello") // "HELLO"
 * ```
 */
export function toUpper(string: string): string {
  return maybeString(string).toUpperCase();
}

/**
 * Transforms the first character to uppercase.
 *
 * @param string - String to be evaluated.
 * @returns Returns a string with the first character upper cased.
 *
 * @usage
 * `import { toUpperFirst } from "ufunc/textTransform"`
 *
 * @example
 * ```
 * toUpperFirst("hello world") // "Hello world"
 * ```
 */
export function toUpperFirst(string: string): string {
  return maybeString(string).replace(/^./, toUpper);
}
