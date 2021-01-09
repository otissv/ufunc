/* eslint-disable functional/no-expression-statement */
import { drop } from './drop';

describe('drop', () => {
  it('should drop n items from  the end of list', () => {
    expect(drop(2)([1, 2, 3, 4])).toEqual([1, 2]);
    expect(drop(2)([1, 2])).toEqual([1, 2]);
    expect(drop(4)([1, 2])).toEqual([1, 2]);
    expect(drop(4)([])).toEqual([]);
  });
});
