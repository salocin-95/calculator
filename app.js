const clearButton = document.getElementById("clear")
const showResult = document.getElementById("show-result")
const operand = document.querySelectorAll(".operand")
const operator = document.querySelectorAll(".operator")
const displayOperation = document.querySelector(".operation")
const displayResult = document.querySelector(".result")
let a = '';
let b = '';
let c = '';

// Operations
const add = (a, b) => {
    return a + b;
};

const substract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    if (b === 0) {
        return `ERROR`
    }
    return a / b;
};

// Calls the operations with two arguments
const operate = (operator, a, b) => {
    return operator(a, b);
};

const chooseOperation = (operator) => {
    switch(operator) {
        case "+":
            operate(add, a , b);
            break;
        case "-":
            operate(substract, a , b);
            break;
        case "*":
            operate(multiply, a, b);
            break;
        case "/":
            operate(divide, a , b);
            break;
    }        
}


// Add an event listener to the document and targets the value of the button
document.addEventListener("click", (event) => {
    if (event.target.matches(".operand")) {
        a += (event.target.value)
        displayOperation.innerHTML += event.target.value
        console.log(event.target.value)
    };
});

document.addEventListener("click", (event) => {
    if (event.target.matches(".operator")) {
        c = event.target.value;
        displayOperation.innerHTML += event.target.value
        console.log(event.target.value)
    };
});

showResult.addEventListener("click", () => {
    displayResult.innerHTML = operate(multiply, a, b);
});

clearButton.addEventListener("click", () => {
    a = '';
    b = '';
    c = '';
    displayOperation.innerHTML = "0";
    displayResult.innerHTML = "0";
});