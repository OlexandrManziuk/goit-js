"use strict";
const checkForSpam = function(message) {
  // твой код
  let strToLowerCase = message.toLowerCase();
  let isInTheText = ["spam", "sale"];
  return (
    strToLowerCase.includes(isInTheText[0]) ||
    strToLowerCase.includes(isInTheText[1])
  );
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
