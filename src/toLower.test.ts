/* eslint-plugin-disable functional */
import { toLower } from './toLower';

describe('toLower', () => {
  it('should return a string in lowercase', () => {
    expect(toLower('HELLO')).toBe('hello');
    expect(toLower('')).toBe('');
  });

  it('should return an empty string if type is not of string', () => {
    expect((toLower as any)(undefined)).toBe('');
    expect((toLower as any)()).toBe('');
    expect((toLower as any)(null)).toBe('');
    expect((toLower as any)(true)).toBe('');
    expect((toLower as any)(0)).toBe('');
    expect((toLower as any)([])).toBe('');
    expect((toLower as any)({})).toBe('');
  });
});
