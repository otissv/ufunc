/* eslint-plugin-disable functional */

import { chain } from './chain';

describe('argNames', () => {
  it('should return new chain', () => {
    const toUpperCase = (str: string) => str.toUpperCase();
    const toSnake = (str: string) => str.replace(' ', '_');
    const actual = chain(toUpperCase).chain(toSnake);
    expect(Object.keys(actual)).toEqual(['chain', 'exec']);
  });

  it('should return new chain', () => {
    const toUpperCase = (str: string) => str.toUpperCase();
    const toSnake = (str: string) => str.replace(' ', '_');
    expect(chain(toUpperCase).chain(toSnake).exec('hello world')).toBe(
      'HELLO_WORLD',
    );
  });
});
