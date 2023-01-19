const billInput = $(".bill-input");
const peopleInput = $(".people-input");
const tips = $$(".tips");
const tipPerPerson = $("#tip-amount");
const totalPerPerson = $("#total-amount");
const resetBtn = $(".reset");
const tipCustom = $(".tip-custom");
const error = $(".error");

billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);
tips.forEach((item) => {
  item.addEventListener("click", handleClick);
});
resetBtn.addEventListener("click", reset);
tipCustom.addEventListener("input", tipInputFun);

billInput.value = "0.0";
peopleInput.value = "1";
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

function billInputFun() {
  billValue = parseFloat(billInput.value);
  calculateTip();
}

function tipInputFun() {
  tipValue = parseFloat(tipCustom.value / 100);

  tips.forEach((item) => {
    item.classList.remove("active-tip");
  });
  calculateTip();
}

function peopleInputFun() {
  peopleValue = parseFloat(peopleInput.value);

  if (peopleValue < 1) {
    error.style.display = "flex";
    peopleInput.style.border = "thick solid red";
  } else {
    error.style.display = "none";
    peopleInput.style.border = "none";
    calculateTip();
  }
}

function handleClick(e) {
  tips.forEach((item) => {
    item.classList.remove("active-tip");
    if (e.target.innerHTML == item.innerHTML) {
      item.classList.add("active-tip");
      tipValue = parseFloat(val.innerHTML) / 100;
    }
  });
  calculateTip();
}

function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipValue) / peopleValue;
    let total = (billValue + tipAmount) / peopleValue;
    tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
    totalPerPerson.innerHTML = "$" + total.toFixed(2);
  }
}

function reset() {
  billInput.value = "0.0";
  billInputFun();
  peopleInput.value = "1";
  peopleInputFun();
  tipCustom.value = "";
}
