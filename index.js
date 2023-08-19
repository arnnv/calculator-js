let num1 = "";
let num2 = "";
let operator = "";

const calculatorDisplay = document.querySelector("#display-text");
const numberButtons = document.querySelectorAll(".num");
const operationButtons = document.querySelectorAll(".op");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");

function add(a, b) {
  return Math.round((a + b) * 1000) / 1000;
}

function subtract(a, b) {
  return Math.round((a - b) * 1000) / 1000;
}

function multiply(a, b) {
  return Math.round(a * b * 1000) / 1000;
}

function divide(a, b) {
  return Math.round((a / b) * 1000) / 1000;
}

function modulus(a, b) {
  return Math.round((a % b) * 1000) / 1000;
}

function operate(a, oper, b) {
  if (oper === "+") return add(a, b);
  if (oper === "-") return subtract(a, b);
  if (oper === "*") return multiply(a, b);
  if (oper === "/") {
    if (b === 0) {
      num1 = num2 = operator = "";
      return "ERROR";
    }
    return divide(a, b);
  }
  if (oper === "%") return modulus(a, b);
}

function performOperation(op, a, b) {
  return operate(parseInt(a), op, parseInt(b));
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    operationButtons.forEach((opnBtn) => {
      if (opnBtn.classList.contains("buttonClick")) {
        opnBtn.classList.remove("buttonClick");
      }
    });

    if (num1 === "") calculatorDisplay.textContent = "";
    if (calculatorDisplay.textContent.length <= 12) {
      let selected = button.textContent;
      if (operator === "") {
        num1 += selected;
        calculatorDisplay.textContent += selected;
      } else {
        num2 += selected;
        calculatorDisplay.textContent = num2;
      }
    }
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator !== "") {
      if (num2 !== "") {
        let operated = performOperation(operator, num1, num2);
        num1 = operated.toString();
        num2 = "";
        calculatorDisplay.textContent = operated;
      }
    }
    operator = button.textContent;
    button.classList.add("buttonClick");
  });
});

equalsButton.addEventListener("click", () => {
  let ans = num1;
  if (num1 !== "" && num2 !== "" && operator !== "") {
    ans = performOperation(operator, num1, num2);
  }
  calculatorDisplay.textContent = ans;
});

clearButton.addEventListener("click", () => {
  calculatorDisplay.textContent = "";
  num1 = num2 = operator = "";
});
