/* eslint-plugin-disable functional */
import { toSnakeCase } from './toSnakeCase';

describe('toSnakeCase', () => {
  it('should return a string in pascal case', () => {
    expect(toSnakeCase('hello world')).toBe('hello_world');
    expect(toSnakeCase('hello_world')).toBe('hello_world');
    expect(toSnakeCase('hello-world')).toBe('hello_world');
    expect(toSnakeCase('HelloWorld')).toBe('hello_world');
    expect(toSnakeCase('Hello World')).toBe('hello_world');
    expect(toSnakeCase('__Hello World__')).toBe('hello_world');
    expect(toSnakeCase('--Hello World--')).toBe('hello_world');
    expect(toSnakeCase('!--hello-¿?-world--121-**%')).toBe('hello_world_121');
    expect(toSnakeCase('')).toBe('');
  });

  it('should return an empty string if type is not of string', () => {
    expect((toSnakeCase as any)(undefined)).toBe('');
    expect((toSnakeCase as any)()).toBe('');
    expect((toSnakeCase as any)(null)).toBe('');
    expect((toSnakeCase as any)(true)).toBe('');
    expect((toSnakeCase as any)(0)).toBe('');
    expect((toSnakeCase as any)([])).toBe('');
    expect((toSnakeCase as any)({})).toBe('');
  });
});
