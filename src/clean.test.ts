/* eslint-plugin-disable functional */

import { clean } from './clean';

const falsyValues = [0, false, null, undefined, '', 0x0, -0, 0.0];

describe('clean', () => {
  it('should remove falsy values', () => {
    expect(clean()(falsyValues)).toEqual([]);
    expect(clean()(['a', ...falsyValues])).toEqual(['a']);
  });

  it('should remove falsy values expect exclude options', () => {
    expect(clean({ exclude: [0] })(falsyValues)).toEqual([0, 0x0, -0, 0.0]);
    expect(clean({ exclude: 0 })(falsyValues)).toEqual([0, 0x0, -0, 0.0]);
  });

  it('should remove falsy values including exclude options', () => {
    expect(
      clean({
        include: ['0'],
      })(['0', ...falsyValues]),
    ).toEqual([]);

    expect(
      clean({
        include: 'a',
      })(['a', ...falsyValues]),
    ).toEqual([]);
  });
});
