/* eslint-plugin-disable functional */
import { or } from './or';

describe('or', () => {
  it('should', () => {
    expect(
      or((a: number) => a % 5 === 0)
        .or((a: number) => a % 3 === 0)
        .exec(5),
    ).toBe(true);

    expect(
      or((a: number) => a % 5 === 0)
        .or((a: number) => a % 3 === 0)
        .exec(3),
    ).toBe(true);
  });
});
