const fillter = document.querySelector(".fillter");
const box = document.querySelector(".box");
const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");
const op1 = document.querySelector("#op1");
const op2 = document.querySelector("#op2");
const op3 = document.querySelector("#op3");
op1.addEventListener("click", open);

function open() {
  fillter.style.transform = "translateY(-150%)";
  fillter.style.transition = "ease-in-out 0.5s";
}

op2.addEventListener("click", close);

function close() {
  fillter.style.transition = "ease-in-out 0.5s";
  fillter.style.transform = "translateY(0)";
}

op3.addEventListener("click", random);
let count = 0;
function random() {
  box.classList.add("animate__shakeY");
  let interval = setInterval(loop, 100);
  function loop() {
    count += 1;
    const ran1 = Math.floor(Math.random() * 6) + 1;
    const ran2 = Math.floor(Math.random() * 6) + 1;
    const ran3 = Math.floor(Math.random() * 6) + 1;
    item1.style.backgroundImage = `url('./images/${ran1}.png')`;
    item2.style.backgroundImage = `url('./images/${ran2}.png')`;
    item3.style.backgroundImage = `url('./images/${ran3}.png')`;
    if (count >= 10) {
      clearInterval(interval);
      count = 0;
      box.classList.remove("animate__shakeY");
    }
  }
}

let isDown = false;
let currentX;
let currentY;
fillter.addEventListener("mousedown", function (event) {
  fillter.style.transition = "unset";
  isDown = true;
  currentX = event.clientX;
  currentY = event.clientY;
});

fillter.addEventListener("mouseup", function (event) {
  isDown = false;
  const x = event.clientX - currentX;
  const y = event.clientY - currentY;
  if (Math.abs(x) < 300 && Math.abs(y) < 300) {
    fillter.style.transform = "translateY(0)";
  } else {
    fillter.style.transition = "ease-in-out 0.5s";
    fillter.style.transform = "translateY(-150%)";
  }
});

fillter.addEventListener("mousemove", function (event) {
  if (isDown) {
    const x = event.clientX - currentX;
    const y = event.clientY - currentY;
    fillter.style.transform = `translate(${x}px, ${y}px)`;
  }
});
fillter.addEventListener("touchstart", function (event) {
  fillter.style.transition = "unset";
  isDown = true;
  currentX = event.touches[0].clientX;
  currentY = event.touches[0].clientY;
});

let x1;
let y1;
fillter.addEventListener("touchmove", function (event) {
  if (isDown) {
    x1 = event.touches[0].clientX - currentX;
    y1 = event.touches[0].clientY - currentY;
    fillter.style.transform = `translate(${x1}px, ${y1}px)`;
    fillter.style.transform = `translate(${x1}px, ${y1}px)`;
  }
});
fillter.addEventListener("touchend", function (event) {
  isDown = false;
  console.log(x1);
  if (Math.abs(x1) < 150 && Math.abs(y1) < 150) {
    fillter.style.transform = "translateY(0)";
  } else {
    fillter.style.transition = "ease-in-out 0.5s";
    fillter.style.transform = "translateY(-150%)";
  }
});
