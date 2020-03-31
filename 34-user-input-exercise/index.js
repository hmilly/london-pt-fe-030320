// install and  import "readline-sync" npm package before you do exercises
var readlineSync = require('readline-sync');
/**
 * Exercise 1
 *
 * ask user for a name and assign a response to variable {name}
 */
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

//===== DO NOT TOUCH THIS BLOCK =====
console.log(`Hi ${name}!`);
console.log("=====================");
console.log(`Let me do math for you!`);
console.log("=====================");
//===================================

/**
 * Exercise 2
 *
 * offer user to do some math, ask to provide a math symbol and
 * offer a few options: +, -, * or /
 * Save response to {selectedSymbol} variable.
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get correct symbol
 * var readlineSync = require('readline-sync'),
 */


symbol = ['/', '*', '-', '+'];
index = readlineSync.keyInSelect(symbol, 'Which equation would you like to use? divide: /, times: *, minus: -, plus: + ?');
console.log('Working out answer with: ' + symbol[index]);

/**
 * Exercise 3
 *
 * ask user for the first number and assign response to a variable {number1}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */
number1 = readlineSync.keyIn('What will the first number be? ',
  {limit: '$<1-9>'});
  console.log(number1)
/**
 * Exercise 4
 *
 * ask user for the second number and assign response to a variable {number2}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */
number2 = readlineSync.keyIn('What will the second number be? ',
  {limit: '$<1-9>'});
  console.log(number2)
/**
 * Exercise 5
 *
 * take numbers that user provided to you and do math based on user
 * selected symbol.
 *
 * show the result to the user
 * 
 * 
 */

let result = eval(`${number1} ${symbol[index]} ${number2}`);
console.log("=====================");
console.log(`Here you go, the result is ${result}`);
