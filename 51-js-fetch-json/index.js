const button = document.querySelector("button");
const result = document.querySelector(".result");
const input = document.querySelector("input");
// ================================

// URL: https://cat-fact.herokuapp.com/facts

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve` in this directory


button.addEventListener("click", () => {
    fetchData("https://cat-fact.herokuapp.com/facts")
})

/**
 * Exercise 1
 *
 * create a function {fetchData} which takes
 * a URL as an argument and sends a GET request.
 * When you get a response, return an array of facts.
 */
let fetchData = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
                let arr = data.all.map(item => item.text).sort(() => 0.5 - Math.random());
                let selected = arr.slice(0, 3);
                result.innerHTML = `<p>${selected[0]}</p><p>${selected[1]}</p><p>${selected[2]}</p>`;
            })
}
/**
 * Description of the application:
 *
 *
 *
 * As a user I should be able to:
 * 1. click on a button "Get random facts"
 * 2. view 3 random facts in ".result" element
 */
