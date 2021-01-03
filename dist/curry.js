"use strict";
function sum(a, b, c) {
    return a + b + c;
}
function curry(fn) {
    var fnArgs = args(fn);
    var cachedArgs = [];
    var curryReducer = function curryReducer() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        cachedArgs.push.apply(cachedArgs, args);
        console.log(cachedArgs);
        return cachedArgs.length >= fnArgs.length
            ? fn.apply(void 0, cachedArgs) : curryReducer;
    };
    return curryReducer;
}
function args(fn) {
    var match = fn
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
//# sourceMappingURL=curry.js.map