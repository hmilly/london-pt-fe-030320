/* =================== */
/*   ARROW FUNCTIONS   */
/* =================== */

/**
 * Exercise 1
 *
 * create an arrow function {isEqual} which takes 2 numbers as params
 * and return true if they are equal or false if not
 */
const isEqual = (a, b) => a === b; 
/**
 * Exercise 2
 *
 * create an arrow function {isLessOrEqual0} which takes number as a param
 * and return true if it equals or less than 0 or false if not
 */
const isLessOrEqual0 = (a) =>  (a <= 0); 
/**
 * Exercise 3
 *
 * create an arrow function {timeToSeconds} that takes
 * 2 params. First - hours, second - minutes, and as a result
 * return amount of seconds.
 *
 * Don't forget to set default values for your params, 0 and 0
 * so you will not break your function if you forget to pass params
 */
const timeToSeconds = (hour = 0, minutes = 0) => (
  seconds = 60 * (minutes += (hour * 60))
);

console.log(timeToSeconds(1));
/**
 * Exercise 4
 *
 * create an arrow function {isGameWorthTheCandle} which
 * takes 3 params. probability, prize and
 * pay. If probability * prize is more than
 * pay then return true otherwise return false
 */
const isGameWorthTheCandle = (probability, prize, pay) => ((probability * prize) > pay === true);
/**
 * Exercise 5
 *
 * create an arrow function {longerString} that takes two strings
 * as parameters and returns the string which is longest. If the strings are
 * equal in length return the string "Equal!"
 */
const longerString = (str1, str2) => {
  if (str1.length === str2.length){
    return "Equal!";
  } else if (str1.length > str2.length) {
    return str1;
  } else {
    return str2;
}
}
console.log(longerString("hello", "hello"));
