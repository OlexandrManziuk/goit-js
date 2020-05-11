"use strict";

const input = document.querySelector("#validation-input");
const dataSettedLength = Number(input.getAttribute("data-length"));

function checkInputLength(event) {
  if (event.target.value.length === dataSettedLength) {
    input.setAttribute("class", "valid");
  } else {
    input.setAttribute("class", "invalid");
  }
}

input.addEventListener("change", checkInputLength);
