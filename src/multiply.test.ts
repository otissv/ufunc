/* eslint-disable functional/no-expression-statement */
import { multiply } from './multiply';

describe('multiply', () => {
  it('should add to numbers together', () => {
    expect(multiply(3)(3)).toBe(9);
  });
});
