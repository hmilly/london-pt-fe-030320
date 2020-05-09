const button = document.querySelector("button");
const result = document.querySelector(".result");
const input = document.querySelector("input");
// ================================

// URL: https://cat-fact.herokuapp.com/facts

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve` in this directory


/**
 * Exercise 1
 * 
 * button.addEventListener("click", () => {
    fetchData("https://cat-fact.herokuapp.com/facts")
})
 * 
 *let fetchData = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
                let arr = data.all.map(item => item.text).sort(() => 0.5 - Math.random());
                let selected = arr.slice(0, 3);
                result.innerHTML = `<p>${selected[0]}</p><p>${selected[1]}</p><p>${selected[2]}</p>`;
            })
}
 */
/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. click on a button "Get random facts"
 * 2. view 3 random facts in ".result" element
 */

button.addEventListener("click", async () => {
    let facts = await fetchData("https://cat-fact.herokuapp.com/facts")
    let factsArr = [];
    facts.map(item => factsArr.push(item.text))
    factsArr.sort(() => 0.5 - Math.random()).slice(0, 3);
    result.innerHTML = `<li>${factsArr[0]}</li><li>${factsArr[1]}</li><li>${factsArr[2]}</li>`;
})

let fetchData = async (url) => {
    let resp = await fetch(url).then(response => response.json())
    return resp.all
}