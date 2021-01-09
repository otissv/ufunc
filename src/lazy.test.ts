/* eslint-disable functional/no-expression-statement */
import { lazy } from './lazy';

describe('lazy', () => {
  it('should make non curried function lazy', () => {
    const sum = (a: number, b: number) => a + b;
    expect(lazy(sum)(1, 2)()).toBe(3);
  });

  it('should make curried function lazy', () => {
    const sum = (a: number) => lazy((b: number) => a + b);
    expect(sum(1)(2)()).toBe(3);
  });
});
