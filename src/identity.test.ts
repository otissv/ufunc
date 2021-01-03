/* eslint-plugin-disable functional */

import { identity } from './identity';

describe('identity', () => {
  it('should return functions argument', () => {
    expect(identity('Hello, World!')).toBe('Hello, World!');
  });
});
