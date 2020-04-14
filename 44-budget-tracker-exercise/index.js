const productsContainer = document.querySelector("#products");
let count = 0;
let zero = -0.00;
let remainingBudget = document.querySelector("#remaining > span").innerText.slice(1, 6)
 
console.log(remainingBudget)
 
for (i in products) {
 
  let container = document.createElement("div");
 
  let img = document.createElement("img")
  img.src = `${products[i].img}`;
  container.appendChild(img)
 
  let h3 = document.createElement("h3")
  h3.innerText = `${products[i].name}`;
  container.appendChild(h3);
 
  let p = document.createElement("p")
  p.innerText = `${products[i].price}`
  container.appendChild(p);
 
  let select = document.createElement("select")
  select.id = `${products[i].id}`;
 
  select.addEventListener("change", (e) => {
    let money = (remainingBudget -= e.target.value).toFixed(2);
    if (money <= 0) {
      let times = () => {
        let rem = document.querySelector("#remaining")
        let cont = document.createElement("div");
        cont.className = `error`;
        cont.innerText = ">Not enough money left for that!"
        rem.appendChild(cont)
      }
      setTimeout(times(), 3000)
    } else {
      let moneyDiv = document.querySelector("#remaining > span")
      moneyDiv.innerText = `£${money}`
    }
  })
 
  container.appendChild(select);
 
  let option = document.createElement("option")
  option.innerText = `${count++}`
  select.appendChild(option)
 
  while (products[i].max_quantity !== 0) {
    let opt = document.createElement("option")
    opt.innerText = `${count++}`;
    opt.value = ((count - 1) * products[i].price).toFixed(2);
    select.appendChild(opt)
    products[i].max_quantity--;
  }
 
  productsContainer.appendChild(container);
  count = 0;
}
 
 
/*
 
displayed for 3 seconds and the select field doesn't
retain the selected value
  >>>>>>>>>> mine wont time out ??

Remaining budget should update when user selects new quantity

gergana said to add this back but it hurts my head so will leave it for now.
*/
 

