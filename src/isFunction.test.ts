/* eslint-plugin-disable functional */

import { isFunction } from './isFunction';

describe('isError', () => {
  it('should return true if value is an instance of Error', () => {
    expect(
      isFunction(function () {
        return undefined;
      }),
    ).toBe(true);
    expect(isFunction(() => undefined)).toBe(true);
  });

  it('should return false if value is not an instance of Error', () => {
    expect(isFunction('error')).toBe(false);
  });
});
