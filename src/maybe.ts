import { either } from './either';

/**
 * Checks if value is defined.
 *
 * @param   none    - Fallback value if value is not defined.
 * @param   value   - Value to be evaluated.
 *
 * @returns Returns the value if it is defined, else returns none.
 *
 * @usage
 * import \{ maybe \} from "ufunc/maybe"
 *
 * @example
 * ```
 * maybe('empty')(true)                 // true
 * maybe('empty')(() => 'hello')        // 'hello'
 * maybe(() => 'empty')('hello')        // 'hello'
 * maybe(() => 'empty')(() => 'hello')  // 'hello'
 * maybe('empty')(null)                 // 'empty'
 * maybe('empty')(undefined)            // 'empty'
 * ```
 */
export const maybe = <None>(none: None) => <Value>(
  value: Value,
): Value | None =>
  either(none)(value)(
    typeof value === 'function' ? value() : typeof value !== 'undefined',
  );
