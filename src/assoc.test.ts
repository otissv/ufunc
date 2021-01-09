/* eslint-disable functional/no-expression-statement */
import { assoc } from './assoc';

describe('assoc', () => {
  it('should ', () => {
    expect(assoc()('b')(2)).toEqual({ b: 2 });
    expect(assoc({})('b')(2)).toEqual({ b: 2 });
    expect(assoc({ a: 1 })('b')(2)).toEqual({ a: 1, b: 2 });
    expect(assoc({ a: 1, b: 0 })('b')(2)).toEqual({ a: 1, b: 2 });
  });
});
