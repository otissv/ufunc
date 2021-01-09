/* eslint-disable functional/no-expression-statement */
import { dropRight } from './dropRight';

describe('dropRight', () => {
  it('should dropRight n items from the beginning of list', () => {
    expect(dropRight(2)([1, 2, 3, 4])).toEqual([3, 4]);
    expect(dropRight(2)([1, 2])).toEqual([]);
    expect(dropRight(4)([1, 2])).toEqual([]);
    expect(dropRight(4)([])).toEqual([]);
  });
});
