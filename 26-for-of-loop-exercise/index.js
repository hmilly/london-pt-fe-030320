/* ===================================== */
/* For these exercises use "for of" loop */
/* ===================================== */
/**
 * Exercise 1
 *
 * create a function {getIntegersOnly} which takes an array
 * as a param, get all integers from this array and return
 * a new array with these integers. If there is no integers it should return
 * empty array.
 */

function  getIntegersOnly(arr){
  let newArr = [];
    for (let num of arr){
      if (typeof num === 'number'){
        newArr.push(num);
      }
  }
  return newArr;
}
console.log(getIntegersOnly([1,3,2,9, 8, "ten", true]));

/**
 * Exercise 2
 * create a function {getEvenNumbers}, which takes an array of integers
 * and returns a new array with even numbers only, if there is no even
 * integers it should return an empty array
 */
function getEvenNumbers(arr) {
  let even = [];
  for (let num of arr){
    if (num > 0 && num % 2 === 0){
      even.push(num);
    } 
  }
  return even;
}
console.log(getEvenNumbers([1,3,2,9,8,0]));
/**
 * Exercise 3
 *
 * create a function {getEvenNumbersFromMixedArray},
 * which takes an array of values with different types and returns
 * a new array with even numbers only, if there is no even integers it
 * should return an empty array
 */
function getEvenNumbersFromMixedArray(arr){
  let newArr = [];
    for (let val of arr){
      if (typeof val === 'number' && val % 2 === 0){
        newArr.push(val);
      } 
    }
    return newArr;
}
console.log(getEvenNumbersFromMixedArray([1,3,2,9, 8, "ten"]));
/**
 * Exercise 4
 * create a function {getOddNumbers}, which takes an array of integers
 * and returns a new array with odd numbers only, if there is no odd
 * integers it should return an empty array
 */
function getOddNumbers(arr){
  let newArr = [];
    for (let item of arr){
      if (item % 2 === 1){
        newArr.push(item);
      } 
    }
    return newArr;
}
console.log(getOddNumbers([1,3,2,9,8,0]));
/**
 * Exercise 5
 * create a function {evenOddTransform} which takes
 * array of integers as a param. Take each integer
 * and if it's odd add 1, if it's even subtract 1
 *
 * If your param is [1,2,3,4,5] the result should be
 * [2,1,4,3,6]
 */
function evenOddTransform(arr){
  let newArr = [];
    for (let item of arr){
      if (item % 2 === 0){
        newArr.push(item -1);
      } else {
        newArr.push(item +1);
      }
    }
    return newArr;
}
console.log(evenOddTransform([1,3,2,9, 8]));