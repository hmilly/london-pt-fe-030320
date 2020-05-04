const ingredients = [
  { name: "carrot", time: 500 },
  { name: "potato", time: 1000 },
  { name: "onion", time: 250 },
  { name: "celery", time: 150 },
  { name: "tomato", time: 100 },
];

/**
 * Exercise 1
 *
 * create a function {asyncCookIngredient} which takes 1 argument:
 *
 * an {ingredient} object (like the objects in the array on line 1)
 * with 2 keys: name and time.
 *
 * Return a promise which gets resolved after the time has elapsed.
 *
 * The value used to resolve the promise should be the original
 * {ingredient} object
 *
 */
let asyncCookIngredient = ({ name, time }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ name, time }), time)
  })
}

/**
 * Exercise 2
 *
 * create a function {asyncCookMeal} which will recieve an
 * array of {ingredientsToCook} and call {asyncCookIngredient} for
 * each ingredient
 *
 * Return a promise which gets resolved after all of the
 * ingredients are cooked
 *
 * The value used to resolve the promise should be and object
 * containing an array of {ingredientNames} and the {totalTime}:
 *
 * {
 *  ingredientNames: ["carrot", "onion"],
 *  totalTime: 750
 * }
 *
 */
let asyncCookMeal = (ingredientsToCook) => {

return new Promise((resolve, reject) => {
  let obj = {ingredientNames : [], totalTime : 0}

  ingredientsToCook.forEach((value, index, arr) => {
    asyncCookIngredient(value.name, value.time)

      obj.ingredientNames.push(value.name)
      obj.totalTime += value.time

      console.log(obj)

      setTimeout(() => {
        if (index === arr.length - 1) resolve(obj);
      }, value.time)

    })
  })

}