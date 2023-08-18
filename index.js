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

function operate(num1, op, num2) {
  if (op === "+") return add(num1, num2);
  if (op === "-") return subtract(num1, num2);
  if (op === "*") return multiply(num1, num2);
  if (op === "/") return divide(num1, num2);
  if (op === "%") return modulus(num1, num2);
}

const display = document.querySelector("#display-text");

let num1 = "";
let num2 = "";
let operator = "";

const numButtons = document.querySelectorAll(".num");
numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (display.textContent.length <= 12) {
      let selected = button.textContent;
      if (operator === "") {
        num1 += selected;
        display.textContent += selected;
      } else {
        num2 += selected;
        display.textContent = num2;
      }
    }
  });
});

function performOperation(op, a, b) {
  return operate(parseInt(a), op, parseInt(b));
}

const operationButtons = document.querySelectorAll(".op");
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator !== "") {
      if (num2 !== "") {
        let operated = performOperation(operator, num1, num2);
        num1 = operated.toString();
        num2 = "";
        display.textContent = operated;
      }
    }

    operator = button.textContent;
  });
});

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
  let ans = num1;
  if (num1 !== "" && num2 !== "" && operator !== "") {
    ans = performOperation(operator, num1, num2);
  }
  display.textContent = ans;
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  display.textContent = "";
  num1 = num2 = op = "";
});
