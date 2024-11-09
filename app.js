//Should add function to limit the characters on the display to 17
const calculatorDisplay = document.querySelector('.calculator-display');
const digits = document.querySelectorAll('.digits');
const operand = document.querySelectorAll('.operand');

let currentInput = [];
let previousInput = [];
let selectedOperator

digits.forEach((button) => {
    
    button.addEventListener('click', () => {
        
        checkMathError(calculatorDisplay)

        if (currentInput.length <= 16) {
            currentInput.push(button.value);
        } 

        calculatorDisplay.innerHTML = currentInput.join('');

    });

});

operand.forEach((button) => {

    button.addEventListener('click', () => {
        
        if (currentInput.length) {
            switch (button.value) {
                case 'add':
                    previousInput = currentInput;
                    currentInput = [];
                    selectedOperator = add;
                    break;
                case 'subtract':
                    previousInput = currentInput;
                    currentInput = [];
                    selectedOperator = subtract;
                    break;
                case 'multiply':
                    previousInput = currentInput;
                    currentInput = [];
                    selectedOperator = multiply;
                    break;
                case 'divide':
                    previousInput = currentInput;
                    currentInput = [];
                    selectedOperator = divide;
                    break;
                case 'result':
                    checkResult();
                    break;
                case 'clear':
                    clearDisplay();
                };

        };

    });

});


const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    if (b === 0) {
        return `MATH ERROR`;
    };
    return parseFloat(a / b).toFixed(1);
};

const operate = (operator, a, b) => {
    return operator(a, b);
};

const clearDisplay = () => {
    currentInput = [];
    previousInput = [];
    selectedOperator = '';
    calculatorDisplay.innerHTML = '0';
};

const checkMathError = (element) => {
    if (element.innerHTML === 'MATH ERROR') {
        currentInput = [];
        previousInput = [];
        selectedOperator = '';
    };
};

const checkResult = () => {

    if (selectedOperator != '') {
        result = operate(selectedOperator, parseFloat(previousInput.join('')), parseFloat(currentInput.join('')))
        calculatorDisplay.innerHTML = result;
        currentInput = [];
        currentInput.push(result);
    };

    selectedOperator = '';
    
};