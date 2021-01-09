/* eslint-plugin-disable functional */
import { dropChars } from './dropChars';

describe('dropChars', () => {
  it('should drop n characters from beginning of string', () => {
    expect(dropChars(0)('hello')).toBe('ello');
    expect(dropChars(1)('hello')).toBe('llo');
    expect(dropChars(3)('hello')).toBe('o');
    expect(dropChars(0)('')).toBe('');
  });

  it('should return all characters if type is not of string', () => {
    expect((dropChars as any)()('hello')).toBe('hello');
    expect((dropChars as any)(null)('hello')).toBe('hello');
    expect((dropChars as any)(true)('hello')).toBe('hello');
    expect((dropChars as any)('a')('hello')).toBe('hello');
    expect((dropChars as any)(0)()).toBe('');
    expect((dropChars as any)(0)(null)).toBe('');
    expect((dropChars as any)(0)(undefined)).toBe('');
    expect((dropChars as any)(0)(1)).toBe('');
    expect((dropChars as any)(0)([])).toBe('');
    expect((dropChars as any)(0)({})).toBe('');
  });
});
