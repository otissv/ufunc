/* eslint-plugin-disable functional */

import { maybeType } from './maybeType';

describe('maybeType', () => {
  it('should return value if value is the correct type', () => {
    expect(maybeType(null)('string')('hello')).toBe('hello');
    expect(maybeType(null)('string')('')).toBe('');
    expect(maybeType(null)('number')(1)).toBe(1);
    expect(maybeType(null)('number')(0)).toBe(0);
    expect(maybeType(null)('boolean')(true)).toBe(true);
    expect(maybeType(null)('boolean')(false)).toBe(false);
    expect(maybeType(null)('object')({})).toEqual({});
    expect(maybeType(null)('object')({ a: 1 })).toEqual({ a: 1 });
  });

  it('should return value none if value is the incorrect type', () => {
    expect(maybeType(null)('string')(true)).toBe(null);
    expect(maybeType(null)('string')(true)).toBe(null);
    expect(maybeType(null)('number')(true)).toBe(null);
    expect(maybeType(null)('number')(true)).toBe(null);
    expect(maybeType(null)('boolean')(0)).toBe(null);
    expect(maybeType(null)('boolean')(0)).toBe(null);
    expect(maybeType(null)('object')(true)).toEqual(null);
    expect(maybeType(null)('object')(true)).toEqual(null);
  });
});
