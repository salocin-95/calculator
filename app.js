const clearButton = document.getElementById("clear")
const showResult = document.getElementById("show-result")
const operand = document.querySelectorAll(".operand")
const operator = document.querySelectorAll(".operator")
const displayOperation = document.querySelector(".operation")
const displayResult = document.querySelector(".result")
let a = 0;
let b = 43;
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

// Add an event listener to the document and targets the value of the button

// document.addEventListener("click", (event) => {
//     if (event.target.matches(".operand")) {
//         a += event.target.value
//         display.innerHTML += event.target.value
//         console.log(event.target.value)
//     };
// });

operand.forEach(button => button.addEventListener("click", () => {

    a += button.value;
    
    displayOperation.innerHTML = a;

}));

// This was calling an event on the whole document

// document.addEventListener("click", (event) => {
//     if (event.target.matches(".operator")) {
//         c = (event.target.value)
//         display.innerHTML = event.target.value
//         console.log(event.target.value)
//     };
//     console.log()
// });

// When an operator button is pushed a new event for the operand should start and assign the values in b. If an operand button or the result button is pressed the operation should occur.

operator.forEach(button => button.addEventListener("click", () => {

    document.addEventListener("click", (event) => {
        if (event.target.matches(".operator")) {
            c = (event.target.value)
            displayOperation.innerHTML = event.target.value
        };
    });

    console.log(c)
    console.log(a)

}));


showResult.addEventListener("click", () => {

    switch(c) {
        case "+":
            return displayResult.innerHTML += operate(add, a , b);
        case "-":
            return displayResult.innerHTML += operate(substract, a , b);
        case "*":
            return displayResult.innerHTML += operate(multiply, a, b);
        case "/":
            return displayResult.innerHTML += operate(divide, a , b);
    } 

});

clearButton.addEventListener("click", () => {
    a = '';
    b = '';
    c = '';
    displayOperation.innerHTML = "0";
    displayResult.innerHTML = "";
});