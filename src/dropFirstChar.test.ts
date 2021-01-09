/* eslint-plugin-disable functional */
import { dropFirstChar } from './dropFirstChar';

describe('dropFirstChar', () => {
  it('should return drop the first characters in string', () => {
    expect(dropFirstChar('hello')).toBe('ello');
    expect(dropFirstChar('')).toBe('');
  });

  it('should return an empty string if type is not of string', () => {
    expect((dropFirstChar as any)()).toBe('');
    expect((dropFirstChar as any)(undefined)).toBe('');
    expect((dropFirstChar as any)(null)).toBe('');
    expect((dropFirstChar as any)(true)).toBe('');
    expect((dropFirstChar as any)(0)).toBe('');
    expect((dropFirstChar as any)([])).toBe('');
    expect((dropFirstChar as any)({})).toBe('');
  });
});
