/* eslint-disable functional/no-expression-statement */
import { isGreaterThan } from './isGreaterThan';

describe('isGreaterThan', () => {
  it('should return true if a is greater than b', () => {
    expect(isGreaterThan(1)(0)).toBe(true);
    expect(isGreaterThan(10)(2)).toBe(true);
    expect(isGreaterThan('a')('A')).toBe(true);
    expect(isGreaterThan('b')('a')).toBe(true);
    expect(isGreaterThan(true)(false)).toBe(true);
  });

  it('should return false if a is not greater than b', () => {
    expect(isGreaterThan(0)(1)).toBe(false);
    expect(isGreaterThan(2)(10)).toBe(false);
    expect(isGreaterThan('A')('a')).toBe(false);
    expect(isGreaterThan('a')('b')).toBe(false);
    expect(isGreaterThan(false)(true)).toBe(false);
  });
});
