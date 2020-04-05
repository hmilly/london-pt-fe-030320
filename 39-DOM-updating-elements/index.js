// OPEN index.html IN YOUR BROWSER
// OPEN DEV TOOLS, OPEN THE CONSOLE TAB
// CALL YOUR FUNCTIONS IN THE CONSOLE TO
// TEST YOUR CHANGES

/**
 * Exercise 1
 * create a function {setTitle} which takes a string as an argument
 * and displays it in the h1
 */

let setTitle = (str) => (document.querySelector("h1").innerText = str);

/**
 * Exercise 2
 * create a function {appendToTitle} which takes a string as an argument
 * and appends it to existing h1 text
 */
let appendToTitle = (str) => (document.querySelector("h1").innerText += str);

/**
 * Exercise 3
 * create a function {prependToTitle} which takes a string as an argument
 * and prepends it to existing h1 element text
 */
let prependToTitle = (str) => {
  let el = document.querySelector("h1");
  el.innerText = str + el.innerText;
};
/**
 * Exercise 4
 * create a function {setInnerHTMLForDiv} which takes a tag name and text as
 * arguments and uses innerHTML to create an element inside the div, and the
 * text is displayed inside that element. The element should the tag name
 * passed into the function
 */
let setInnerHTMLForDiv = (tagName, text) =>
  (document.querySelector(
    "div"
  ).innerHTML = `<${tagName}>${text}</${tagName}>`);

/**
 * Exercise 5
 * create a function {pushPtoDivWithText} which takes a string as an argument
 * should add 'p' tag with text 'Hi again'
 */
let pushPtoDivWithText = (str) => {
  let span = document.querySelector("div");
  let newEl = document.createElement("p");

  newEl.innerHTML = str;

  span.appendChild(newEl);
};
/**
 * Exercise 6
 *
 * create a function {setSrcToImage} which takes a url and image description
 * as arguments and set it as a src and alt attributes values
 * for existing img
 */
let setSrcToImage = (url, descript) => {
  let image = document.querySelector("img");
  image.src = url;
  image.alt = descript;
};

/**
 * Exercise 7
 *
 * create a function {setCodersInHoodsLink} which takes 2 arguments, a URL
 * and some text
 *
 * Find the a tag in the page, set the href to the URL and display the text
 *
 * Also add an attribute that opens your page in a new tab
 */
let setCodersInHoodsLink = (url, text) => {
  let tag = document.querySelector("a");

  tag.href = url;
  tag.innerText = text;
  tag.target = "_blank";
};
/**
 * Exercise 8
 *
 * create a function {disableResetBtn} which will disable button
 * with class "reset"
 */
let disableResetBtn = () => {
  let btn = document.querySelector('.reset');

  btn.disabled = true;
  
};
/**
 * Exercise 9
 *
 * create a function {disableBtns} which takes class name as an argument
 * and disable all buttons with this class name
 */
let disableBtns = (className) => {
  let btn = document.querySelectorAll(`.${className}`);

  for (var i = 0; i < btn.length; i++) {
    btn[i].disabled = true;
  }
};

/**
 * Exercise 10
 *
 * create a function {addClassToLi} which adds the class
 * "list_item_$" (where $ is a position in a list) to each li
 * that is inside the ul with the class "list"
 *
 * NOTE: We've added some CSS so when your classes are added,
 * you will see a difference
 */

let addClassToLi = () => {
  let items = document.querySelectorAll("li");

  for (var i = 0; i < items.length; i++) {
    items[i].className += ` list_item_${i}`;
  }
}

/**
 * Exercise 11
 *
 *  create a function {removeListItemClass} which removes the class
 * "list_item" from all li elements with this class
 */

const removeListItemClass = () => {
  let items = document.querySelectorAll(".list_item");
  for (var i = 0; i < items.length; i++) {
    items[i].removeAttribute("class");
  }
}

/**
 * Exercise 12
 *
 *  create a function {addId} which takes 2 arguments: an id and
 * a CSS selector. Use to selector to find an element, then add
 * the id to the element
 */
let addId = (id, select) => {
  let item = document.querySelector(select);
  item.id = id;
};

/**
 * Exercise 13
 *
 *  create a function {setStyles} which takes 3 arguments
 * 1 - a CSS property name,
 * 2 - property value,
 * 3 - a CSS selector
 *
 * use the selector to find all the elements which match, then
 * set the CSS property to the value
 */
let setStyles = (propName, propVal, selector) => {
  let item = document.querySelectorAll(selector);
  for (var i = 0; i < item.length; i++){
    item[i].setAttribute("style", `${propName}: ${propVal}`);
  }
};
