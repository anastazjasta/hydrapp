"use strict";

// service worker registration - remove if you're not going to use it


// place your code below

const add = document.querySelector(".button--add-js");
const remove = document.querySelector(".button--remove-js");
let counterValue = 0;
let counterView = document.querySelector(".glass__counter");


const key = new Date().toISOString().slice(0, 10);
if (key in localStorage) {
  counterValue = localStorage.getItem(key);
}

counterView.innerHTML = counterValue;
add.addEventListener("click", (e) => {
  if (counterValue < 10) {
    counterValue++;
    counterView.innerHTML = counterValue;
    localStorage.setItem(key, counterValue);
  }
});

remove.addEventListener("click", (e) => {
  if (counterValue > 0) {
    counterValue--;
    counterView.innerHTML = counterValue;
    localStorage.setItem(key, counterValue);
  }
});
