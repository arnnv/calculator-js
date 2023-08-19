let num1 = "";
let num2 = "";
let operator = "";

const calculatorDisplay = document.querySelector("#display-text");
const numberButtons = document.querySelectorAll(".num");
const operationButtons = document.querySelectorAll(".op");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");

function roundResult(exp) {
  return Math.round(exp * 1000) / 1000;
}
function add(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  return roundResult(a + b);
}
function subtract(a, b) {
  return roundResult(a - b);
}
function multiply(a, b) {
  return roundResult(a * b);
}
function divide(a, b) {
  return roundResult(a / b);
}
function modulus(a, b) {
  return roundResult(a % b);
}

function performOperation(op, a, b) {
  if (op === "+") return add(a, b);
  if (op === "-") return subtract(a, b);
  if (op === "*") return multiply(a, b);
  if (op === "/") {
    if (b === 0) {
      num1 = num2 = operator = "";
      return "ERROR";
    }
    return divide(a, b);
  }
  if (op === "%") return modulus(a, b);
}

function removeSelectedOperator() {
  operationButtons.forEach((opnBtn) => {
    if (opnBtn.classList.contains("buttonClick")) {
      opnBtn.classList.remove("buttonClick");
    }
  });
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    removeSelectedOperator();

    if (num1 === "") calculatorDisplay.textContent = "";
    let selected = button.textContent;

    if (calculatorDisplay.textContent.length <= 12) {
      if (operator === "") {
        if (selected === ".") {
          if (!num1.includes(".")) {
            num1 += selected;
            calculatorDisplay.textContent += selected;
          }
        } else {
          num1 += selected;
          calculatorDisplay.textContent += selected;
        }
      } else {
        if (selected === ".") {
          if (!num2.includes(".")) {
            num2 += selected;
            calculatorDisplay.textContent = num2;
          }
        } else {
          num2 += selected;
          calculatorDisplay.textContent = num2;
        }
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
