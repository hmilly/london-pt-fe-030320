/**
 * Exercise 1
 *
 * create a function {noStrings} that takes an array
 * as a parameter and return an array but without strings
 */
const noStrings = (arr) => {
  let newArr = [];
    arr.filter(item => {
      if (typeof item !== "string") newArr.push(item);
      });
   return newArr;
    }
/**
 * Exercise 2
 *
 * create a function {justStrings} that takes an array
 * as a parameter and return an array of strings by removing
 * every other type
 */
const justStrings = (arr) => {
  let newArr = [];
    arr.filter(item => {
      if (typeof item === "string") newArr.push(item);
    });
   return newArr;
    }
/**
 * Exercise 3
 *
 * create a function {justStringsLongerThan5} that takes
 * an array as a parameter and return an array of strings
 * that are longer than 5 characters
 */
const justStringsLongerThan5 = (arr) => arr
.filter(item => item.length > 5);
/**
 * Exercise 4
 *
 * create a function {numbersMoreThan13} that takes
 * an array as a parameter and return an array of numbers
 * that are more than 13
 */
const numbersMoreThan13 = (arr) => arr
.filter(num => num > 13);
/**
 * Exercise 5
 *
 * create a function {objectsOnly} that takes
 * an array as a parameter and return an array of objects
 */
const objectsOnly = (arr) => {
  let newArr = [];
    arr.filter(item => {
      if (typeof item === "object") newArr.push(item);
      });
   return newArr;
    }
/**
 * Exercise 6
 *
 * create a function {truthyOnly} that takes
 * an array as a parameter and return an array of truthy values.
 * IMPORTANT: You still need to keep number 0.
 */
const truthyOnly = (arr) => {
  let newArr = [];
    arr.filter(item => {
      if (item === 0 || item) newArr.push(item);
      });
   return newArr;
    }