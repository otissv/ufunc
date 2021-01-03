/* eslint-plugin-disable functional */

import { isEmpty } from './isEmpty';

describe('isEmpty', () => {
  afterEach(() => {
    process.env.NODE_ENV = 'test';
  });
  it('should return true value is empty', () => {
    process.env.NODE_ENV = 'development';
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([undefined])).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty('')).toBe(true);
  });

  it('should return false value is empty', () => {
    process.env.NODE_ENV = 'development';
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(false)).toBe(false);
    expect(isEmpty([0])).toBe(false);
    expect(isEmpty({ a: 1 })).toBe(false);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty('hello')).toBe(false);
  });
});
