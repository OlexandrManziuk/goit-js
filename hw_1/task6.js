let userInput;
let total = 0;
while (true) {
  userInput = prompt("Введите число");
  if (userInput === null) {
    break;
  }
  userInput = Number(userInput);
  total += userInput;
}
alert(`Общая сумма чисел равна ${total}`);
