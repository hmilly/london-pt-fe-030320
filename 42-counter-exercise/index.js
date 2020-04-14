let step = 1;
let counter = 0;
/**
 * Exercise 1
 *
 * create a function {action} which will take a {symbol} param: "+" or "-".
 * increment {counter} by {step} if you pass "+", or
 * decrement {counter} by {step} if you pass "-"
 *
 * NOTE: ".counter_value" should always represent the current value of {counter}
 */
let counterVal = document.querySelector(".counter_value");

let action = (symbol) => {
  if (symbol === "+") {
    counter += step;
    counterVal.innerText = counterVal.value = counter;
  } else if (symbol === "-") {
    counter -= step;
    counterVal.innerText = counterVal.value = counter;
  }
};
/**
 * Exercise 2
 *
 * When the user clicks on "Set step" button, you need to:
 * 1. set {step} to the current value of input.
 * 2. reset value of input field to 1
 * 3. update value of ".step_value" to value of {step}
 *
 * NOTE: {step} should be an integer
 *
 */

let button = document.querySelector(".step_form");
button.addEventListener("submit", () => {
  let stepVal = document.querySelector(".step_value");
  let inputStep = document.querySelector("#step");
  stepVal.innerText = stepVal.value = step = Number(inputStep.value);
  inputStep.value = 1;
});
/**
 * Exercise 3
 *
 * handle click on "#decrement" button and
 * decrement counter by {step}
 *
 * NOTE: remember to use your {action} function
 */
let decrementClick = document.querySelector("#decrement");
decrementClick.addEventListener("click", () => action("-"));
/**
 * Exercise 4
 *
 * handle click on "#increment" button and
 * increment counter by {step}
 *
 * NOTE: remember to use your {action} function
 */
let incrementtClick = document.querySelector("#increment");
incrementtClick.addEventListener("click", () => action("+"));
/**
 * Exercise 5
 *
 * when the user clicks on "#auto_decrement",
 * {counter} should be decremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */
let interval = 0;

let autoDec = document.querySelector("#auto_decrement");
autoDec.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(() => {
    action("-");
  }, 1000);
});
/**
 * Exercise 6
 *
 * when the user clicks on "#auto_increment",
 * {counter} should be incremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */
let autoInc = document.querySelector("#auto_increment");
autoInc.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(() => {
    action("+");
  }, 1000);
});
/**
 * Exercise 7
 *
 * when the user clicks on "#stop_auto",
 * the auto counter should stop
 */
let stopbut = document.querySelector("#stop_auto");
stopbut.addEventListener("click", () => {
  clearInterval(interval);
});
