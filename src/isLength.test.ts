/* eslint-plugin-disable functional */

import { isLength } from './isLength';

describe('isError', () => {
  it('should return true if value is an instance of Error', () => {
    expect(isLength(0)([])).toBe(true);
    expect(isLength(1)([1])).toBe(true);
    expect(isLength(0)('')).toBe(true);
    expect(isLength(1)('1')).toBe(true);
  });

  it('should return false if value is not an instance of Error', () => {
    expect(isLength(1)([])).toBe(false);
    expect(isLength(0)([1])).toBe(false);
    expect(isLength(1)('')).toBe(false);
    expect(isLength(0)('1')).toBe(false);
  });
});
