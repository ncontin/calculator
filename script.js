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
let displayedNumber = 0;

// Functions

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
    if (b === 0) {
        display.value = "ERROR";
        return;
    }
    return a / b;
}

function operate(operator, firstNum, secondNum) {
    if (operator === "+") return add(firstNum, secondNum);
    if (operator === "-") return subtract(firstNum, secondNum);
    if (operator === "X") return multiply(firstNum, secondNum);
    if (operator === "/") return divide(firstNum, secondNum);
    throw new Error("Invalid operator");
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
        if (number.textContent === "." && enteredDigits.length === 0) {
            enteredDigits.push("0.");
            displayedNumber = parseFloat((display.value = enteredDigits.join("")));
            return;
        }
        enteredDigits.push(number.textContent);
        displayedNumber = parseFloat((display.value = enteredDigits.join("")));
    });
});

operators.forEach((operation) => {
    operation.addEventListener("click", () => {
        if (operator && enteredDigits.length > 0) {
            firstNum = operate(operator, firstNum, displayedNumber);
            display.value = Number(firstNum.toFixed(4));
        } else {
            firstNum = displayedNumber;
        }
        operator = operation.textContent;
        enteredDigits = [];
    });
});

equal.addEventListener("click", () => {
    secondNum = displayedNumber;
    console.log(operator, firstNum, secondNum);
    try {
        let result = operate(operator, firstNum, secondNum);
        if (display.value !== "ERROR") {
            display.value = Number(result.toFixed(4));
        }
    } catch (error) {
        console.error(error);
    }
});

clear.addEventListener("click", () => {
    clearData();
});

backspace.addEventListener("click", () => {
    enteredDigits.pop();
    displayedNumber = parseFloat(enteredDigits.join("")) || 0; // Update displayedNumber as a number
    display.value = isNaN(displayedNumber) ? 0 : displayedNumber; // Update the display with the new value
});
