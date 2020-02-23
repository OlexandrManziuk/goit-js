let deliveryCost;
const deliveryToCountry = prompt("Введите страну, куда нужно доставить товар");
const country = deliveryToCountry.toLowerCase();
switch (country) {
  case "китай":
    deliveryCost = 100;
    alert(`Доставка в ${country} будет стоить ${deliveryCost} кредитов`);
    break;
  case "чили":
    deliveryCost = 250;
    alert(`Доставка в ${country} будет стоить ${deliveryCost} кредитов`);
    break;
  case "австралия":
    deliveryCost = 170;
    alert(`Доставка в ${country} будет стоить ${deliveryCost} кредитов`);
    break;
  case "индия":
    deliveryCost = 80;
    alert(`Доставка в ${country} будет стоить ${deliveryCost} кредитов`);
    break;
  case "ямайка":
    deliveryCost = 120;
    alert(`Доставка в ${country} будет стоить ${deliveryCost} кредитов`);
    break;
  default:
    alert("В вашей стране доставка не доступна");
}
