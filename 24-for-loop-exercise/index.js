const myName = "Holly"; // SET YOUR NAME
const visitors = ["Katie", "James", "Sam", "Zach", "Tracey"]; // Add at least 5 names
/**
 * Exercise 1
 *
 * create a function {greetVisitors} and inside it write for loop which
 * will greet all people from "visitors" for each person you should
 * console.log "Hi {name}, my name is {myName}!"
 */
function greetVisitors(){
  for (var i = 0; i < visitors.length; i++){
  console.log(`Hi ${visitors[i]}, my name is ${myName}!`);
}
}
// ========================
const numbers = [2, 123, 13, 1, 6, 84, 23, 12, 45]; // DON'T TOUCH THIS LINE :)
/**
 * Exercise 2
 * Create a function {getElementIndex} that uses a for loop to find the index of a
 * given item in {numbers}.
 * If the item is not present, return a string "Item not found"
 */
function getElementIndex(num){
    for (var i = 0; i < numbers.length; i++){
      if (num === numbers[i]){
        return i;
      } 
    } 
      return "Item not found";
    }
console.log(getElementIndex(84));
// ========================
/**
 * Exercise 3
 * Create a function {total} that will return sum of all numbers
 * from {numbers} array
 */
function total(){
  let num = 0;
  for (var i = 0; i < numbers.length; i++){
    num += numbers[i];
  }
  return num;
}
console.log(total());
// ========================
const numbersForIndexes = [6, 2, 16, 23, 84, 21, 9, 3]; // DON'T TOUCH THIS LINE :)
/**
 * Exercise 4
 * Create a function {addIndex} that takes {numbersForIndexes} array,
 * and returns a new array which includes each number + it's index
 */
function addIndex(){
  let indexArr = [];
  for (var i = 0; i < numbersForIndexes.length; i++){
    indexArr.push(i + numbersForIndexes[i]);
  }
  return indexArr;
}
console.log(addIndex());

const forLowestNumber = [5, 234, 96, 34, -34, 0, 23]; // DON'T TOUCH THIS LINE :)
/**
 * Exercise 5
 *  create function {lowestNumber} which will return the lowest integer
 * from {forLowestNumber}
 */
function lowestNumber(){
let lowest = forLowestNumber[0];
  for (var i = 1; i < forLowestNumber.length; i++){
    if (lowest >  forLowestNumber[i]){
      lowest = forLowestNumber[i];
    }
  }
    return lowest;
}
console.log(lowestNumber());