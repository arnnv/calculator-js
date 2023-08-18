function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function modulus(a, b) {
  return a % b;
}

let num1;
let num2;
let op;

function operate(num1, op, num2) {
  if (op === "+") return add(num1, num2);
  if (op === "-") return subtract(num1, num2);
  if (op === "*") return multiply(num1, num2);
  if (op === "/") return divide(num1, num2);
  if (op === "%") return modulus(num1, num2);
}

const display = document.querySelector("#display-text");

let displayVal = "";
let operator = "";
let afterOperator = "";

const numButtons = document.querySelectorAll(".num");
numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (display.textContent.length <= 12) {
      let selected = button.textContent;
      displayVal += selected;
      display.textContent += selected;
    }
  });
});

const operationButtons = document.querySelectorAll(".op");
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let operator = button.textContent;
    console.log(operator);
  });
});
