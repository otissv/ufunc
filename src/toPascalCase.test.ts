/* eslint-plugin-disable functional */
import { toPascalCase } from './toPascalCase';

describe('toPascalCase', () => {
  it('should return a string in pascal case', () => {
    expect(toPascalCase('hello world')).toBe('HelloWorld');
    expect(toPascalCase('hello_world')).toBe('HelloWorld');
    expect(toPascalCase('hello-world')).toBe('HelloWorld');
    expect(toPascalCase('HelloWorld')).toBe('HelloWorld');
    expect(toPascalCase('Hello World')).toBe('HelloWorld');
    expect(toPascalCase('__Hello World__')).toBe('HelloWorld');
    expect(toPascalCase('--Hello World--')).toBe('HelloWorld');
    expect(toPascalCase('!--hello-¿?-world--121-**%')).toBe('HelloWorld121');
    expect(toPascalCase('')).toBe('');
  });

  it('should return an empty string if type is not of string', () => {
    expect((toPascalCase as any)(undefined)).toBe('');
    expect((toPascalCase as any)()).toBe('');
    expect((toPascalCase as any)(null)).toBe('');
    expect((toPascalCase as any)(true)).toBe('');
    expect((toPascalCase as any)(0)).toBe('');
    expect((toPascalCase as any)([])).toBe('');
    expect((toPascalCase as any)({})).toBe('');
  });
});
