/* eslint-disable functional/no-expression-statement */
import { replicate } from './replicate';

describe('replicate', () => {
  it('should replicate values', () => {
    expect(replicate(3)(1)).toEqual([1, 1, 1]);
    expect(replicate(3)('a')).toEqual(['a', 'a', 'a']);
  });
});
