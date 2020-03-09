"use strict";
let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt("Введите число");
  const inputNumber = Number(input);
  if (input === null) {
    break;
  } else if (Number.isNaN(inputNumber)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    numbers.push(inputNumber);
    total += inputNumber;
    console.log(`Общая сумма чисел равна ${total}`);
  }
}
