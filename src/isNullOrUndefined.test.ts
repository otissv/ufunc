/* eslint-disable functional/no-expression-statement */
import { isNullOrUndefined } from './isNullOrUndefined';

describe('everyNullOrUndefined tests', () => {
  it('should return true if all are null', () => {
    expect(isNullOrUndefined(null)).toBe(true);
    expect(isNullOrUndefined(undefined)).toBe(true);
  });

  it('should return false one or more is not null', () => {
    expect(isNullOrUndefined(true)).toBe(false);
    expect(isNullOrUndefined(0)).toBe(false);
    expect(isNullOrUndefined({})).toBe(false);
    expect(isNullOrUndefined(false)).toBe(false);
    expect(isNullOrUndefined([])).toBe(false);
  });
});
