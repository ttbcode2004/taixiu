"use strict";

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const chose0El = document.querySelector(".chose-0");
const chose1El = document.querySelector(".chose-1");
const text = document.querySelector(".text");
const dice0El = document.querySelector(".dice-0");
const dice1El = document.querySelector(".dice-1");
const dice2El = document.querySelector(".dice-2");
const newgame = document.querySelector(".newgame");

let num1,
  playing = true;
let num2;
let num3;

let sum;

const makeDice = () => {
  num1 = Math.trunc(Math.random() * 6) + 1;
  num2 = Math.trunc(Math.random() * 6) + 1;
  num3 = Math.trunc(Math.random() * 6) + 1;
  sum = num1 + num2 + num3;
  playing = true;
};

const inDice = () => {
  dice0El.src = `dice-${num1}.png`;
  dice1El.src = `dice-${num2}.png`;
  dice2El.src = `dice-${num3}.png`;
};

chose0El.addEventListener("click", function () {
  if (playing) {
    makeDice();
    inDice();
    left.classList.add("winner");
    if (sum >= 4 && sum <= 10) {
      text.textContent = "🎉❤️ WIN";
    } else {
      text.textContent = "💥😄 LOSE";
    }
    playing = false;
  }
});

chose1El.addEventListener("click", function () {
  if (playing) {
    makeDice();
    inDice();
    right.classList.add("winner");
    if (sum >= 11 && sum <= 17) {
      text.textContent = "🎉❤️ WIN";
    } else {
      text.textContent = "💥😄 LOSE";
    }
    playing = false;
  }
});

newgame.addEventListener("click", function () {
  left.classList.remove("winner");
  right.classList.remove("winner");
  document.querySelector(".xiu-num").value = "";
  document.querySelector(".tai-num").value = "";
  text.textContent = "CHOSE";
  playing = true;
});
