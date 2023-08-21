let firstNum = 0;
let secondNum = 0;
let operator = "";

const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

let enteredDigits = [];
let displayedNumber = display.value;

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

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        enteredDigits.push(number.textContent);
        displayedNumber = parseInt((display.value = enteredDigits.join("")));
    });
});

operators.forEach((operation) => {
    operation.addEventListener("click", () => {
        firstNum = displayedNumber;
        operator = operation.textContent;
        enteredDigits = [];
    });
});

equal.addEventListener("click", () => {
    secondNum = displayedNumber;
    console.log(operator, firstNum, secondNum);
    display.value = operate(operator, firstNum, secondNum);
});

clear.addEventListener("click", () => {
    firstNum = 0;
    secondNum = 0;
    operator = "";
    enteredDigits = [];
    display.value = 0;
});
