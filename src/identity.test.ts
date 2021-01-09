/* eslint-plugin-disable functional */

import { _, identity } from './identity';

describe('identity', () => {
  it('should return functions argument', () => {
    expect(identity('Hello, World!')).toBe('Hello, World!');
    expect(_('Hello, World!')).toBe('Hello, World!');
  });
});
