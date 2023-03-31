let preNumber = "";
let calculationOperations = "";
let currentNumber = "0";

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const percens = document.querySelector(".percentage");

inputPercen = (percen) => {
  if (currentNumber === "0") {
    return;
  } else {
    currentNumber += percen;
  }
};

const percentage = percens.addEventListener("click", (event) => {
  if (currentNumber === "0") {
    return;
  } else if (!preNumber) {
    currentNumber = currentNumber / 100;
    updateScreen(currentNumber);
  } else {
    currentNumber = currentNumber / 100;
    updateScreen(currentNumber);
  }
});

const operators = document.querySelectorAll(".operator");

const inputOperator = (operator) => {
  if (calculationOperations === "") {
    preNumber = currentNumber;
  }
  calculationOperations = operator;
  currentNumber = "0";
};

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
    updateScreen(calculationOperations);
  });
});

inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const calculate = () => {
  let result = "";
  switch (calculationOperations) {
    case "+":
      result = parseFloat(preNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(preNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(preNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(preNumber) / parseFloat(currentNumber);
      break;
    default:
      break;
  }
  currentNumber = result;
  calculationOperations = "";
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber = "";
  calculationOperations = "";
  currentNumber = "0";
};

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});
