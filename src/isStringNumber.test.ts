/* eslint-plugin-disable functional */

import { isStringNumber } from './isStringNumber';

describe('isStringNumber', () => {
  it('should return true if value is of string can be converted to a number', () => {
    expect(isStringNumber('1')).toBe(true);
    expect(isStringNumber('0')).toBe(true);
  });

  it('should return false if value is not of type string', () => {
    expect(isStringNumber('')).toBe(false);
    expect(isStringNumber('hello')).toBe(false);
    expect(isStringNumber(1 as any)).toBe(false);
  });
});
