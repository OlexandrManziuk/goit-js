"use strict";

const categories = document.querySelector("#categories");
console.log(`В списке ${categories.children.length} категории`);

const item = document.querySelectorAll(".item");
item.forEach((element) =>
  console.log(
    `Категория: ${element.firstElementChild.textContent},`,
    `Количество элементов: ${element.lastElementChild.children.length};`
  )
);
