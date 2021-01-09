/* eslint-plugin-disable functional */
import { toLowerFirst } from './toLowerFirst';

describe('toLowerFirst', () => {
  it('should make first character lowercase', () => {
    expect(toLowerFirst('HELLO WORLD')).toBe('hELLO WORLD');
    expect(toLowerFirst('HELLO_WORLD')).toBe('hELLO_WORLD');
    expect(toLowerFirst('')).toBe('');
  });

  it('should return an empty string if type is not of string', () => {
    expect((toLowerFirst as any)(undefined)).toBe('');
    expect((toLowerFirst as any)()).toBe('');
    expect((toLowerFirst as any)(null)).toBe('');
    expect((toLowerFirst as any)(true)).toBe('');
    expect((toLowerFirst as any)(0)).toBe('');
    expect((toLowerFirst as any)([])).toBe('');
    expect((toLowerFirst as any)({})).toBe('');
  });
});
