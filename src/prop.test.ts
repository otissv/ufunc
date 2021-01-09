/* eslint-disable functional/no-expression-statement */
import { prop } from './prop';

describe('prop', () => {
  it('should return value of prop', () => {
    const obj = {
      a: 'cat',
      b: 'dog',
      c: 'cow',
    };
    expect(prop(obj)('b')).toBe('dog');
  });

  it('should return undefined if key is not in objects', () => {
    const obj = {
      a: 'cat',
      b: 'dog',
      c: 'cow',
    };
    expect(prop(obj)('d')).toBe(undefined);
  });
});
