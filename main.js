class Calculator {
    constructor() {
        this.operand1 = "";
        this.operand2 = "";
        this.operator = "";
        this.currentValue = "";
        this.isCompleteCal = false;
        this.isError = false;
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
        if (this.isCompleteCal === true && !this.isAlreadyOperator(display.textContent.toString())) { 
            this.clearOperand();
            this.clearDisplay();
            this.currentValue = "";
            this.isCompleteCal = false;
            this.isError = false;
        } 
        if (this.isError === false) {
            this.currentValue += button;
            this.addCharToDisplay(button, false);
        }
    }
    addDecimalPoint(button){
        // Check - it doesn't have another decimalpoint
        if (this.currentValue.match(/\./g)) {
            return;
        }
        if (this.currentValue === "") {
            this.currentValue = "0" + button;
            this.addCharToDisplay(this.currentValue, false);
            return;
        }
        if (this.isCompleteCal === true) {
            this.addNum("0" + button);
            return;
        }
        if (this.isError === false) {
            this.addNum(button);
        }
    }
    equalEvent() {
        if (this.operator === "" || this.currentValue === "" || this.operand1 === "") return 0;
        this.operand2 = this.currentValue;
        this.currentValue = this.operate(Number(this.operand1), Number(this.operand2), this.operator).toString();
        this.isCompleteCal = true;
        this.clearDisplay();
        this.clearOperand();
        this.clearOperator();
        if (this.errorStateCheck(this.currentValue)){
            this.isCompleteCal = true;
            return 0;
        }
        this.addCharToDisplay(this.currentValue, false);
    }
    clearOperand() {
        this.operand1 = "";
        this.operand2 = "";
    }
    clearOperator() {
        this.operator = "";
    }
    allClear() {
        this.isCompleteCal = false;
        this.isError = false;
        this.clearOperand()
        this.clearDisplay();
        this.currentValue = "";
    }
    removeLastCharacter() {
        //123 || single number
        if (/^\d+[\d]$/g.test(display.textContent) || /(^|\D)\d(\D|$)]/.test(display.textContent)) {
            this.currentValue = this.currentValue.replace(/.$/g, "");
        }
        //regex update currentValue for ( . ) 
        if (/^\d+.\d+$/g.test(display.textContent)) {
            this.currentValue = this.currentValue.replace(/.$/g, "");
        }
        //123+
        if (/^\d+[+\-*\/.]$/g.test(display.textContent)) {
            this.operator = this.operator.replace(/.$/g, "");
            this.operand1 = "";
            this.currentValue = display.textContent.match(/[1-9.]+/g).toString().replaceAll(",", "");
        }
        //0.+-*/
        if (/0.[+\-*\/.]$/g.test(display.textContent)) {
            this.operand1 = "";
            this.currentValue = display.textContent.match(/0/g).toString().replaceAll(",", "");
        }
        //123+123
        if (/\d+[+\-*\/]\d+/g.test(display.textContent)) {
            this.currentValue = this.currentValue.replace(/.$/g, "");
        }
        //123+0.
        if (/^0.[+\-*\/]0./g.test(display.textContent)) {
            this.currentValue = this.currentValue.replace(/.$/g, "");
        }
        if (this.isError === false) {
            display.textContent = display.textContent.replace(/.$/g, "");
        }
    }
    updateOperator(operator) {
        if (this.isError === false) {
            if (!this.isAlreadyOperator(display.textContent) && display.textContent !== "" ) {
                this.operand1 = this.currentValue;
                this.currentValue = "";
                this.operator = operator;
                this.addCharToDisplay(this.operator, false);
            }
            // 12+ and click operator
            if (this.isAlreadyOperator(display.textContent) && this.currentValue === "" && this.operand1 !== ""){
                this.operator = operator;
                this.addCharToDisplay(this.changeAlreadyOperator(display.textContent.toString(),this.operator), true);
            }
            // 12+3 and click operator
            if (this.isAlreadyOperator(display.textContent) && this.currentValue !== "" && this.operand1 !== ""){
                this.equalEvent();
                this.operand1 = this.currentValue;
                this.currentValue = "";
                this.operator = operator;
                this.addCharToDisplay(this.operator,false);
            }
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
    clearDisplay() {
        display.textContent = "";
    }
    isAlreadyOperator(value) {
        if (value.match(/[\d.]+[+\-*\/]/g))
            return true;
        return false;
    }
    changeAlreadyOperator(text, operator) {
        return text.replace(/[+\-*\/]$/g, operator);
    }
    errorStateCheck(error) {
        if (error == "NaN") {
            display.textContent = "Result is undefined";
            this.isError = true;
            return true;
        }
        if (error == "Infinity" || error == "-Infinity") {
            display.textContent = "Cannot divide by zero";
            this.isError = true;
            return true;
        }
        return false;
    }
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