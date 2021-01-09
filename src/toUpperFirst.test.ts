/* eslint-plugin-disable functional */
import { toUpperFirst } from './toUpperFirst';

describe('toUpperFirst', () => {
  it('should make the first character uppercase', () => {
    expect(toUpperFirst('hello world')).toBe('Hello world');
    expect(toUpperFirst('Hello_world')).toBe('Hello_world');
    expect(toUpperFirst('')).toBe('');
  });

  it('should return an empty string if type is not of string', () => {
    expect((toUpperFirst as any)(undefined)).toBe('');
    expect((toUpperFirst as any)()).toBe('');
    expect((toUpperFirst as any)(null)).toBe('');
    expect((toUpperFirst as any)(true)).toBe('');
    expect((toUpperFirst as any)(0)).toBe('');
    expect((toUpperFirst as any)([])).toBe('');
    expect((toUpperFirst as any)({})).toBe('');
  });
});
