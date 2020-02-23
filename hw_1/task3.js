let message;
const ADMIN_PASSWORD = prompt("Ведите свой пароль");
if (ADMIN_PASSWORD === null) {
  alert("Отменено пользователем");
} else if (ADMIN_PASSWORD === "jqueryismyjam") {
  alert("Добро пожаловать!");
} else {
  alert("Доступ запрещен, неверный пароль!");
}
