/* eslint-plugin-disable functional */

import { isError } from './isError';

describe('isError', () => {
  it('should return true if value is an instance of Error', () => {
    expect(isError(new Error())).toBe(true);
  });

  it('should return false if value is not an instance of Error', () => {
    expect(isError('error')).toBe(false);
  });
});
