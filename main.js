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
        this.updateDisplay(button);
    }
    addedEvent(button){
        if (!isAlreadyOperator(display.textContent.toString())) {
            this.operand1 = this.currentValue;
            this.currentValue = "";
            this.operator = button;
            calculator.updateDisplay(this.operator);
        }
        return;
    }
    equalEvent(button) {
        if (this.operator === "") return;
        this.operand2 = this.currentValue;
        this.currentValue = calculator.operate(Number(this.operand1), Number(this.operand2), this.operator);
        this.completeCal = true;
        calculator.clear();
        calculator.updateDisplay(this.currentValue);
    }
    clear() {
        display.textContent = "";
        this.operand1 = "";
        this.operand2 = "";
    }
    updateDisplay(text) {
        display.textContent += text;
    }
}

function isAlreadyOperator(value) {
    if (value.match(/[+\-*\/]/g))
        return true;
    return false;
}

const calculator = new Calculator();
const buttonsNumber = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const added = document.querySelector("#add");
const equal = document.querySelector("#equal");

buttonsNumber.forEach((button) => {
    button.addEventListener("click", (button) => { calculator.numberEvent(button.target.value); });
});

added.addEventListener("click", (button) => { calculator.addedEvent(button.target.value); });
equal.addEventListener("click", (button) => { calculator.equalEvent(button.target.value); });
