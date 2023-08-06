class Calculator {
    constructor() {
        this.operand1 = "";
        this.operand2 = "";
        this.operator = "";
        this.currentValue = "";
        this.completeCal = false;
    }
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
    numberEvent(button) {
        if (this.currentValue.length === 0 && button === "0") return 0;
        if (this.completeCal === true && !isAlreadyOperator(display.textContent.toString())) { 
            this.clear(); 
            this.currentValue = ""; 
            this.completeCal = false; 
        };
        this.currentValue += button;
        this.updateDisplay(button, false);
    }
    addedEvent(button){
        if (!isAlreadyOperator(display.textContent.toString())) {
            this.operand1 = this.currentValue;
            this.currentValue = "";
            this.operator = button;
            calculator.updateDisplay(this.operator, false);
        } else {
            this.operator = button;
            calculator.updateDisplay(changeAlreadyOperator(display.textContent.toString(),this.operator), true);
        }
    }
    subbedEvent(button){
        if (!isAlreadyOperator(display.textContent.toString())) {
            this.operand1 = this.currentValue;
            this.currentValue = "";
            this.operator = button;
            calculator.updateDisplay(this.operator, false);
        } else {
            this.operator = button;
            calculator.updateDisplay(changeAlreadyOperator(display.textContent.toString(),this.operator), true);
        }
    }
    equalEvent(button) {
        if (this.operator === "" || this.currentValue === "" || this.operand1 === "") return;
        this.operand2 = this.currentValue;
        this.currentValue = calculator.operate(Number(this.operand1), Number(this.operand2), this.operator);
        this.completeCal = true;
        calculator.clear();
        calculator.updateDisplay(this.currentValue, false);
    }
    clear() {
        display.textContent = "";
        this.operand1 = "";
        this.operand2 = "";
    }
    updateDisplay(text, hardUpdate) {
        if (hardUpdate === false)
            display.textContent += text;
        if (hardUpdate === true)
            display.textContent = text;
    }
}

function isAlreadyOperator(value) {
    if (value.match(/\d+[+\-*\/]/g))
        return true;
    return false;
}

function changeAlreadyOperator(text, operator) {
    return text.replace(/[+\-*\/]/g, operator);
}

const calculator = new Calculator();
const buttonsNumber = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const added = document.querySelector("#add");
const equal = document.querySelector("#equal");
const subbed = document.querySelector("#sub");

buttonsNumber.forEach((button) => {
    button.addEventListener("click", (button) => { calculator.numberEvent(button.target.value); });
});

added.addEventListener("click", (button) => { calculator.addedEvent(button.target.value); });
equal.addEventListener("click", (button) => { calculator.equalEvent(button.target.value); });
subbed.addEventListener("click", (button) => { calculator.subbedEvent(button.target.value); });
