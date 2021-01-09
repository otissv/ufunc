/* eslint-plugin-disable functional */
import { maybeArray } from './maybeArray';

describe('maybeArray', () => {
  it('should return value if value is an array', () => {
    expect(maybeArray([1])).toEqual([1]);
    expect(maybeArray([])).toEqual([]);
  });

  it('should return empty array if value is not an array ', () => {
    expect((maybeArray as any)(true)).toEqual([]);
  });
});
