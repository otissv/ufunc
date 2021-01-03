/* eslint-plugin-disable functional */

import { compose } from './compose';

describe('compose', () => {
  it('should compose function', () => {
    const toUpper = (string: string) => string.toUpperCase();
    const toSnake = (string: string) => string.replace(' ', '_');
    const who = (name: string) => (string: string) =>
      string.replace(/World/i, name);

    expect(compose(toUpper)('Hello, World!')).toBe('HELLO, WORLD!');
    expect(compose(toUpper, toSnake)('Hello World!')).toBe('HELLO_WORLD!');
    expect(compose(toUpper, toSnake, who('Universe'))('Hello World!')).toBe(
      'HELLO_UNIVERSE!',
    );
  });

  it('should return value if no functions', () => {
    expect(compose()('Hello, World!')).toBe('Hello, World!');
  });
});
