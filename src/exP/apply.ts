// console.log(complimentPerson(person));
export const apply = <Value1>(list1: readonly Value1[]) => <Value2>(
  list2: readonly Value2[],
): readonly unknown[] => list2.flatMap((f: any) => list1.map(f));

// Array.prototype.ap = function ap(m) {
//     return m.flatMap(f => this.map(f));
// };

// const bases = ['ice cream', 'banana', 'strawberry'];
// const toppings = ['nuts', 'chocolate sauce', 'sprinkles'];
// const combine = (a: string) => (b: string) => `${a} with ${b}`;
// const basesWith = bases.map(combine);

// const combos = apply(toppings)(basesWith);
// ["ice cream with nuts", "ice cream with chocolate sauce", "ice cream with sprinkles", "banana with nuts", "banana with chocolate sauce", "banana with sprinkles", "strawberry with nuts", "strawberry with chocolate sauce", "strawberry with sprinkles"]
