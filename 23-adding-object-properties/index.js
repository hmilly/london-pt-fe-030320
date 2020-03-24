// **** DO NOT TOUCH THIS CODE ****
// ============================
const user = {};
// ============================


/**
 * Exercise 1 
 * 
 * add property "firstName" to "user" and assign any name 
 */
user.firstName = "Troy";
console.log(user.firstName);
/**
 * Exercise 2
 * 
 * add property "lastName" to "user" and assign any last name 
 */
user.lastName = "grey";
console.log(user.lastName);
/**
 * Exercise 3
 * create a function "" which takes
 * 2 params, first - property name and second - property value
 * and set a new property for 'user' object
 */
function addANewProperty(propName, propValue){
  return user[propName] = propValue;
}
  console.log(addANewProperty("age", 20));
