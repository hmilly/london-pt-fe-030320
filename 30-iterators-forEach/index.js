// Examples
/**
 * with Inline function callback
 *
 * const callback = () => {}
 * array.foreach(callback)
 */

/**
 * with anonymous function callback
 *
 * array.foreach(arrayItem => {})
 */

/* ======================== */
/* external callback version */
/* ======================== */

/**
 * Exercise 1
 * create an arrow function {forEachCallback} that takes
 * param and logout it.
 *
 * create a function {logAllWithExternalCallback} that will take an array
 * and with forEach log every element from your array
 * use {forEachCallback} as a callback function for forEach
 */
const forEachCallback = (log) =>  console.log(log); 
console.log(forEachCallback("hi"));


const logAllWithExternalCallback = (arr) => arr.forEach(forEachCallback);


/* =========================== */
/* anonymous callbacks version */
/* =========================== */
/**
 *
 * create a function {logAllWithAnonymousCallback} which will
 * do same thing as {logAllWithExternalCallback} but with
 * anonymous callback
 */
const logAllWithAnonymousCallback = (arr) => arr
  .forEach(val => console.log(val)); 
/**
 * Exercise 2
 *
 * module 3
 *
 * create a arrow function {dividableBy3} that takes an array
 * of numbers as a param. With forEach, filter it and return a new
 * filtered array what will contain only numbers that dividable by 3
 * without remainder
 *
 * Ex: dividableBy3([3,7,9,11]) => return [3,9]
 */
const dividableBy3 = (arr) => {
  let newArr = [];
    arr.forEach(num => {
      if (num % 3 === 0) newArr.push(num);
      });
   return newArr;
    }
    console.log(dividableBy3([2, 3, 5, 6, 7, 8, 9]));
/**
 * Exercise 3
 * create an arrow function {oddNumbersSum} which takes an array
 * of numbers and return sum of all odd numbers.
 *
 * Use forEach to loop through the array.
 */
const oddNumbersSum = (arr) => {
    let newArr = [];
      arr.forEach(num => {
        if (num % 2 !== 0) newArr.push(num);
        });
     return newArr.reduce((tot, num) => (num + tot),0);
      }
console.log(oddNumbersSum([2, 3, 5, 6, 7, 8, 9]));


/**
 * Exercise 4
 * create an arrow function {totalLength} which takes an array
 * with different types. You need to get only strings and return
 * total of their lengths.
 *
 * Use forEach to loop through the array.
 *
 * Ex: ["cat", 5, "dog"] => 6
 */
const totalLength = (arr) => {
  let totLen = 0;
    arr.forEach(str => {
      if (typeof str === "string") totLen += str.length;
      })
   return totLen;
    }
    console.log(totalLength([2, 3, 5, 6, 7, 8, 9]));