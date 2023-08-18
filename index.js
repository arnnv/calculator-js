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

const display = document.querySelector("#display-text");

let num1 = "";
let num2 = "";
let operator = "";

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

const numButtons = document.querySelectorAll(".num");
numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (num1 === "") display.textContent = "";
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
  num1 = num2 = operator = "";
});

display.addEventListener("resize", () => {
  console.log("hi");
});
