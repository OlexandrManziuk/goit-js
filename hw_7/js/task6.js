"use strict";

const input = document.querySelector("#validation-input");
const data = input.dataset.length;

function checkInputLength(event) {
  if (event.currentTarget.value.length === Number(data)) {
    input.classList.replace("invalid", "valid") || input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}
input.addEventListener("change", checkInputLength);
