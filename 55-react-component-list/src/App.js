import React from "react";
import "./App.css";

const APP_TITLE = "Awesome Pet Shop";

/**
 * Exercise: 1
 *
 * 1. Create a list element and render all animals as list items.
 *
 * Exercise 2
 *
 * 1. Display the APP_TITLE in an h1
 * 2. Display today's date in a p
 */

const TodaysDate = () => {
  const todayObj = new Date();
  let day = todayObj.getDay();
  let month = todayObj.getMonth() + 1;
  const year = todayObj.getFullYear();

  if (month < 10) month = `0${month}`;
  if (day < 10) day = `0${day}`;

  const today = `${day}/${month}/${year}`;
  return <p className="date">{today}</p>;
};

const App = () => {
  const animals = ["cat", "dog", "giraffe", "pig", "lion", "rabbit"];

  return (
    <div className="app">
      <h1>{APP_TITLE}</h1>
      <div>{TodaysDate()}</div>
      <ul>
        {animals.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
