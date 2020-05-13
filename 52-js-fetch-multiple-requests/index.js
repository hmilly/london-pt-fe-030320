
const resultEl = document.querySelector(".result");
const searchEl = document.querySelector("input");
const houseURL = "https://anapioficeandfire.com/api/houses/378";

let members = []

const getLinks = async (url) => {
  const memberLinks = await fetch(url).then((response) => response.json()).catch(error => error);
  memberLinks.swornMembers.map(async (e) => {
    const member = await fetch(e).then((r) => r.json())
    renders(member)
    return members.push(member)
  });
};

let renders = async (m) => {
  let li = document.createElement("li");
  li.innerHTML =
    `<p class="name">${m.name}</p>
    <p class="life">${m.born} – ${m.died}</p>
    <p class="gender"><strong>Gender: </strong>${m.gender}</p>
    <p class="culture"><strong>Culture: </strong>${m.culture}</p> `
  return resultEl.append(li);
};

getLinks(houseURL)

searchEl.addEventListener("keyup", async (a) => {
  resultEl.innerHTML = "";
  members.map((item) => {
    if (item.name.toLowerCase().includes(a.target.value.toLowerCase())) {
      return renders(item)
    }
  });
});

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

