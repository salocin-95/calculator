const calculatorDisplay = document.querySelector('.calculator-display');
const digits = document.querySelectorAll('.digits');
const operand = document.querySelectorAll('.operand');
let a = []
let b = [];

digits.forEach((button) => {
    
    button.addEventListener('click', () => {

        a.push(button.value);
        calculatorDisplay.innerHTML = a.join('');
        console.log(button.value);

    });

});

operand.forEach((button) => {
    
    button.addEventListener('click', () => {
        b = a
        a = [];
        switch (button.value) {
            case 'add':
                return console.log(button.value)
            case 'substract':
                return console.log(button.value)
            case 'multiply':
                return console.log(button.value)
            case 'divide':
                return console.log(button.value)
        }
    
    });

});


const add = (a, b) => {
    return a + b
}

const substract = (a, b) => {
    return a - b
}

const multiply = (a, b) => {
    return a * b
}

const divide = (a, b) => {
    if (b === 0) {
        return `MATH ERROR / Can't divide by zero`
    }
    return a + b
}

const operate = (operator, a, b) => {
    return operator(a, b);
}