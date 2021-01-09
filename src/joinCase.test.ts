/* eslint-plugin-disable functional */
import { joinCase } from './joinCase';

describe('joinCase', () => {
  it('should join string case', () => {
    expect(joinCase('-')('hello')).toBe('hello');
    expect(joinCase('-')('hello world')).toBe('hello-world');
    expect(joinCase('_')('hello world')).toBe('hello_world');
    expect(joinCase('')('Hello World')).toBe('helloworld');
    expect((joinCase as any)()('')).toBe('');
  });

  it('should return an empty string if type is not of string', () => {
    expect((joinCase as any)('-')()).toBe('');
    expect((joinCase as any)('-')(undefined)).toBe('');
    expect((joinCase as any)('-')(null)).toBe('');
    expect((joinCase as any)('-')(true)).toBe('');
    expect((joinCase as any)('-')(0)).toBe('');
    expect((joinCase as any)('-')([])).toBe('');
    expect((joinCase as any)('-')({})).toBe('');
  });
});
