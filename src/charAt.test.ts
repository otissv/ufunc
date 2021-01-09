/* eslint-plugin-disable functional */
import { charAt } from './charAt';

describe('charAt', () => {
  it('should return nth character of string', () => {
    expect(charAt(0)('hello')).toBe('h');
    expect(charAt(1)('hello')).toBe('e');
    expect(charAt(4)('hello')).toBe('o');
    expect(charAt(0)('')).toBe('');
  });

  it('should return all characters if type is not of string', () => {
    expect((charAt as any)()('hello')).toBe('hello');
    expect((charAt as any)(null)('hello')).toBe('hello');
    expect((charAt as any)(true)('hello')).toBe('hello');
    expect((charAt as any)('a')('hello')).toBe('hello');

    expect((charAt as any)('a')()).toBe('');
    expect((charAt as any)('a')(null)).toBe('');
    expect((charAt as any)('a')(undefined)).toBe('');
    expect((charAt as any)('a')(1)).toBe('');
    expect((charAt as any)('a')([])).toBe('');
    expect((charAt as any)('a')({})).toBe('');
  });
});
