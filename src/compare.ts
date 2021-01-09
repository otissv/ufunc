import { isEqTo } from './isEqTo';
import { isGreaterThan } from './isGreaterThan';
import { isGreaterThanOrEqualTo } from './isGreaterThanOrEqualTo';
import { isLessThan } from './isLessThan';
import { isLessThanOrEqualTo } from './isLessThanOrEqualTo';
import { isNotEqTo } from './isNotEqTo';
import {
  EQ,
  NOT_EQ,
  LT,
  GT,
  LT_EQ,
  GT_EQ,
  ComparisonOperatorTypes,
} from './types';

/**
 *  Compare a value again another value
 *
 * @param operator  - Comparison operator. One of "NOT_EQ",  "LT",  "GT",  "LT_EQ",  "GT_EQ" or "EQ".
 * @param a         - Value to be compare.
 * @param b         - value to be compared to.
 *
 * @returns Returns true or false.
 *
 * @usage
 * `import \{ compare \} from "ufunc/compare"`
 *
 * @example
 * ```
 * compare(NOT_EQ)('a')('b')
 * // true
 *
 * compare(EQ)('a')('a')
 * // true
 *
 * compare(LT)('a')('b')
 * // true
 *
 * compare(LT_EQ)('a')('b')
 * // true
 *
 * compare(GT)('b')('a')
 * // true
 *
 * compare(GT_EQ)('b')('a')
 * // true
 * ```
 */

export const compare = (operator: ComparisonOperatorTypes) => <Value>(
  a: Value,
) => (b: Value): boolean => {
  switch (operator) {
    case NOT_EQ:
      return isNotEqTo(a)(b);
    case LT:
      return isLessThan(a)(b);
    case GT:
      return isGreaterThan(a)(b);
    case LT_EQ:
      return isLessThanOrEqualTo(a)(b);
    case GT_EQ:
      return isGreaterThanOrEqualTo(a)(b);
    case EQ:
    default:
      return isEqTo(a)(b);
  }
};
