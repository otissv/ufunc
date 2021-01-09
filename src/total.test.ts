/* eslint-plugin-disable functional */
import { total } from './total';

describe('total', () => {
  it('should sum list', () => {
    expect(total([2, 4, 6, 8])).toBe(20);
  });
});
