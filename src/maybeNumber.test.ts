/* eslint-plugin-disable functional */
import { maybeNumber } from './maybeNumber';

describe('maybeNumber', () => {
  it('should return value if value is of type number', () => {
    expect(maybeNumber(1)).toBe(1);
    expect(maybeNumber(0)).toBe(0);
  });

  it('should return 0 if value is of type is not number', () => {
    expect((maybeNumber as any)(true)).toBe(0);
  });
});
