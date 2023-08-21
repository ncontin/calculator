function add(a, b) {
    return a + b;
}
console.log(add(1, 2));

function subtract(a, b) {
    return a - b;
}
console.log(subtract(1, 2));

function multiply(...numbers) {
    let product = 1;
    for (let i = 0; i < numbers.length; i++) {
        product *= numbers[i];
    }
    return product;
}
console.log(multiply(2, 3, 4, 5));

function divide(...numbers) {
    let quotient = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        quotient /= numbers[i]
    }
    return quotient;
}
console.log(divide(10, 2));
