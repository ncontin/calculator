// Variables

const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".backspace");
let firstNum = 0;
let secondNum = 0;
let operator = "";
let enteredDigits = [];
let displayedNumber = display.value;

// Functions

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(...numbers) {
    let product = 1;
    for (let i = 0; i < numbers.length; i++) {
        product *= numbers[i];
    }
    return product;
}

function divide(...numbers) {
    let quotient = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            return "ERROR";
        }
        quotient /= numbers[i];
    }
    return quotient;
}

function operate(operator, firstNum, secondNum) {
    if (operator === "+") return add(firstNum, secondNum);
    if (operator === "-") return subtract(firstNum, secondNum);
    if (operator === "X") return multiply(firstNum, secondNum);
    if (operator === "/") return divide(firstNum, secondNum);
    else return "error";
}

function clearData() {
    firstNum = 0;
    secondNum = 0;
    operator = "";
    enteredDigits = [];
    display.value = 0;
}

//Event Listeners

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (number.textContent === "." && enteredDigits.includes(".")) {
            return;
        }
        enteredDigits.push(number.textContent);
        display.value = enteredDigits.join("");
        displayedNumber = display.value;
    });
});

operators.forEach((operation) => {
    operation.addEventListener("click", () => {
        if (operator && enteredDigits.length > 0) {
            firstNum = operate(operator, parseFloat(firstNum), parseFloat(displayedNumber));
            display.value = firstNum;
        } else {
            firstNum = parseFloat(displayedNumber);
        }
        operator = operation.textContent;
        enteredDigits = [];
    });
});

equal.addEventListener("click", () => {
    secondNum = parseFloat(displayedNumber);
    let result = operate(operator, parseFloat(firstNum), secondNum);
    if (result === "ERROR") {
        display.value = "ERROR";
    } else {
        display.value = Number(result.toFixed(4));
    }
});

clear.addEventListener("click", () => {
    clearData();
});

backspace.addEventListener("click", () => {
    enteredDigits.pop();
    if (enteredDigits.includes(".")) {
        display.value = enteredDigits.join("");
    } else {
        display.value = parseFloat(enteredDigits.join(""));
    }
    displayedNumber = display.value;
});
