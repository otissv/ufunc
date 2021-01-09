/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/no-conditional-statement */
/* eslint-disable no-prototype-builtins */
/* eslint-disable functional/no-loop-statement */

export const deepMerge = <Rec extends Record<string, any>>(
  target: Rec,
): ((source: Rec) => Rec) => {
  const state = { ...target };

  const reducer = (target: Rec, source: Rec) => {
    for (const prop in source) {
      if (source.hasOwnProperty(prop)) {
        if (typeof source[prop] === 'function') {
          target[prop] = source[prop](state);
        } else if (
          source[prop] != null &&
          target[prop] &&
          typeof source[prop] === 'object'
        ) {
          reducer(target[prop], source[prop]);
        } else {
          target[prop] = source[prop];
        }
      }
    }

    return target;
  };

  return (source: Rec) => reducer({ ...target }, source);
};
