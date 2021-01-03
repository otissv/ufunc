"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanAll = void 0;
/**
 * Removes all false values from a list
 * @param  list T[]: List of items to be filtered
 * @return new list with false items removed
 */
function cleanAll(list) {
    return list.filter(function (e) { return e; });
}
exports.cleanAll = cleanAll;
//# sourceMappingURL=cleanAll.js.map