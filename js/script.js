var fans = document.querySelector(".fans");
fans.addEventListener("mouseover", function () {
  fans.innerText = "123K";
});
var fish = document.querySelector(".fish");
fish.addEventListener("mouseover", function () {
  fish.innerText = "47K";
});
var pets = document.querySelector(".pets");
pets.addEventListener("mouseover", function () {
  pets.innerText = "20K";
});

var toggle = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var h1 = document.querySelector("h1");
var body = document.querySelector("body");
toggle.addEventListener("click", function () {
  if (toggle.classList.contains("light")) {
    toggle.classList.remove("light");
    h1.innerText = "Stealth Quincy";
    ball.classList.remove("move-right");
  } else {
    body.classList.add("light");
    ball.classList.add("move-right");
    h1.innerText = "Party Quincy";
  }
});