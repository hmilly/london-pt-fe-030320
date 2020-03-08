/**
 * Exercise 1
 *
 * create a global variable "myFavoriteAnimal" and
 * assign your favorite animal
 */
  global.alert = jest.fn();
  
 let myFavoriteAnimal = "Dog";

/**
 * Exercise 2
 *
 * create a function "myAnimalWithLog", which will have
 * console.log with the message "My favorite animal is `myFavoriteAnimal`"
 * Check developer tools in your browser for the message
 */
function myAnimalWithLog() {
  return console.log(`My favorite animal is ${myFavoriteAnimal}`);
}

/**
 * Exercise 3
 *
 * create a function "myAnimalWithWarn", which will have
 * console.warn with the message "My favorite animal is `myFavoriteAnimal`"
 * Check developer tools in your browser for the message
 * and see the difference with console.log
 */

function myAnimalWithWarn() {
   return console.warn(`My favorite animal is ${myFavoriteAnimal}`);
};
/**
 * Exercise 4
 *
 * create a function "myAnimalWithError", which will have
 * console.error with the message "My favorite animal is `myFavoriteAnimal`"
 * Check developer tools in your browser for the message
 * and see the difference with console.log
 */
function myAnimalWithError() {
  return console.error(`My favorite animal is ${myFavoriteAnimal}`);
}
/**
 * Exercise 5
 * create a function "myCity", which will have
 * alert(read about it) with the message "My favorite cat is YOUR_CITY"
 *
 */
function myCity() {
  return alert(`My favorite cat is Siem Reap`);
}
myCity();