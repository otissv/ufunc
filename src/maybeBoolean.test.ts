/* eslint-plugin-disable functional */
import { maybeBoolean } from './maybeBoolean';

describe('maybeBoolean', () => {
  it('should return value if value is of type boolean', () => {
    expect(maybeBoolean(true)).toBe(true);
    expect(maybeBoolean(false)).toBe(false);
  });

  it('should return 0 if value is of type is not boolean', () => {
    expect((maybeBoolean as any)(1)).toBe(false);
  });
});
