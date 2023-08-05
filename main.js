/*
function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(a,b,operate) {
    switch (operate) {
        case 1:
            add(a,b);
            break;
        case 2:
            subtract(a,b);
            break;
        case 3:
            multiply(a,b);
            break;
        case 4:
            divide(a,b);
            break;
        default:
            console.warn("Invalid case!");
    }
}
*/

class Calculator {
    constructor() {}
    add(a, b) {
        return a + b;
    }
    substract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        return a / b;
    }
    operate(a, b, operate) {
        switch(operate) {
            case "+":
                return this.add(a,b);
            case "-":
                return this.substract(a,b);
            case "*":
                return this.multiply(a,b);
            case "/":
                return this.divide(a,b);
            default:
                console.warn("Invalid case!");
        }
    }
    clear() {
        display.textContent = "";
        operand1 = "";
        operand2 = "";
    }
    updateDisplay(text) {
        display.textContent += text;
    }
}

let operand1 = "";
let operand2 = "";
let operator = "";
let currentValue = "";

function numberEvent() {
    currentValue += this.value;
    calculator.updateDisplay(this.value);
}

function isAlreadyOperator(value) {
    if (value.match(/[+\-*\/]/g))
        return true;
    return false;
}

function addedEvent() {
    if (!isAlreadyOperator(display.textContent.toString())) {
        operand1 = currentValue;
        currentValue = "";
        operator = "+";
        calculator.updateDisplay(operator);
    }
    return;
}

function equalEvent() {
    if (operator === "") return;
    operand2 = currentValue;
    currentValue = calculator.operate(Number(operand1), Number(operand2), operator);
    calculator.clear();
    calculator.updateDisplay(currentValue);
}

const calculator = new Calculator();
const buttonsNumber = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const added = document.querySelector("#add");
const equal = document.querySelector("#equal");

buttonsNumber.forEach((button) => {
    button.addEventListener("click", numberEvent);
});

added.addEventListener("click", addedEvent);
equal.addEventListener("click", equalEvent);
