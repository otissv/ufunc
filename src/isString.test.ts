/* eslint-plugin-disable functional */

import { isString } from './isString';

describe('iString', () => {
  it('should return true if value is of type string', () => {
    expect(isString('')).toBe(true);
    expect(isString('hello')).toBe(true);
  });

  it('should return false if value is not of type string', () => {
    expect(isString(false as any)).toBe(false);
    expect(isString(true as any)).toBe(false);
    expect(isString(1 as any)).toBe(false);
    expect(isString(0 as any)).toBe(false);
    expect(isString([] as any)).toBe(false);
    expect(isString({} as any)).toBe(false);
  });
});
