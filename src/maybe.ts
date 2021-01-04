import { either } from './either';

/**
 * Checks if value is defined.
 *
 * @param   None - Fallback value if value is not designed.
 * @returns Returns a function that takes a value as an argument, which returns value if it is defined, else returns None
 *
 * @usage
 * import \{ maybe \} from "ufunc/maybe"
 *
 * @example
 */
export function maybe<None>(none: None): <T>(value: T) => T {
  return <T>(value: T): T => {
    const condition =
      typeof value === 'function' ? value() : typeof value !== 'undefined';
    return either(none, value)(condition);
  };
}
