/* eslint-plugin-disable functional */

import { isValidString } from './isValidString';

describe('isValidString', () => {
  it('should return true if is string and not empty', () => {
    expect(isValidString('hello')).toBe(true);
  });

  it('should return false if NODE_ENV environment variable is not test', () => {
    expect(isValidString('')).toBe(false);
    expect((isValidString as any)(true)).toBe(false);
    expect((isValidString as any)(undefined)).toBe(false);
    expect((isValidString as any)(null)).toBe(false);
    expect((isValidString as any)([])).toBe(false);
    expect((isValidString as any)({})).toBe(false);
    expect((isValidString as any)(0)).toBe(false);
    expect((isValidString as any)([1])).toBe(false);
    expect((isValidString as any)({ a: 1 })).toBe(false);
    expect((isValidString as any)(1)).toBe(false);
  });
});
