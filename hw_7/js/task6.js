"use strict";

const input = document.querySelector("#validation-input");
const data = input.dataset.length;

function checkInputLength(event) {
  if (event.currentTarget.value.length === Number(data)) {
    input.classList.replace("invalid", "valid") || input.classList.add("valid");
  } else if (
    event.currentTarget.value.length !== Number(data) &&
    event.currentTarget.value.length !== 0
  ) {
    input.classList.add("invalid");
  } else if (event.currentTarget.value.length === 0) {
    input.classList.remove("invalid") || input.classList.remove("valid");
  }
}
input.addEventListener("change", checkInputLength);
