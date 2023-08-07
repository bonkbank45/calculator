/* ⠀⠀⠀⠀
Created by bonkBANK (for The Odin Project)
⠀⢀⠀⢀⣀⣠⣤⣤⣤⣤⣤⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣠⣠⣤⣤⣤⣤⣀⠲⢦⣄⡀⠀⠀
⡶⢟⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠰⣷⣷⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣬⡛⢷⣔
⣾⡿⠟⠋⠉⠁⠀⡀⠀⠀⠀⠀⠈⠉⠉⠙⠛⢻⠛⠛⠋⠀⠀⠀⠀⠀⠀⠀⠈⠙⢛⣛⣛⣛⣛⣉⢉⣉⡀⠀⠀⠀⠀⠀⠈⠉⠛⢿⣷⣝
⠃⠀⠀⠀⠀⠀⠀⣛⣛⣛⣛⣛⣛⢛⡛⠛⠛⠛⣰⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣌⠛⠛⢛⣛⣛⣛⣛⣛⣛⣛⣓⣀⠀⠀⠀⠀⠀⠈⢻
⠀⠀⠀⢀⣤⡾⠛⢻⣿⣿⣿⡿⣿⡟⢻⣿⠳⠆⠘⣿⣦⠀⠀⠀⠀⠀⠀⠀⣰⣿⠁⠐⠛⣿⡟⢻⣿⣿⣿⣿⢿⣟⠛⠻⣦⣀⠀⠀⠀⠀
⠀⠀⢴⠿⣧⣄⣀⣘⣿⣿⣿⣿⣿⡿⣀⡙⢷⠀⢀⡿⠁⠀⠀⠀⠀⠀⠀⠀⠈⢻⡖⠀⣾⣋⣀⣺⣿⣿⣿⣿⣿⣏⣀⣤⣴⠿⢷⠀⠀⠀
⠀⠀⠀⠀⠈⠉⠉⠉⠉⠉⠉⠙⠉⠉⠉⠉⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⠆⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⠉⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡿⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⠆⠀⠀⢀⣿⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣶⠟⠁⠀⠀⠀⣾⠇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⣤⣤⣴⣶⣾⠿⠛⠋⠀⠀⠀⠀⠀⢸⡟⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠟⠛⠛⠛⠛⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠋⠀⠀⠀⠀⠀⠀⠀
*/
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
    addNum(button) {
        // if after calculate, u are clicking number (not operation!), it will clear text number display.
        if (this.completeCal === true && !isAlreadyOperator(display.textContent.toString())) { 
            this.clearOperand();
            this.currentValue = "";
            this.completeCal = false;
        }
        this.currentValue += button;
        this.addCharToDisplay(button, false);
    }
    addDecimalPoint(button){
        // Check - it don't have another decimalpoint
        if (this.currentValue.match(/\./g)) {
            return;
        }
        this.currentValue += button;
        this.addCharToDisplay(button, false);
    }
    equalEvent() {
        if (this.operator === "" || this.currentValue === "" || this.operand1 === "") return 0;
        this.operand2 = this.currentValue;
        this.currentValue = calculator.operate(Number(this.operand1), Number(this.operand2), this.operator);
        this.completeCal = true;
        this.clearOperand();
        this.addCharToDisplay(this.currentValue, false);
    }
    clearOperand() {
        display.textContent = "";
        this.operand1 = "";
        this.operand2 = "";
    }
    allClear() {
        this.clearOperand()
        this.currentValue = "";
    }
    removeLastCharacter() {
        //123
        if (/^\d+[\d.]$/g.test(display.textContent) || /\d/.test(display.textContent)) {
            this.currentValue = this.currentValue.replace(/.$/g, "");
        }
        //regex update currentValue for ( . ) 
        if (/^\d+.\d+$/g.test(display.textContent)) {
            this.currentValue = this.currentValue.replace(/.$/g, "");
        }
        //123+
        if (/\d+[+\-*\/]$/g.test(display.textContent)) {
            this.operator = this.operator.replace(/.$/g, "");
            this.operand1 = "";
            this.currentValue = display.textContent.match(/[1-9.]+/g).toString().replaceAll(",", "");
        }
        //123+123
        if (/\d+[+\-*\/]\d+/g.test(display.textContent)) {
            this.currentValue = this.currentValue.replace(/.$/g, "");
        }
        display.textContent = display.textContent.replace(/.$/g, "");
    }
    updateOperator(operator) {
        if (!isAlreadyOperator(display.textContent) && display.textContent.length > 0) {
            this.operand1 = this.currentValue;
            this.currentValue = "";
            this.operator = operator;
            this.addCharToDisplay(this.operator, false);
        } else {
            this.operator = operator;
            this.addCharToDisplay(changeAlreadyOperator(display.textContent.toString(),this.operator), true);
        }
    }
    addCharToDisplay(text, hardUpdate) {
        if (hardUpdate === false) {
            if(display.textContent === "0" && /[+\-*\/]/.test(text)) {
                display.textContent += text;
                return;
            }
            if(display.textContent === "0" && text != ".") {
                display.textContent = text;
                return;
            }
            if(/\d+[+\-*\/]0$/.test(display.textContent) && text != ".") {
                display.textContent = display.textContent.replace(/\d$/, text);
                return;
            }
            display.textContent += text;
        }
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
const added = document.getElementById("add");
const equal = document.getElementById("equal");
const subbed = document.getElementById("sub");
const mutiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const clear = document.getElementById("clear");
const backspace = document.getElementById("backspace");
const dot = document.getElementById("dot");

buttonsNumber.forEach((button) => {
    button.addEventListener("click", (button) => { calculator.addNum(button.target.value); });
});

added.addEventListener("click", (button) => { calculator.updateOperator(button.target.value); });
equal.addEventListener("click", () => { calculator.equalEvent(); });
subbed.addEventListener("click", (button) => { calculator.updateOperator(button.target.value); });
mutiply.addEventListener("click", (button) => { calculator.updateOperator(button.target.value); });
divide.addEventListener("click", (button) => { calculator.updateOperator(button.target.value); });
clear.addEventListener("click", () => { calculator.allClear(); });
backspace.addEventListener("click", () => { calculator.removeLastCharacter(); } );
dot.addEventListener("click", (button) => { calculator.addDecimalPoint(button.target.value); });