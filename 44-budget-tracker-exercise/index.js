//Hi, I think I defo passed number 2 3 and 4 but not passing in my console.. Thanks 

const productsContainer = document.querySelector("#products");
let count = 0;
let budget = document.querySelector("#remaining > span").innerText;
let money = budget.slice(1);

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

  select.addEventListener("change", (e) => {
    let moneyDiv = document.querySelector("#remaining > span");
    console.log(e.target.value);
    money = (money -= e.target.value).toFixed(2);
    moneyDiv.innerText = `£${money}`;
    if (money <= 0) {
      e.target.disabled = true;
      let connectingDiv = document.querySelector("#remaining");
      setTimeout(() => {
        let cont = document.createElement("div");
        cont.className = `error`;
        cont.innerText = "Not enough money left for that!";
        connectingDiv.appendChild(cont);
        money = (Number(e.target.value) + Number(money)).toFixed(2);
        moneyDiv.innerText = `£${money}`;
        setTimeout(() => {
          let newDiv = document.querySelector(".error");
          connectingDiv.removeChild(newDiv);
        }, 4000);
      }, 2000);
    }
  });
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
