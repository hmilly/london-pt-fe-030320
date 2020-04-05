// ============================================
// ALL IMPLEMENTATIONS SHOULD BE WITH {map} METHOD
// ============================================

/**
 * Exercise 1
 *
 * create an arrow function {convertToPositive} which takes
 * array of numbers, convert all negatives to positives and return
 * a new array.
 */
const convertToPositive = (arr) => arr
  .map(num => num >= 0 ? num : -num);
  console.log(convertToPositive([2, 0, -1, -3, 5, 9]));
/**,, 
 * Exercise 2
 *
 * create an arrow function {getAllNames} which will take
 * an array of users(objects) as parameter and return an
 * array on names
 *
 * Ex: getAllNames([
 *   {name: 'Alex', age: 26},
 *   {name: 'John', age: 25}
 * ]) will return ['Alex', 'John']
 */
const getAllNames = (obj) => {
  let names = [];
  obj.map(item => names.push(item.name));
  return names;
}
/**
 * Exercise 3
 *
 * create a function {greetAll} that takes array of names as a parameter
 * and return a new array of greetings "Hi, {name}!"
 */
const greetAll = (arr) => arr.map(name => `Hi, ${name}!`);
console.log(greetAll(["Trace", "John"]));
/**
 * Exercise 4
 *
 * create a function {multiplyAllNumbers} that takes an array as a param
 * and multiply all numbers inside array by 5 and return the whole array
 * with multiplied numbers
 */
const multiplyAllNumbers = (arr) => {
  let newArr = [];
  arr.map(item => typeof item === "number" ? newArr.push(item * 5) : newArr.push(item))
  return newArr;
}
console.log(multiplyAllNumbers([2, 1, 3, 5, 9]));