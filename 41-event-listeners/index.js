// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {clickTheButton} which listens for a click
 * on a button inside div with class "click", and
 * logs a message in the console when a click occurs
 */

let clickTheButton = () => {
  const item = document.querySelector("button");

  item.addEventListener("click", () => console.log("you rang ?"));
};

/**
 * Exercise 2
 *
 * create a function {hoverOver} which listens for a hover over an
 * "a" tag inside div with class "mouseover" and logs a message in the console
 */
let hoverOver = () => {
  const item = document.querySelector("a");

  item.addEventListener("mouseover", () => console.log("you rang ?"));
};
/**
 * Exercise 3
 *
 * create a function {handleLeave} which listens for when the
 * cursor leaves the "a" tag inside div with class "mouseover"
 * and log a message in the console
 */
let handleLeave = () => {
  const item = document.querySelector("a");

  item.addEventListener("mouseleave", console.log("you rang ?"));
};
/**
 * Exercise 4
 *
 * create a function {focusOnMe} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 */
let focusOnMe = () => {
  const item = document.querySelector("input");

  item.addEventListener("mouseover", console.log("you rang ?"));
};
/**
 * Exercise 5
 *
 * create a function {clickElsewhere} which will log a message in the console
 * when first you focus on input which is inside 'div' with class 'input'
 * and then click on anything else
 */
let clickElsewhere = () => {
  const item = document.querySelector("input");

  item.addEventListener("focus", console.log("you rang ?"));
};
/**
 * Exercise 6
 *
 * create a function {pressAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key
 */
let pressAKey = () => {
  const item = document.querySelector("input");

  item.addEventListener("keydown", () => console.log("you rang ?"));
};
/**
 * Exercise 7
 *
 * create a function {releaseAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
let releaseAKey = () => {
  const item = document.querySelector("input");

  item.addEventListener("keyup", () => console.log("you rang ?"));
};
/**
 * Exercise 8
 *
 * create a function {inputToUpperCase} which will convert value of input
 * to uppercase when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
let inputToUpperCase = () => {
  let item = document.querySelector("input");
  item.addEventListener("keyup", () => (item.value = item.value.toUpperCase()));
};
/**
 * Exercise 9
 *
 * create a function {handleSelectChange} which will log selected option value
 * in console when you select an option in "select" with id "items"
 */
let handleSelectChange = () => {
  let item = document.querySelector("select");

  item.addEventListener("change", (e) => console.log(e.target.value));
};
/**
 * Exercise 10
 *
 * create a function {submitFormHandler} which will get values from form inputs
 * on submit, build an object where property names will be input names,
 * and values, input values and log it in the console
 */
let submitFormHandler = () => {
  let form = document.querySelector("form");
  let input = document.querySelectorAll("form > input");
  let obj = {};

  form.addEventListener("submit", () => {
    input.forEach((inp, i) =>
      i === 0 ? (obj.firstName = inp.value) : (obj.lastName = inp.value)
    );
    console.log(obj);
  });
};
submitFormHandler();
/**
 * Exercise 11
 *
 * create a function {handleScroll} which will get window vertical scroll position
 * on scroll, and log it in the console
 */

let handleScroll = () => {
  window.addEventListener(
    "scroll",
    (e) => {
      var vscroll = document.querySelector("body");

      var top = this.scrollY;
      console.log((vscroll.innerHTML = "Scroll Y: " + top + "px"));
    },
    false
  );
};
