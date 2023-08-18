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
      } else {
        display.textContent = "";
        num2 += selected;
      }
      display.textContent += selected;
    }
  });
});

function performOperation(op, a, b) {
  let operated = operate(parseInt(a), op, parseInt(b));
  num1 = operated.toString();
  num2 = "";
  display.textContent = operated;
  console.log(`${a} ${op} ${b} = ${operated}`);
}

const operationButtons = document.querySelectorAll(".op");
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator !== "") {
      if (num2 !== "") {
        performOperation(operator, num1, num2);
      }
    }

    operator = button.textContent;
  });
});

// operationButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     if (!operator) {
//       operator = button.textContent;
//     }
//     let newOperator = button.textContent;

//     if (num1) {
//       display.textContent += operator;
//       if (num2) {
//         let operation = operate(parseInt(num1), operator, parseInt(num2));
//         console.log(operation);
//         num1 = operation;
//         operator = "";
//         num2 = "";
//       }
//     }
//     operator = newOperator;
//   });
// });
