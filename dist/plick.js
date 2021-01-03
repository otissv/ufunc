"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myName3 = exports.myName2 = exports.myName = exports.person = void 0;
exports.person = {
    firstName: 'Agent',
    lastName: 'Smith',
};
exports.myName = exports.person.firstName;
exports.myName2 = exports.person['firstName'];
exports.myName3 = {
    firstName: 'Agent',
    lastName: 'Smith',
}['firstName'];
//# sourceMappingURL=plick.js.map