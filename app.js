//Should add function to limit the characters on the display to 16
const calculatorDisplay = document.querySelector('.calculator-display');
const calculatorOperationDisplay = document.querySelector('.calculator-operation-display');
const digits = document.querySelectorAll('.digits');
const operand = document.querySelectorAll('.operand');
const clearBtn = document.getElementById('clear')

let currentInput = [];
let previousInput = [];
let selectedOperator


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

const operate = (operation, a, b) => {
    return operation(a, b);
};

const clearDisplay = () => {
    currentInput = [];
    previousInput = [];
    selectedOperator = '';
    calculatorOperationDisplay.innerHTML = '<span style="opacity: 0">0</span>'
    calculatorDisplay.innerHTML = '0';
};

const updateDisplay = (operator, a, b) => {
    calculatorOperationDisplay.innerHTML = `${b} ${operator} ${a}`
}

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
        updateDisplay(displayOperation, currentInput.join(''), previousInput.join(''))
        currentInput = [];
        currentInput.push(result);
    };
    
    

};

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

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
                    displayOperation = '+'
                    selectedOperator = add;
                    if (currentInput.length && previousInput.length) {
                        checkResult()
                    }
                    previousInput = currentInput;
                    currentInput = [];
                    break;
                case 'subtract':
                    displayOperation = '-'
                    selectedOperator = subtract;
                    if (currentInput.length && previousInput.length) {
                        checkResult()
                    }
                    previousInput = currentInput;
                    currentInput = [];
                    break;
                case 'multiply':
                    displayOperation = '*'
                    selectedOperator = multiply;
                    if (currentInput.length && previousInput.length) {
                        checkResult()
                    }
                    previousInput = currentInput;
                    currentInput = [];
                    break;
                case 'divide':
                    displayOperation = '/'
                    selectedOperator = divide;
                    if (currentInput.length && previousInput.length) {
                        checkResult()
                    }
                    previousInput = currentInput;
                    currentInput = [];
                    break;
                case 'result':
                    checkResult();
                    break;
            }
        }
    });
});

clearBtn.addEventListener('click', () => {
    clearDisplay();
});