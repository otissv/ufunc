/* eslint-disable functional/no-expression-statement */
import { isLessThan } from './isLessThan';

describe('isLessThan', () => {
  it('should return true if a is less than b', () => {
    expect(isLessThan(0)(1)).toBe(true);
    expect(isLessThan(2)(10)).toBe(true);
    expect(isLessThan('A')('a')).toBe(true);
    expect(isLessThan('a')('b')).toBe(true);
    expect(isLessThan(false)(true)).toBe(true);
  });

  it('should return false if a is not less than b', () => {
    expect(isLessThan(1)(0)).toBe(false);
    expect(isLessThan(10)(2)).toBe(false);
    expect(isLessThan('a')('A')).toBe(false);
    expect(isLessThan('b')('a')).toBe(false);
    expect(isLessThan(true)(false)).toBe(false);
  });
});
