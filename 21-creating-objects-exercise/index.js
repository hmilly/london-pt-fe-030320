/**
 * Exercise 1
 *
 * create an object "user", which has
 * properties "firstName", "lastName" and "age"
 *
 * PS: use console.log() to see the result
 */
const user = {
  firstName: "H",
  lastName: "M",
  age: 20
}
console.log(user);
/**
 * Exercise 2
 *
 * create an object "allTypes" with a property of types:
 * string, number, array, object, function, boolean
 *
 * PS: use console.log() to see the result
 */
const allTypes = {
  string: "Hello",
  number: 4,
  array: ["item1", "item2"],
  object: {
    objectItem1: "oItem1",
    objectItem2: "oItem2"
  },
  function: (x,y) => (x + y),
  boolean: true
}
  console.log(allTypes);
/**
 * Exercise 3
 *
 * create a function "createMovieObject" which takes
 * name, rating and ticketPrice and returns a movie object
 * with these properties
 *
 * PS: use console.log() to see the result
 */
function createMovieObject(name, rating, ticketPrice){
  return {
    "name": name,
    "rating": rating,
    "ticketPrice": ticketPrice
    }
} 
console.log(createMovieObject("The Mask", "U", "£2"));