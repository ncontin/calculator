let firstNum = 0;
let secondNum = 0;
let operator = "";

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
    if (operator === "-") return add(firstNum, secondNum);
    if (operator === "*") return add(firstNum, secondNum);
    if (operator === "/") return add(firstNum, secondNum);
    else return "error";
}

console.log(operate("+", 1, 2))