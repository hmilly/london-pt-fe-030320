/**
 * Exercise #1
 *
 * forEach(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is
 * passed each element and the index.
 *
 */
const forEach = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    cb(el, i);
  }
};
/**
 * Exercise #2
 *
 * map(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * whatever was returned from each
 * time the callback was invoked.
 *
 */
const map = (arr, cb) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    const val = cb(el, i);
    newArr.push(val);
  }
  return newArr;
};

/**
 * Exercise #3
 *
 * filter(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * _only_ the elements for which the
 * callback returned a truthy value.
 *
 */
const filter = (arr, cb) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (cb(el, i)) {
      newArray.push(el);
    }
  }
  return newArray;
};

/**
 * Exercise #4
 *
 * find(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _first element_
 * for which the callback returns a
 * truthy value.
 *
 */

const find = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (cb(el, i)) {
      return el;
    }
  }
};

/**
 * Exercise #5
 *
 * findIndex(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _index of
 * the first element_ for which the
 * callback returns a truthy value.
 *
 */
const findIndex = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (cb(el, i)) {
      return i;
    }
  }
};

/**
 * Exercise #6
 *
 * every(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if every time the
 * callback was invoked it returned
 * a truthy value.
 *
 */
const every = (arr, cb) => {
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (!cb(el, i)) {
      result = false;
      break;
    }
  }
  return result;
};

/**
* Exercise #7
*

* some(array, callback)
*
* The callback is invoked for every
* element in the array and is passed
* each element and the index. The
* function returns a boolean value
* representing if _any_ time the
* callback was invoked it returned
* a truthy value.
*
*/
const some = (arr, cb) => {
  let result = false;
  for (i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (cb(el, i)) {
      result = true;
      break;
    }
  }
  return result;
};
/**
 * Exercise #8
 *
 * reduce(array, callback, initialValue)
 *
 * Reduce is often used for combining
 * values together.
 *
 * `reduce` should take 3 arguments:
 * `array`, `callback` and `initialValue`.
 *
 * The callback is invoked for every
 * element in the array and is passed
 * **the current cumulative value**,
 * each element and the index. Whatever
 * the callback returns is the new
 * cumulative value. The function
 * should return the final cumulative
 * value.
 *
 */
const reduce = (arr, cb, intVal) => {
  let acc = intVal === undefined ? 0 : intVal;
  for (let i = 0; i < arr.length; i++){
    acc = cb(acc, arr[i], i);
  } 
  return acc;
};
