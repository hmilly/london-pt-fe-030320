// install and  import "readline-sync" npm package before you do exercises
var readlineSync = require('readline-sync');


let selectedItems = {
	book: "",
	movie: "",
	nextTrip: ""
};

const movies = [
	"The Invisible Man",
	"Never Rarely Sometimes Always",
	"Gretel & Hansel",
	"No time to die",
	"Bloodshot",
	"Onward",
	"Sonic"
];

const books = [
	"My Dark Vanessa",
	"Uncanny Valley",
	"Weather",
	"The night watchman",
	"All adults here",
	"Dear Edward",
	"Grown ups"
];

const countries = [
	"Italy",
	"France",
	"Germany",
	"Spain",
	"Portugal",
	"Denmark",
	"Netherland"
];

/**
 * Exercise 1
 *
 * create a sub menu "Books" where you need to render a list of {books}.
 * User should be able to select one. On selection store the response
 * to {user.book}.
 *
 * NOTE: You need to add option to go back, to main menu
 */
const chooseBook = (books, index) => {
	index = readlineSync.keyInSelect(books, 'Which book would you like to select?');
	console.log(`${index + 1}: ${books}`);
	user.book = chooseBook[index];
};




/**
 * Exercise 2
 *
 * create a sub menu "Movies" where you need to render a list of {movies}.
 * User should be able to select one. On selection store the response
 * to {user.movie}.
 *
 * NOTE: You need to add option to "go back", to main menu
 */
const chooseMovie = (movies, index) => {
	 index = readlineSync.keyInSelect(movies, 'Which Movie would you like to select?');
	console.log(`${index + 1}: ${movies}`);
	user.movie = chooseMovie[index];
};
/**
 * Exercise 3
 *
 * create a sub menu "Next destination" where you need to render a list
 * of {countries}. User should be able to select one. On selection store
 * the response to {user.nextTrip}.
 *
 * NOTE: You need to add option to go back, to main menu
 */
const chooseDest = (countries, index) => {
	console.log(`${index + 1}: ${countries}`);
	index = readlineSync.keyInSelect(countries, 'Which country would you like to select?');
	console.log(`${index + 1}: ${movies}`);
	user.nextTrip = chooseDest[index];
};

/**
 * Exercise 4
 *
 * create a top menu with categories: "Books", "Movies", "Next destination"
 * so user can pick one. User also should have the option "Exit".
 * When the user pick "Exit", log selected items.
 */

const topMenu = ["Books", "Movies", "Next destination"];

const  chooseMenu = () => {
  topMenu.forEach((topMenu, index) => {
    console.log(`${index + 1}: ${topMenu}`);
  });

  const choice = readlinesync.question("Make your choice");
  const choiceAsNumber = parseInt(choice);
  const chosenMenu = topMenu[choiceAsNumber - 1];

  if (chosenMenu === 0) {
		chooseBook()
	} else if (chosenMenu === 1){
		chooseMovie()
	} else if (chosenMenu === 2){
		chooseDest()
	} else {
    console.log("That is not a valid choice");
    chooseMenu();
  }
}