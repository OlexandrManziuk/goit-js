let credits = 23580;
let pricePerDroid = 3000;
let howManyDroidsToBuy = Number(
  prompt("Склько дроидов Вы хотите купить", "1-9999*")
);
let totalPrise = pricePerDroid * howManyDroidsToBuy;
let reminder = credits - totalPrise;
if (howManyDroidsToBuy === 0) {
  alert("Отменено пользователем");
} else if (totalPrise > credits) {
  alert("Недостаточно средств на счету!");
} else {
  alert(
    `Вы купили ${howManyDroidsToBuy} дроидов, на счету осталось ${reminder} кредитов.`
  );
}
