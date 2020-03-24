/**
 * Exercise 1
 * create a function {logProperties} which will
 * take object as a param and console log each property in a format
 * "Property name: {propertyName}"
 */
  function logProperties(obj){
    for (let item in obj){
      console.log(item);
    }
  }
  console.log(logProperties({firstName: "Alex",
  lastName: "Smith",
  age: 25}))
/**
 * Exercise 2
 * Create a function {getAllValues} that takes an object
 * and returns an array of all values.
 */
function getAllValues(obj){
  let arr = [];
  for (let item in obj){
    arr.push(obj[item]);
  }
  return arr;
}
console.log(getAllValues({firstName: "Alex",
lastName: "Smith",
age: 25}));
/**
 * Exercise 3
 * Create a function {getAllValuesAsString} that takes an object
 * and returns all values as one string with space separation.
 */
function getAllValuesAsString(obj){
  let arr = [];
  for (let item in obj){
    arr.push(obj[item]);
  }
  return arr.join(" ");
}
console.log(getAllValuesAsString({firstName: "Alex",
lastName: "Smith",
age: 25}));
/**
 * Exercise 4
 * Create a function {propertyValueString} that takes object as a param
 * and log property and values as string in a next format:
 * 'PROPERTY: VALUE'
 */
function propertyValueString(obj){
  for (let item in obj){
     console.log(`${item}: ${obj[item]}`);
  }
}
console.log(propertyValueString({firstName: "Alex",
lastName: "Smith",
age: 25}));