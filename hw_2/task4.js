"use strict";

const formatString = function(string) {
  // твой код
  let stringLengthAboveForty = string.length > 40;
  let restAfterForty = string.length - 40;
  if (stringLengthAboveForty) {
    string = string.substr(0, string.length - restAfterForty);
    console.log(`${string} ...`);
  } else {
    console.log(`${string}`);
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
