'use strict';
import R from 'ramda';

const utils = {
  /**
   * Remove false values from a list, expect 0's
   * @param  {array} list - List of items to be filtered
   * @return {array}      - New lsit with false items removed
   */
  clean (list) {
    return list.filter(e => e === 0 ? '0' : e);
  },

  /**
   * Removes all false values from a list
   * @param  {array} list - List of items to be filtered
   * @return {array}      - New list with false items removed
   */
  cleanAll (list) {
    return list.filter(e => e);
  },


  /**
   * Removes all false key/values pairs from a list, expect 0's
   * @param  {object} list - List of items to be filtered
   * @return {object}      - New list with false items removed
   */
  cleanObj (obj) {
    const cleaned = R.map(p => {
      if (p[1] != null) {
        return [p[0], p[1]];
      }
    });

    return R.pipe(R.toPairs, cleaned, R.fromPairs)(obj);
  },


  /**
   * Removes all key/values pairs values from a list
   * @param  {object} list - List of items to be filtered
   * @return {object}      - New list with false items removed
   */
  cleanObjAll (obj) {
    const cleaned = R.map(p => {
      if (p[1] != null && p[1] !== 0) {
        return [p[0], p[1]];
      }
    });

    return R.pipe(R.toPairs, cleaned, R.fromPairs)(obj);
  },


  /**
  *  Filters a list of objects by using another list of objects as the criteria
  *  @param  {function}  fn(criteria, search)  Function to filter criteria from searh
  *  @param  {array}     criteria              List of objects to us as the criteria
  *  @param  {array}     search                List of objects to be searhed
  *  @return {array}                           New list of objects with only filterd properties
  */
  filterObjetsInList (fn, criteria, search) {
    return R.curry(() => this.clean(criteria.map(c => search.map(s => fn(c, s)))[0]));
  },


  /**
  * Maps a function over a container and returns a new container
  * @param  {function} function to be applied to value
  * @param  {[object]}
  * @param  {[type]}
  * @return {[type]}     value to be mapped
  */
  fmap (f, container, val) {
    if (val == null) {
      return R.curry(() => container(null));
    };

    return R.curry(() => container(f(val)));
  },


  /**
   * xecutes left if any of the condition are true, else right if false.
   * @param  {any}   left        If true.
   * @param  {any}   right       If fasle.
   * @param  {array} conditions  Array of conditions to be evaluated.
   * @return {any}               Execute left if true else right if false.
   */
  ifElse (left, right) {
    return R.curry((conditions) => {
      let conditionsBool = Array.isArray(conditions) ? conditions.map(c => Boolean(c)).some(b => b === true) : Boolean(conditions);

      if (conditionsBool) return (typeof left === 'function') ? left() : left;

      return (typeof right === 'function') ? right() : right;
    });
  },


  /**
  * Create a container with an immutabe value or returns null if no value passed.
  * @param  {any}  value      Value to be returned if true.
  * @param  {any}  emptyType  Value to be returned if false value param is null/undefined. Default is null.
  * @return {any}             Returns value or emptyType.
  */
  maybe (emptyType = null) {
    return R.curry((value) => value == null ? emptyType : value);
  },


  /**
  * Create a container with an immutabe value or returns null if no value passed.
  * @param  {any}    value      Value to be returned if true
  * @param  {bool}   condition  Condition to be evaluated. Default is false.
  * @param  {any}    emptyType  Value to be returned if false value param is null/undefined. Default is null
  * @return {any}               Returns value or emptyType based on condition.
  */
  maybeIf (value) {
    return R.curry((condition = false, emptyType = null) => !condition ? emptyType : value);
  },


  /**
   * Executes left if condition is true, else right if false'
   * @param  {any} left       If true.
   * @param  {any} right      If fasle.
   * @param  {any} condition  Condition to be evaluated.
   * @return {any}            Execute left if true else right if false.
   */
  orElse (left, right) {
    return R.curry((conditions) => {
      const conditionsToBool = conditions.map(c => Boolean(c)).some(b => b === true);

      if (conditionsToBool) return (typeof left === 'function') ? left() : left;

      return (typeof right === 'function') ? right() : right;
    });
  },


  /**
  * @param  {array} propsList    List of key name to be picked.
  * @param  {array} objectsList  List of objects.
  * @return {array}              New array of objects only containing the picked items.
  */
  pickKeyValuesFromList (propsList, objectsList) {
    return objectsList.map(i => R.pickAll(propsList, i));
  }
};


export default utils;
