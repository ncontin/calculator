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
        enteredDigits.push(number.textContent);
        displayedNumber = parseInt((display.value = enteredDigits.join("")));
    });
});

operators.forEach((operation) => {
    operation.addEventListener("click", () => {
        if (operator && enteredDigits.length > 0) {
            firstNum = operate(operator, firstNum, displayedNumber);
            display.value = firstNum;
        }
        // else if (operator && enteredDigits.length === 0) {

        // }
        else {
            firstNum = displayedNumber;
        }
        operator = operation.textContent;
        enteredDigits = [];
    });
});

equal.addEventListener("click", () => {
    secondNum = displayedNumber;
    console.log(operator, firstNum, secondNum);
    let result = operate(operator, firstNum, secondNum);
    if (display.value === "Infinity") {
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
    console.log("backspace:", backspace);
    console.log("enteredDigits:", enteredDigits);
    displayedNumber = parseInt((display.value = enteredDigits.join("")));
});
