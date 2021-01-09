import { isFunction } from '../isFunction';

export const guard = <To>(...guards: readonly any[]) => <Value>(
  ...value: readonly Value[]
): To => {
  if (guards.length === 1) {
    return isFunction(guards[0]) ? guards[0](...value) : guards[0];
  } else {
    const checker = isFunction(guards[0][0])
      ? guards[0][0](...value)
      : guards[0][0];
    const result = isFunction(checker) ? checker(...value) : checker;

    return result
      ? isFunction(guards[0][1])
        ? guards[0][1](...value, result)
        : guards[0][1]
      : guard(...guards.slice(1))(...value);
  }
};

// const head = guard(
//   [(list: readonly unknown[]) => list.length === 0, 'No Head. List is empty'],
//   (list: readonly unknown[]) => list[0],
// );

// const tail = guard(
//   [(list: readonly unknown[]) => list.length === 0, 'No Tail. List is empty'],
//   (list: readonly unknown[]) => list.slice(1),
// );

// const last = guard(
//   [(list: readonly unknown[]) => list.length === 0, 'No Tail. List is empty'],
//   (list: readonly unknown[]) => list[list.length - 1],
// );

// const fizbuzz = guard<string | number>(
//   [(a: number) => a % 5 === 0 && a % 3 === 0, 'FizzBuzz'],
//   [(a: number) => a % 3 === 0, 'Fizz'],
//   [(a: number) => a % 5 === 0, 'Buzz'],
//   (a: number) => a,
// );

// const greeting = guard(
//   [(name: string) => name === 'Teacher', 'Hey Professor!'],
//   [(name: string) => name === 'Director', 'Hello Director.'],
//   [
//     (name: string) => name === 'Ricky',
//     (name: number) => `Still here ${name}? `,
//   ],
//   [(value: unknown) => isFunction(value), (fn: Function) => `Hey, ${fn()}`],
//   'Hello',
// );
