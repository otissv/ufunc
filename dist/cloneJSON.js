"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneJSON = void 0;
var tryCatch_1 = require("./tryCatch");
/**
 *  Clones JSON
 * @param json T[] | object: JSON object
 * @returns return a new cloned version
 */
function cloneJSON(json) {
    return tryCatch_1.tryCatch(function () { return JSON.parse(JSON.stringify(json)); });
}
exports.cloneJSON = cloneJSON;
//# sourceMappingURL=cloneJSON.js.map