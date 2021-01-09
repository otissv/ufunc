/* eslint-plugin-disable functional */
import { dropCharsRight } from './dropCharsRight';

describe('dropCharsRight', () => {
  it('should drop n characters from end of string', () => {
    expect(dropCharsRight(0)('hello')).toBe('hell');
    expect(dropCharsRight(1)('hello')).toBe('hel');
    expect(dropCharsRight(3)('hello')).toBe('h');
    expect(dropCharsRight(0)('')).toBe('');
  });

  it('should return all characters if type is not of string', () => {
    expect((dropCharsRight as any)()('hello')).toBe('hello');
    expect((dropCharsRight as any)(null)('hello')).toBe('hello');
    expect((dropCharsRight as any)(undefined)('hello')).toBe('hello');
    expect((dropCharsRight as any)(true)('hello')).toBe('hello');
    expect((dropCharsRight as any)('a')('hello')).toBe('hello');
    expect((dropCharsRight as any)(0)()).toBe('');
    expect((dropCharsRight as any)(1)(null)).toBe('');
    expect((dropCharsRight as any)(3)(true)).toBe('');
  });
});
