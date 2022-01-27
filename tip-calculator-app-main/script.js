let billPriceContainer = document.querySelector("#input_bill");
let peopleCountContainer = document.querySelector("#input_people");
let tipPercentContainer = document.querySelectorAll(".data_percent div");
let customPercentContainer = document.querySelector("#inpcustom");
let billPrice = 0;
let peopleCount = 0;
let tipPercent = 0;

billPriceContainer.addEventListener("change", function (e) {
  billPrice = e.target.value;
});

peopleCountContainer.addEventListener("change", function (e) {
  peopleCount = e.target.value;
  calculateTotal();
});

customPercentContainer.addEventListener("change", function (e) {
  tipPercent = e.target.value;
  calculateTip();
});

for (let index = 0; index < tipPercentContainer.length - 1; index++) {
  tipPercentContainer[index].addEventListener("click", function (e) {
    tipPercent = e.target.getAttribute("value");
    calculateTip();
  });
}

function calculateTotal() {
  let total = billPrice / peopleCount;
  document.querySelector("#total").innerHTML = "$" + total.toFixed(2);
}

function calculateTip() {
  let tip = ((tipPercent / 100) * billPrice).toFixed(2);
  document.querySelector("#tip").innerHTML = "$" + tip;
}

function reset() {
  document.querySelector("#total").innerHTML = "$0.00";
  document.querySelector("#tip").innerHTML = "$0.00";
}
