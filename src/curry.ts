/**
 * Returns a curried equivalent of the provided function.
 *
 * @param   fn  - Function to be curried.
 *
 * @returns Returns a partial applied function which takes the remaining arguments.
 *
 * @usage
 * `import { curry } from "ufunc/curry"`
 *
 * @example
 * ```
 * const sum4 = (a: number, b: number, c: number, d: number) => a + b + c + d;
 *
 * const curriedSum4 = curry(sum4);
 * const f = curriedSum4(1, 3);
 * const g = f(3);
 * g(4) // 10;
 * ```
 */
export function curry<Args extends readonly any[], ReturnType>(
  fn: (...args: Args) => ReturnType,
): Curry<Args, ReturnType> {
  return (((...args: readonly any[]) => {
    if (args.length >= fn.length) {
      return (fn as Function)(...args) as ReturnType;
    } else {
      return (...more: readonly any[]) =>
        (curry(fn) as Function)(...args, ...more);
    }
  }) as unknown) as Curry<Args, ReturnType>;
}

/*
* Thanks to mbdavis
https://stackoverflow.com/questions/65564650/typescript-type-safe-curry-function-with-n-argument-with-argumenttypes/65586028#65586028
*/

// Drop N entries from array T
type Drop<
  N extends number,
  T extends readonly any[],
  I extends readonly any[] = readonly []
> = Length<I> extends N ? T : Drop<N, Tail<T>, Prepend<Head<T>, I>>;

// Add element E to array A (i.e Prepend<0, [1, 2]> = [0, 1, 2])
type Prepend<E, A extends readonly any[]> = readonly [E, ...A];

// Get the tail of the array, i.e Tail<[0, 1, 2]> = [1, 2]
type Tail<A extends readonly any[]> = A extends readonly [any]
  ? readonly []
  : A extends readonly [any, ...infer T]
  ? T
  : never;

// Get the head of the array, i.e Head<[0, 1, 2]> = 0
type Head<A extends readonly any[]> = A extends readonly [infer H]
  ? H
  : A extends readonly [infer H, ...any]
  ? H
  : never;

// Get the length of an array
type Length<T extends readonly any[]> = T['length'];

// Use type X if X is assignable to Y, otherwise Y
type Cast<X, Y> = X extends Y ? X : Y;

// Curry a function
type Curry<P extends readonly any[], R> = <T extends readonly any[]>(
  ...args: Cast<T, Partial<P>>
) => Drop<Length<T>, P> extends readonly [any, ...(readonly any[])]
  ? Curry<Cast<Drop<Length<T>, P>, readonly any[]>, R>
  : R;
