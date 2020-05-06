"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const liForIngridients = ingredients.map((ingredient) => {
  const parentElement = document.querySelector("#ingredients");
  const li = document.createElement("li");
  li.textContent = ingredient;
  parentElement.appendChild(li);
});
console.log(liForIngridients);
