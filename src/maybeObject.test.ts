/* eslint-plugin-disable functional */
import { maybeObject } from './maybeObject';

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
