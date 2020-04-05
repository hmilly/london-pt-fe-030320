// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {createDOMElement} which takes a tag name
 * as an argument and returns a new DOM element.
 *
 * NOTE: we will use this function for other exercises.
 */
let createDOMElement = (tag) => {
  let el = document.createElement(tag);
  return el;
};
/**
 * Exercise 2
 *
 * create a function {addPTag} which takes some text as an argument,
 * create a "p" tag which displays the text and appends it to
 * the body of the document
 */
let addPTag = (str) => {
  let text = document.createElement("p");
  text.innerText = str;
  document.body.append(text);
};
/**
 * Exercise 3
 *
 * create a function {addElementWithClass} which takes tag name,
 * text and class name as arguments. It should create an element
 * which displays the text and has the class and appends
 * the element to the body
 */
let addElementWithClass = (tag, str, className) => {
  let el = document.createElement(tag);
  el.innerText = str;
  el.classList.add(className);
  document.body.append(el);
};

/**
 * Exercise 4
 *
 * create a function {addElementWithMultipleClasses} which takes tag name,
 * text and an array of classes. Create an element which displays the
 * text, has the array of classes and append it to the body
 */
let addElementWithMultipleClasses = (tag, str, classArr) => {
  let el = document.createElement(tag);
  el.innerText = str;
  classArr.forEach((item) => el.classList.add(item));
  document.body.append(el);
};
/**
 * Exercise 5
 *
 * create a function {buildAList} which takes a few arguments
 * 1 - list type ("ul" or "ol")
 * 2 - a class for the list element
 * 3 - a number of li elements that need to be created
 *
 * Each li should have the text "Item $" (where $ is it's position)
 * Add the list element to the body
 */
let buildAList = (listType, className, num) => {
  let el = document.createElement(listType);
  el.classList.add(className);
  document.body.append(el);

  for (let i = 0; i < num; i++) {
    let item = document.createElement("li");
    item.innerText = "Item " + (i + 1);
    el.appendChild(item);
  }
};
/**
 * Exercise 6
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {prependLiToList} which takes some text and
 * a class as arguments.
 *
 * Create a new li element which displays the text and has the class.
 *
 * Add that li to the list in your page, but the new li must be the
 * FIRST item in the list.
 *
 */
const prependLiToList = (text, cName) => {
  let list = document.querySelector("ul");
  let item = document.createElement("li");
  item.innerText = text;
  item.className = cName;
  list.prepend(item);
};

/**
 * Exercise 7
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {pushToSelectedPosition} which takes some text,
 * a class and a position (index).
 *
 * Create an li with the text and class.
 *
 * Add the li into the list at the position passed to this function.
 *
 */

let pushToSelectedPosition = (text, name, index) => {
  let list = document.querySelector("ul");
  let item = document.createElement("li");
  item.innerText = text;
  item.className = name;
  list.insertBefore(item, list.childNodes[index]);
};

/**
 * Exercise 8
 *
 * create a function {deleteSelectedElements} which takes
 * a parent selector and an element selector
 *
 * Find the parent element, then remove any ancestors of that
 * element which match the element selector
 *
 */

 let deleteSelectedElements = (parent, el) => {
  let par = document.querySelector(parent);
  let chi = document.querySelectorAll(el);
  chi.forEach(el => par.removeChild(el));
};