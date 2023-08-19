let num1 = "";
let num2 = "";
let operator = "";

const calculatorDisplay = document.querySelector("#display-text");
const numberButtons = document.querySelectorAll(".num");
const operationButtons = document.querySelectorAll(".op");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const backspaceButton = document.querySelector("#backspace");

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
  if (b === 0) {
    num1 = num2 = operator = "";
    return "ERROR";
  }
  return roundResult(a / b);
}
function modulus(a, b) {
  return roundResult(a % b);
}

function performOperation(op, a, b) {
  if (op === "+") return add(a, b);
  if (op === "-") return subtract(a, b);
  if (op === "*") return multiply(a, b);
  if (op === "/") return divide(a, b);
  if (op === "%") return modulus(a, b);
}

function removeSelectedOperator() {
  operationButtons.forEach((opnBtn) => {
    if (opnBtn.classList.contains("buttonClick")) {
      opnBtn.classList.remove("buttonClick");
    }
  });
}

function storeInput(num, selected) {
  if (selected === ".") {
    if (!num.includes(".")) {
      calculatorDisplay.textContent += selected;
      return (num += selected);
    }
  } else {
    calculatorDisplay.textContent += selected;
    return (num += selected);
  }
}

function updateNumberAndDisplay(number, selected) {
  if (selected === "." && !number.includes(".")) {
    number += selected;
  } else if (selected !== ".") {
    number += selected;
  }

  calculatorDisplay.textContent = number;

  if (operator === "") {
    num1 = number;
  } else {
    num2 = number;
  }
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    removeSelectedOperator();

    const selected = button.textContent;

    if (calculatorDisplay.textContent.length <= 12) {
      if (operator === "") {
        updateNumberAndDisplay(num1, selected);
      } else {
        updateNumberAndDisplay(num2, selected);
      }
    }
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    removeSelectedOperator();
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

backspaceButton.addEventListener("click", () => {
  let displayText = calculatorDisplay.textContent;
  displayText = displayText.substring(0, displayText.length - 1);
  calculatorDisplay.textContent = displayText;

  if (operator === "") {
    num1 = num1.substring(0, num1.length - 1);
  } else {
    num2 = num2.substring(0, num2.length - 1);
  }
});
