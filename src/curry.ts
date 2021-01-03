function sum(a: number, b: number, c: number) {
  return a + b + c;
}

function curry<T extends Function>(fn: T) {
  const fnArgs: string[] = args(fn);
  const cachedArgs: any[] = [];

  type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any
    ? A
    : never;

  type FnArguments = ArgumentTypes<typeof fn>;

  const curryReducer = function curryReducer(...args: FnArguments) {
    cachedArgs.push(...args);
    console.log(cachedArgs);
    return cachedArgs.length >= fnArgs.length
      ? fn(...cachedArgs)
      : curryReducer;
  };

  return curryReducer;
}

function args<T extends Function>(fn: T): string[] {
  const match = fn
    .toString()
    .replace(/[\r\n\s]+/g, ' ')
    .match(/(?:function\s*\w*)?\s*(?:\((.*?)\)|([^\s]+))/);

  return match
    ? match
        .slice(1, 3)
        .join('')
        .split(/\s*,\s*/)
    : [];
}

// const curried = curry(sum);
// const ab = curried(1, 1);
// const c = ab(8);

// console.log(c);
