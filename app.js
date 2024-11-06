const clearButton = document.getElementById("clear")
const showResult = document.getElementById("show-result")
const operand = document.querySelectorAll(".operand")
const operator = document.querySelectorAll(".operator")
const displayOperation = document.querySelector(".operation")
const displayResult = document.querySelector(".result")

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

const operate = (operator, a, b) => {
    return operator(a, b);
};

// Add an event listener to the document and targets the value of the button
document.addEventListener("click", (event) => {
    if (event.target.matches(".operand")) {
        displayOperation.innerHTML += `${event.target.value}`
        console.log(event.target.value)
    };
});

document.addEventListener("click", (event) => {
    if (event.target.matches(".operator")) {
        displayOperation.innerHTML += `${event.target.value}`
        console.log(event.target.value)
    };
});

showResult.addEventListener("click", () => {
    displayResult.innerHTML = operate(multiply, 5, 5);
});

clearButton.addEventListener("click", () => {
    displayOperation.innerHTML = "<p></p>";
    displayResult.innerHTML = "0";
});