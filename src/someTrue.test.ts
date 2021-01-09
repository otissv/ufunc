/* eslint-plugin-disable functional */

import { someTrue } from './someTrue';

describe('someTrue', () => {
  it('should return true if one or more items are truthy', () => {
    expect(someTrue([false, true])).toBe(true);
    expect(someTrue([false, 'a', 1, true])).toBe(true);
    expect(someTrue([false, () => true])).toBe(true);
  });

  it('should return false if any items are falsy', () => {
    expect(someTrue([() => false])).toBe(false);
    expect(someTrue([])).toBe(false);
  });
});
