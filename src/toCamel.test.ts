/* eslint-plugin-disable functional */
import { toCamel } from './toCamel';

describe('toCamel', () => {
  it('should return a string in camel case', () => {
    expect(toCamel('hello world')).toBe('helloWorld');
    expect(toCamel('hello_world')).toBe('helloWorld');
    expect(toCamel('hello-world')).toBe('helloWorld');
    expect(toCamel('HelloWorld')).toBe('helloWorld');
    expect(toCamel('')).toBe('');
  });

  it('should return an empty string if type is not of string', () => {
    expect((toCamel as any)(undefined)).toBe('');
    expect((toCamel as any)()).toBe('');
    expect((toCamel as any)(null)).toBe('');
    expect((toCamel as any)(true)).toBe('');
    expect((toCamel as any)(0)).toBe('');
    expect((toCamel as any)([])).toBe('');
    expect((toCamel as any)({})).toBe('');
  });
});
