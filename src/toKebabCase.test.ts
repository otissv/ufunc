/* eslint-plugin-disable functional */
import { toKebabCase } from './toKebabCase';
describe('toKebabCase', () => {
  it('should return a string in kebab case', () => {
    expect(toKebabCase('hello world')).toBe('hello-world');
    expect(toKebabCase('hello_world')).toBe('hello-world');
    expect(toKebabCase('hello-world')).toBe('hello-world');
    expect(toKebabCase('HelloWorld')).toBe('hello-world');
    expect(toKebabCase('!--hello-¿?-world--121-**%')).toBe('hello-world-121');

    expect(toKebabCase('')).toBe('');
  });

  it('should return an empty string if type is not of string', () => {
    expect((toKebabCase as any)(undefined)).toBe('');
    expect((toKebabCase as any)()).toBe('');
    expect((toKebabCase as any)(null)).toBe('');
    expect((toKebabCase as any)(true)).toBe('');
    expect((toKebabCase as any)(0)).toBe('');
    expect((toKebabCase as any)([])).toBe('');
    expect((toKebabCase as any)({})).toBe('');
  });
});
