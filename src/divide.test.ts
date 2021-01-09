/* eslint-disable functional/no-expression-statement */
import { divide } from './divide';

describe('divide', () => {
  it('should add to numbers together', () => {
    expect(divide(1)(2)).toBe(0.5);
  });
});
