/* eslint-plugin-disable functional */
import { toTitle } from './toTitle';

describe('toTitle', () => {
  it('should return a string in title case', () => {
    expect(toTitle('hello world')).toBe('Hello World');
    expect(toTitle('Hello_world')).toBe('Hello_world');

    expect(toTitle('')).toBe('');
  });

  it('should return an empty string if type is not of string', () => {
    expect((toTitle as any)(undefined)).toBe('');
    expect((toTitle as any)()).toBe('');
    expect((toTitle as any)(null)).toBe('');
    expect((toTitle as any)(true)).toBe('');
    expect((toTitle as any)(0)).toBe('');
    expect((toTitle as any)([])).toBe('');
    expect((toTitle as any)({})).toBe('');
  });
});
