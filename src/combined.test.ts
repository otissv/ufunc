/* eslint-plugin-disable functional */
import { combined } from './combined';

describe('combined', () => {
  it('should', () => {
    const bases = ['ice cream', 'banana', 'strawberry'];
    const toppings = ['nuts', 'chocolate sauce', 'sprinkles'];
    const fn = (a: string) => (b: string) => `${a} with ${b}`;

    expect(combined(fn)(toppings)(bases)).toEqual([
      'ice cream with nuts',
      'ice cream with chocolate sauce',
      'ice cream with sprinkles',
      'banana with nuts',
      'banana with chocolate sauce',
      'banana with sprinkles',
      'strawberry with nuts',
      'strawberry with chocolate sauce',
      'strawberry with sprinkles',
    ]);
  });
});
