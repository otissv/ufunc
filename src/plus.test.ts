/* eslint-disable functional/no-expression-statement */
import { plus } from './plus';

describe('plus', () => {
  it('should add to numbers together', () => {
    expect(plus(1)(2)).toBe(3);
  });
});
