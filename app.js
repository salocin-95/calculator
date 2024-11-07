const clearButton = document.getElementById("clear")
const showResult = document.getElementById("show-result")
const operand = document.querySelectorAll(".operand")
const operator = document.querySelectorAll(".operator")
const displayOperation = document.querySelector(".operation")
const displayResult = document.querySelector(".result")
let a = '';
let b = '';
let c = '';
let result = '';

// Operations
const add = (a, b) => {
    return parseInt(a) + parseInt(b);
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

    a += button.value

    displayOperation.innerHTML += button.value;

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
// Should assign the result to a new variable and display that result

operator.forEach(button => button.addEventListener("click", () => {
        
        b = a;
        a = '';

        document.addEventListener("click", (event) => {

            if (c != "") {

                switch(c) {
                    case "+":
                        return displayResult.innerHTML = operate(add, a , b);
                    case "-":
                        return displayResult.innerHTML = operate(substract, a , b);
                    case "*":
                        return displayResult.innerHTML = operate(multiply, a, b);
                    case "/":
                        return displayResult.innerHTML = operate(divide, a , b);
                } 

            }

            if (event.target.matches(".operator")) {
                c = (event.target.value)
                displayOperation.innerHTML = ` ${b} ${event.target.value} `
            };

            console.log(c)
            console.log(b)
            console.log(a)
        
        });

}));


showResult.addEventListener("click", () => {
    switch(c) {
        case "+":
            result += operate(add, a , b);
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
    displayOperation.innerHTML = "";
    displayResult.innerHTML = "";
});