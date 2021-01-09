/* eslint-disable functional/no-expression-statement */
import { isNotEqTo } from './isNotEqTo';

describe('isNotEqTo', () => {
  it('should return true if values are not equal', () => {
    expect(isNotEqTo(1)(2)).toBe(true);
    expect(isNotEqTo(0)(1)).toBe(true);
    expect(isNotEqTo('a')('b')).toBe(true);
    expect(isNotEqTo('')('a')).toBe(true);
    expect(isNotEqTo(true)(false)).toBe(true);
    expect(isNotEqTo<unknown>(null)(undefined)).toBe(true);
  });
  it('should return false if value are equal', () => {
    expect(isNotEqTo(1)(1)).toBe(false);
    expect(isNotEqTo(0)(0)).toBe(false);
    expect(isNotEqTo('a')('a')).toBe(false);
    expect(isNotEqTo('')('')).toBe(false);
    expect(isNotEqTo(true)(true)).toBe(false);
    expect(isNotEqTo(false)(false)).toBe(false);
    expect(isNotEqTo(null)(null)).toBe(false);
    expect(isNotEqTo(undefined)(undefined)).toBe(false);
  });
});
