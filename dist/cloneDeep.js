"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneDeepWithFn = void 0;
//TODO: use recursion to work with methods
function cloneDeepWithFn(obj) {
    return JSON.parse(JSON.stringify(obj));
}
exports.cloneDeepWithFn = cloneDeepWithFn;
//# sourceMappingURL=cloneDeep.js.map