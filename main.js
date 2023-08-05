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

console.log(add(5,5));
console.log(subtract(5,5));
console.log(multiply(5,5));
console.log(divide(5,5));
