const resultEl = document.querySelector(".result");
const searchEl = document.querySelector("input");
const houseURL = "https://anapioficeandfire.com/api/houses/378";

// STORE YOUR SWORN MEMBERS IN {members}
let members = [];

// =============================

const getLinks = async () => {
  const memberLinks = await fetch(houseURL).then((response) => response.json());

  memberLinks.swornMembers.forEach(async (element) => {
    let member = await fetch(element).then((response) => response.json());
    members.push({
      name: member.name,
      gender: member.gender,
      born: member.born,
      culture: member.culture,
    });
  });
};

let matches = (item) => {
  let li = document.createElement("li");
  li.innerHTML =
    `<p class="name">${item.name}</p>
    <p class="life">${item.born} – ${item.died}</p>
    <p class="gender"><strong>Gender: </strong>${item.gender}</p>
    <p class="culture"><strong>Culture: </strong>${item.culture}</p> `
   resultEl.append(li);
};

searchEl.addEventListener("keydown", async (a) => {
  members.filter((item) =>
    item.name.toLowerCase().includes(a.target.value.toLowerCase())
      ? matches(item)
      : (resultEl.innerHTML = "")
  );
});

getLinks();

/**
 *
 * REQUIREMENTS:
 *
 * 1. I should be able to see all {swornMembers}
 * after the page has loaded.
 * 2. When I type a query inside the input it should only
 * display members whose name includes the query
 */

 /** 
  * HTML for each member: 
  * <li>
  *     <p class="name">Bilbo Baggins</p>
  *     <p class="life">1777 – 1888</p>
  *     <p class="gender"><strong>Gender: </strong>Male</p>
  *     <p class="culture"><strong>Culture: </strong>Hobbit</p>
  * </li>
 */

