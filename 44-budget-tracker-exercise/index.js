const productsContainer = document.querySelector("#products");
let count = 0;
let costs = { 1: 0, 2: 0, 3: 0, 4: 0 }

for (let i in products) {
  let container = document.createElement("div");
  let img = document.createElement("img");
  img.src = `${products[i].img}`;
  container.appendChild(img);

  let h3 = document.createElement("h3");
  h3.innerText = `${products[i].name}`;
  container.appendChild(h3);

  let p = document.createElement("p");
  p.innerText = `${products[i].price}`;
  container.appendChild(p);

  let select = document.createElement("select");
  select.id = `${products[i].id}`;
//
  select.addEventListener("change", (e) => {
    let moneyDiv = document.querySelector("#remaining > span");
    costs[e.target.id] = Number(e.target.value);
    let tot = 0
    for (let i in costs) {
      tot += costs[i]
    }
    budget = 50.00;
    budget -= tot
    budget = budget.toFixed(2)
    moneyDiv.innerText = `£${budget}`;
    if (budget < 0) {
      let connectingDiv = document.querySelector("#remaining");
      budget = (Number(budget) + Number(e.target.value)).toFixed(2);
      e.target.value = 0
      costs[e.target.id] = Number(e.target.value)
      moneyDiv.innerText = `£${budget}`;
      let cont = document.createElement("div");
      setTimeout(() => {
        cont.className = `error`;
        cont.innerText = "Not enough money left for that!";
        connectingDiv.appendChild(cont);
        setTimeout(() => {
          let newDiv = document.querySelector(".error");
          connectingDiv.removeChild(newDiv);
        }, 4000);
      }, 2000);
    }
  });
  //
  container.appendChild(select);

  let option = document.createElement("option");
  option.innerText = `${count++}`;
  select.appendChild(option);

  while (products[i].max_quantity !== 0) {
    let opt = document.createElement("option");
    opt.innerText = `${count++}`;
    opt.value = ((count - 1) * products[i].price).toFixed(2);
    select.appendChild(opt);
    products[i].max_quantity--;
  }

  productsContainer.appendChild(container);
  count = 0;
}
