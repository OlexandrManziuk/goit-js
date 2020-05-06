"use strict";

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", checkInputChange);

function checkInputChange(event) {
  if (event.currentTarget === 0) {
    output.textContent = "незнакомец";
  } else {
    output.textContent = event.currentTarget.value;
  }
}
