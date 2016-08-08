'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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
    Object.keys(obj).forEach(function (key) {
      return obj[key] && _typeof(obj[key]) === 'object' && removeEmpty(obj[key]) || obj[key] == undefined && delete obj[key];
    });
    return obj;
  },


  /**
   * Removes all key/values pairs values from a list
   * @param  {object} list - List of items to be filtered
   * @return {object}      - New list with false items removed
   */
  cleanObjAll: function cleanObjAll(obj) {
    Object.keys(obj).forEach(function (key) {
      return obj[key] && _typeof(obj[key]) === 'object' && removeEmpty(obj[key]) || (obj[key] == null || obj[key] == 0) && delete obj[key];
    });
    return obj;
  },
  curry: function curry(fn) {
    return function f1(a) {
      return fn.apply(this, arguments);
    };
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

    return this.curry(function () {
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
      return this.curry(function () {
        return container(null);
      });
    };

    return this.curry(function () {
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
    return this.curry(function (conditions) {
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

    return this.curry(function (value) {
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
    return this.curry(function () {
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
    return objectsList.map(function (obj) {
      function pickAll(propsList, obj) {
        var result = {};
        var idx = 0;
        var len = propsList.length;
        while (idx < len) {
          var propItem = propsList[idx];
          result[propItem] = obj[propItem];
          idx += 1;
        }
        return result;
      };

      return pickAll(propsList, obj);
    });
  }
};

exports.default = utils;