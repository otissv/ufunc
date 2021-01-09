/* eslint-plugin-disable functional */
import { firstChar } from './firstChar';

describe('firstChar', () => {
  it('should return the first characters in string', () => {
    expect(firstChar('hello')).toBe('h');
    expect(firstChar('')).toBe('');
  });

  it('should return an empty string if type is not of string', () => {
    expect((firstChar as any)()).toBe('');
    expect((firstChar as any)(undefined)).toBe('');
    expect((firstChar as any)(null)).toBe('');
    expect((firstChar as any)(true)).toBe('');
    expect((firstChar as any)(0)).toBe('');
    expect((firstChar as any)([])).toBe('');
    expect((firstChar as any)({})).toBe('');
  });
});
