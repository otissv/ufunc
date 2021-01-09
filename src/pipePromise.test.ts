/* eslint-plugin-disable functional */

import { pipePromise } from './pipePromise';

describe('pipePromise', () => {
  it('should pipePromise function', async () => {
    const toUpper = async (string: string) => string.toUpperCase();
    const toSnake = async (string: string) => string.replace(' ', '_');
    const who = (name: string) => async (string: string) =>
      string.replace(/World/i, name);

    expect(await pipePromise(toUpper)('Hello, World!')).toBe('HELLO, WORLD!');
    expect(await pipePromise(toUpper, toSnake)('Hello World!')).toBe(
      'HELLO_WORLD!',
    );
    expect(
      await pipePromise(who('Universe'), toUpper, toSnake)('Hello World!'),
    ).toBe('HELLO_UNIVERSE!');

    expect(
      await pipePromise(
        who('Universe'),
        (string: string) => string.toUpperCase(),
        toSnake,
      )('Hello World!'),
    ).toBe('HELLO_UNIVERSE!');
  });

  it('should return value if no functions', async () => {
    expect(await pipePromise()('Hello, World!')).toBe('Hello, World!');
  });
});
