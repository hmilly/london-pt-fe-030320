/**
 * Exercise 1
 *
 * select p tags with getElementsByTagName and assign it
 * to variable {paragraphs}
 */
let paragraphs = document.getElementsByTagName("P");
/**
 * Exercise 2
 * select the first p tag with getElementsByTagName and assign it
 * to variable {firstParagraph}
 */
let firstParagraph = document.getElementsByTagName('p')[0];
/**
 * Exercise 3
 *
 * create a function {logAllParagraphs} and with forEach
 * to log each paragraph from {paragraphs}
 *
 * ATTENTION: check the type of {paragraphs} before doing forEach
 */
let logAllParagraphs = () => {

  let log = document.querySelectorAll("p");
  log.forEach(listItem => console.log(listItem));

}

/**
 * Exercise 4
 *
 * select all elements with class "text" with getElementsByClassName
 * and assign it to variable {textElements}
 */
let textElements = document.getElementsByClassName('text');
/**
 * Exercise 5
 *
 * select all elements that have classes "text" and "green"
 * with getElementsByClassName and assign it to variable {greenText}
 */
let greenText = document.getElementsByClassName('text green');
/**
 * Exercise 6
 *
 * select element where id is 'textId-3'(use getElementById) and assign it
 * to variable {thirdText}
 */
let thirdText = document.getElementById('kitten')
/* ==================================================== */
/*                  querySelector section               */
/* ==================================================== */
// !!! For this section use querySelector or querySelectorAll only !!!

/**
 * Exercise 7
 *
 * select the fourth "li" element and save it to {fourthListElement} variable
 */
let fourthListElement = document.querySelectorAll("li")[3];
/**
 * Exercise 8
 *
 * select all "li" elements and save it to {listElements} variable
 */
let listElements = document.querySelectorAll("li");
/**
 * Exercise 8
 *
 * select all "a" elements that are inside "ul" and assign it {listLinks}
 */
let listLinks = document.querySelectorAll("ul > li > a");
/**
 * Exercise 9
 *
 * select elements where the "data-community-name" attribute
 * is "codersinhoods" and assign it {communityElements}
 */
let communityElements = document.querySelectorAll("[data-community-name = codersinhoods]");
/**
 * Exercise 10
 *
 * select all elements with class "test" and assign it to a variable
 * {elementsForTesting}
 */
let elementsForTesting = document.querySelectorAll('.test');
/**
 * Exercise 11
 *
 * select the element with id "test-5" and assign it to a variable
 * {fifthTest}
 */
let fifthTest = document.querySelector('#test-5');
/**
 * Exercise 12
 *
 * select all the elements which are siblings of an element
 * with the class "links" and assign it to a variable {nextElements}
 */
let nextElements = document.querySelectorAll('ul > links');