/* eslint-disable functional/no-expression-statement */
import { isGreaterThanOrEqualTo } from './isGreaterThanOrEqualTo';

describe('isGreaterThanOrEqualTo', () => {
  it('should return true if a greater than or equal to b', () => {
    expect(isGreaterThanOrEqualTo(1)(0)).toBe(true);
    expect(isGreaterThanOrEqualTo(1)(1)).toBe(true);
    expect(isGreaterThanOrEqualTo(0)(0)).toBe(true);
    expect(isGreaterThanOrEqualTo('a')('A')).toBe(true);
    expect(isGreaterThanOrEqualTo('a')('a')).toBe(true);
    expect(isGreaterThanOrEqualTo('b')('a')).toBe(true);
    expect(isGreaterThanOrEqualTo(true)(false)).toBe(true);
    expect(isGreaterThanOrEqualTo(false)(false)).toBe(true);
  });

  it('should return false if a is not greater than b', () => {
    expect(isGreaterThanOrEqualTo(0)(1)).toBe(false);
    expect(isGreaterThanOrEqualTo(2)(10)).toBe(false);
    expect(isGreaterThanOrEqualTo('A')('a')).toBe(false);
    expect(isGreaterThanOrEqualTo('a')('b')).toBe(false);
    expect(isGreaterThanOrEqualTo(false)(true)).toBe(false);
  });
});
