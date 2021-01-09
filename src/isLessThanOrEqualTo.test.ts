/* eslint-disable functional/no-expression-statement */
import { isLessThanOrEqualTo } from './isLessThanOrEqualTo';

describe('isLessThanOrEqualTo', () => {
  it('should return true if a is less than or equal to b', () => {
    expect(isLessThanOrEqualTo(0)(1)).toBe(true);
    expect(isLessThanOrEqualTo(0)(0)).toBe(true);
    expect(isLessThanOrEqualTo(-1)(0)).toBe(true);
    expect(isLessThanOrEqualTo(1)(10)).toBe(true);
    expect(isLessThanOrEqualTo('A')('a')).toBe(true);
    expect(isLessThanOrEqualTo('A')('A')).toBe(true);
    expect(isLessThanOrEqualTo('a')('b')).toBe(true);
    expect(isLessThanOrEqualTo('a')('a')).toBe(true);
    expect(isLessThanOrEqualTo(false)(true)).toBe(true);
    expect(isLessThanOrEqualTo(true)(true)).toBe(true);
    expect(isLessThanOrEqualTo(false)(false)).toBe(true);
  });

  it('should return false if a is not less than b', () => {
    expect(isLessThanOrEqualTo(1)(0)).toBe(false);
    expect(isLessThanOrEqualTo(10)(2)).toBe(false);
    expect(isLessThanOrEqualTo('a')('A')).toBe(false);
    expect(isLessThanOrEqualTo('b')('a')).toBe(false);
    expect(isLessThanOrEqualTo(true)(false)).toBe(false);
  });
});
