/* eslint-plugin-disable functional */

import {
  maybeType,
  maybeString,
  maybeNumber,
  maybeBoolean,
  maybeObject,
  maybeArray,
} from './maybeType';

describe('maybeType', () => {
  it('should return value if value is the correct type', () => {
    expect(maybeType(null, 'string')('hello')).toBe('hello');
    expect(maybeType(null, 'string')('')).toBe('');
    expect(maybeType(null, 'number')(1)).toBe(1);
    expect(maybeType(null, 'number')(0)).toBe(0);
    expect(maybeType(null, 'boolean')(true)).toBe(true);
    expect(maybeType(null, 'boolean')(false)).toBe(false);
    expect(maybeType(null, 'object')({})).toEqual({});
    expect(maybeType(null, 'object')({ a: 1 })).toEqual({ a: 1 });
  });

  it('should return value none if value is the incorrect type', () => {
    expect(maybeType(null, 'string')(true)).toBe(null);
    expect(maybeType(null, 'string')(true)).toBe(null);
    expect(maybeType(null, 'number')(true)).toBe(null);
    expect(maybeType(null, 'number')(true)).toBe(null);
    expect(maybeType(null, 'boolean')(0)).toBe(null);
    expect(maybeType(null, 'boolean')(0)).toBe(null);
    expect(maybeType(null, 'object')(true)).toEqual(null);
    expect(maybeType(null, 'object')(true)).toEqual(null);
  });
});

describe('maybeString', () => {
  it('should return value if value is of type string', () => {
    expect(maybeString('hello')).toBe('hello');
    expect(maybeString('')).toBe('');
  });

  it('should return empty value if value is of type is not string', () => {
    expect((maybeString as any)(true)).toBe('');
  });
});

describe('maybeNumber', () => {
  it('should return value if value is of type number', () => {
    expect(maybeNumber(1)).toBe(1);
    expect(maybeNumber(0)).toBe(0);
  });

  it('should return 0 if value is of type is not number', () => {
    expect((maybeNumber as any)(true)).toBe(0);
  });
});

describe('maybeBoolean', () => {
  it('should return value if value is of type boolean', () => {
    expect(maybeBoolean(true)).toBe(true);
    expect(maybeBoolean(false)).toBe(false);
  });

  it('should return 0 if value is of type is not boolean', () => {
    expect((maybeBoolean as any)(1)).toBe(false);
  });
});

describe('maybeObject', () => {
  it('should return value if value is of type object', () => {
    expect(maybeObject({ a: 1 })).toEqual({ a: 1 });
    expect(maybeObject({})).toEqual({});
    expect(maybeObject([])).toEqual([]);
    expect((maybeObject as any)(null)).toBe(null);
  });

  it('should return empty object if value is of type is not object', () => {
    expect((maybeObject as any)(1)).toEqual({});
  });
});

describe('maybeArray', () => {
  it('should return value if value is an array', () => {
    expect(maybeArray([1])).toEqual([1]);
    expect(maybeArray([])).toEqual([]);
  });

  it('should return empty array if value is not an array ', () => {
    expect((maybeArray as any)(true)).toEqual([]);
  });
});
