const total = 100;
const ordered = Number(prompt("Сколько единиц товара Вы хотите приобрести?"));

if (total >= ordered) {
  alert("Заказ оформлен, с вами свяжется менеджер");
} else if (total < ordered) {
  alert("На складе недостаточно товаров!");
}
