'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('ramda/src/curry');

var _curry2 = _interopRequireDefault(_curry);

var _pipe = require('ramda/src/pipe');

var _pipe2 = _interopRequireDefault(_pipe);

var _fromPairs = require('ramda/src/fromPairs');

var _fromPairs2 = _interopRequireDefault(_fromPairs);

var _toPairs = require('ramda/src/toPairs');

var _toPairs2 = _interopRequireDefault(_toPairs);

var _pickAll = require('ramda/src/pickAll');

var _pickAll2 = _interopRequireDefault(_pickAll);

var _map = require('ramda/src/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utils = {
  /**
   * Remove false values from a list, expect 0's
   * @param  {array} list - List of items to be filtered
   * @return {array}      - New lsit with false items removed
   */

  clean: function clean(list) {
    return list.filter(function (e) {
      return e === 0 ? '0' : e;
    });
  },


  /**
   * Removes all false values from a list
   * @param  {array} list - List of items to be filtered
   * @return {array}      - New list with false items removed
   */
  cleanAll: function cleanAll(list) {
    return list.filter(function (e) {
      return e;
    });
  },


  /**
   * Removes all false key/values pairs from a list, expect 0's
   * @param  {object} list - List of items to be filtered
   * @return {object}      - New list with false items removed
   */
  cleanObj: function cleanObj(obj) {
    var cleaned = (0, _map2.default)(function (p) {
      if (p[1] != null) {
        return [p[0], p[1]];
      }
    });

    return (0, _pipe2.default)(_toPairs2.default, cleaned, _fromPairs2.default)(obj);
  },


  /**
   * Removes all key/values pairs values from a list
   * @param  {object} list - List of items to be filtered
   * @return {object}      - New list with false items removed
   */
  cleanObjAll: function cleanObjAll(obj) {
    var cleaned = (0, _map2.default)(function (p) {
      if (p[1] != null && p[1] !== 0) {
        return [p[0], p[1]];
      }
    });

    return (0, _pipe2.default)(_toPairs2.default, cleaned, _fromPairs2.default)(obj);
  },


  /**
  *  Filters a list of objects by using another list of objects as the criteria
  *  @param  {function}  fn(criteria, search)  Function to filter criteria from searh
  *  @param  {array}     criteria              List of objects to us as the criteria
  *  @param  {array}     search                List of objects to be searhed
  *  @return {array}                           New list of objects with only filterd properties
  */
  filterObjetsInList: function filterObjetsInList(fn, criteria, search) {
    var _this = this;

    return (0, _curry2.default)(function () {
      return _this.clean(criteria.map(function (c) {
        return search.map(function (s) {
          return fn(c, s);
        });
      })[0]);
    });
  },


  /**
  * Maps a function over a container and returns a new container
  * @param  {function} function to be applied to value
  * @param  {[object]}
  * @param  {[type]}
  * @return {[type]}     value to be mapped
  */
  fmap: function fmap(f, container, val) {
    if (val == null) {
      return (0, _curry2.default)(function () {
        return container(null);
      });
    };

    return (0, _curry2.default)(function () {
      return container(f(val));
    });
  },


  /**
   * Executes left if any of the condition are true, else right if false.
   * @param  {any}   left        If true.
   * @param  {any}   right       If fasle.
   * @param  {array} conditions  Array of conditions to be evaluated.
   * @return {any}               Execute left if true else right if false.
   */
  either: function either(left, right) {
    return (0, _curry2.default)(function (conditions) {
      var conditionsBool = Array.isArray(conditions) ? conditions.map(function (c) {
        return Boolean(c);
      }).some(function (b) {
        return b === true;
      }) : Boolean(conditions);

      if (conditionsBool) return typeof left === 'function' ? left() : left;

      return typeof right === 'function' ? right() : right;
    });
  },


  /**
  * Create a container with an immutabe value or returns null if no value passed.
  * @param  {any}  value      Value to be returned if true.
  * @param  {any}  emptyType  Value to be returned if false value param is null/undefined. Default is null.
  * @return {any}             Returns value or emptyType.
  */
  maybe: function maybe() {
    var emptyType = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

    return (0, _curry2.default)(function (value) {
      return value == null ? emptyType : value;
    });
  },


  /**
  * Create a container with an immutabe value or returns null if no value passed.
  * @param  {any}    value      Value to be returned if true
  * @param  {bool}   condition  Condition to be evaluated. Default is false.
  * @param  {any}    emptyType  Value to be returned if false value param is null/undefined. Default is null
  * @return {any}               Returns value or emptyType based on condition.
  */
  maybeIf: function maybeIf(value) {
    return (0, _curry2.default)(function () {
      var condition = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
      var emptyType = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
      return !condition ? emptyType : value;
    });
  },


  /**
  * @param  {array} propsList    List of key name to be picked.
  * @param  {array} objectsList  List of objects.
  * @return {array}              New array of objects only containing the picked items.
  */
  pickKeyValuesFromList: function pickKeyValuesFromList(propsList, objectsList) {
    return objectsList.map(function (i) {
      return (0, _pickAll2.default)(propsList, i);
    });
  }
};

exports.default = utils;