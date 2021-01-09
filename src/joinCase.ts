import { maybeString } from './maybeString';
import { toLower } from './toLower';

/**
 * Transforms a string case into another case.
 *
 * @param   joiner  - string to use in join function.
 * @param   string  - string to be evaluated.

 * @returns Joins the string using the joiner.
 *
 * @usage
 * `import { joinCase } from "ufunc/joinCase"`
 *
 * @example
 * ```
 * joinCase("-")("hello world") // "hello-world"
 * ```
 */
export const joinCase = (joiner: string) => (string: string): string => {
  const str = maybeString(string);

  const result = str.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
  );

  return result ? result.map(toLower).join(joiner) : str;
};
