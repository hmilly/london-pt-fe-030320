// i passed all tests on my pc. My laptop says I fail some though.. (had uploaded wrong test in this one earlier, whoops)


let addCounterEl = document.querySelector("#new_timer");
const timersContainerEl = document.querySelector(".timers");
let timersCount = 0;
let arr = [];

let createTimerEl = () => {
  let sec = 0;
  let mili = 0;
  let time = 0;
  //add div timer elem
  let container = document.createElement("div");
  container.className = `timer`;
  container.classList.add(`timer_${timersCount}`);
  //add div remove elem
  let divRemove = document.createElement("div");
  divRemove.className = `remove`;
  // listener added to remove timers and update count
  divRemove.addEventListener("click", (e) => {
    timersCount--;
    e.target.parentNode.remove();
    arr.splice(e.target, 1);
  });
  container.appendChild(divRemove);
  //add h3 and span elem
  let h3 = document.createElement("h3");
  h3.innerHTML = `${sec} <span>${mili}</span>`;
  container.appendChild(h3);
  //add div button container
  let divButtonCont = document.createElement("div");
  divButtonCont.className = `btn`;
  container.appendChild(divButtonCont);
  // add reset button event listerner that resets time to 0 when clicked
  let btnReset = document.createElement("button");
  btnReset.className = "reset";
  btnReset.innerText = "Reset";
  btnReset.addEventListener("click", () => (time = 0));
  divButtonCont.appendChild(btnReset);
  //add stop button and event listerner that stops timer when clicked
  let btnStop = document.createElement("button");
  btnStop.className = "stop";
  btnStop.innerText = "Stop";
  btnStop.addEventListener("click", () => clearInterval(int));
  divButtonCont.appendChild(btnStop);
  //add timer with immediate start time!
  let int = setInterval(() => {
    time++;
    sec = Math.floor(time / 100);
    mili = time % 100;
    h3.innerHTML = `${sec} <span>${mili}</span>`;
  }, 10);
  //if OVER 5 timers max stop adding.
  if (timersCount < 6 || arr.length < 5) {
    arr.push(timersContainerEl.appendChild(container));
    return container;
  }
};
//when clicked, new timer created.
addCounterEl.addEventListener("click", () => {
  createTimerEl(timersCount++);
});
