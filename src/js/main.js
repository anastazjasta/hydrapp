"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


const add = document.querySelector(".button--add-js");
const remove = document.querySelector(".button--remove-js");
let counterValue = 0;
let counterView = document.querySelector(".glass__counter");

counterView.innerHTML = counterValue;

add.addEventListener('click', (e) => {
  if (counterValue < 10) {
    counterValue++;
    console.log(counterValue);
    counterView.innerHTML = counterValue;
  }
})

remove.addEventListener('click', (e) => {
  if (counterValue > 0) {
  counterValue--;
  console.log(counterValue);
  counterView.innerHTML = counterValue;
}
})

