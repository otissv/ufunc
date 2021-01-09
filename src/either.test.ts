/* eslint-plugin-disable functional */

import { either } from './either';

describe('either', () => {
  it('should return Some if true', () => {
    const None = 'none';
    const Some = 'some';
    expect(either(None)(Some)(true)).toBe(Some);
    expect(either(() => None)(() => Some)(true)).toBe(Some);
    expect(either(() => None)(Some)(true)).toBe(Some);
    expect(either(None)(() => Some)(true)).toBe(Some);
  });

  it('should return None if false', () => {
    const None = 'none';
    const Some = 'some';
    expect(either(None)(Some)(false)).toBe(None);
    expect(either(() => None)(() => Some)(false)).toBe(None);
    expect(either(() => None)(Some)(false)).toBe(None);
    expect(either(None)(() => Some)(false)).toBe(None);
    expect(either(None)(() => undefined)(false)).toBe(None);
  });
});
