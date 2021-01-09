/* eslint-disable functional/no-expression-statement */
import { subtract } from './subtract';

describe('subtract', () => {
  it('should add to numbers together', () => {
    expect(subtract(5)(2)).toBe(3);
  });
});
