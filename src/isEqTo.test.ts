/* eslint-disable functional/no-expression-statement */
import { isEqTo } from './isEqTo';

describe('isEqTo', () => {
  it('should return true if values are equal', () => {
    expect(isEqTo(1)(1)).toBe(true);
    expect(isEqTo(0)(0)).toBe(true);
    expect(isEqTo('a')('a')).toBe(true);
    expect(isEqTo('')('')).toBe(true);
    expect(isEqTo(true)(true)).toBe(true);
    expect(isEqTo(false)(false)).toBe(true);
    expect(isEqTo(null)(null)).toBe(true);
    expect(isEqTo(undefined)(undefined)).toBe(true);
  });

  it('should return false if values are not equal', () => {
    expect(isEqTo(1)(2)).toBe(false);
    expect(isEqTo(0)(1)).toBe(false);
    expect(isEqTo('a')('b')).toBe(false);
    expect(isEqTo('')('a')).toBe(false);
    expect(isEqTo(true)(false)).toBe(false);
    expect(isEqTo<unknown>(null)(undefined)).toBe(false);
  });
});
