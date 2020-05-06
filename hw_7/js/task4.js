"use strict";

const counterObj = {
  counter: document.querySelector("#counter"),
  decrementButton: document.querySelector("[data-action=decrement]"),
  incrementButton: document.querySelector("[data-action=increment]"),
  valueSpan: document.querySelector("#value"),
};

let clickCount = 0;

const increment = (click) => {
  clickCount++;
  counterObj.valueSpan.textContent = clickCount;
};

const decrement = (click) => {
  clickCount--;
  counterObj.valueSpan.textContent = clickCount;
};

const handleCounterFn = (click) => {
  if (click.target === counterObj.incrementButton) {
    increment();
  } else if (click.target === counterObj.decrementButton) {
    decrement();
  }
};

counterObj.counter.addEventListener("click", handleCounterFn);
