/* eslint-plugin-disable functional */
import { toUpper } from './toUpper';

describe('toUpper', () => {
  it('should return a string in uppercase', () => {
    expect(toUpper('hello')).toBe('HELLO');
    expect(toUpper('')).toBe('');
  });

  it('should return an empty string if type is not of string', () => {
    expect((toUpper as any)(undefined)).toBe('');
    expect((toUpper as any)()).toBe('');
    expect((toUpper as any)(null)).toBe('');
    expect((toUpper as any)(true)).toBe('');
    expect((toUpper as any)(0)).toBe('');
    expect((toUpper as any)([])).toBe('');
    expect((toUpper as any)({})).toBe('');
  });
});
