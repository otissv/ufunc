/* eslint-plugin-disable functional */
import { pipe } from './pipe';

describe('pipe', () => {
  it('should pipe function', () => {
    const toUpper = (string: string) => string.toUpperCase();
    const toSnake = (string: string) => string.replace(' ', '_');
    const who = (name: string) => (string: string) =>
      string.replace(/World/i, name);

    expect(pipe(toUpper)('Hello, World!')).toBe('HELLO, WORLD!');
    expect(pipe(toUpper, toSnake)('Hello World!')).toBe('HELLO_WORLD!');
    expect(pipe(who('Universe'), toUpper, toSnake)('Hello World!')).toBe(
      'HELLO_UNIVERSE!',
    );
  });

  it('should return value if no functions', () => {
    expect(pipe()('Hello, World!')).toBe('Hello, World!');
  });
});
