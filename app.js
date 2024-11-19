const calculatorDisplay = document.querySelector('.calculator-display');
const calculatorOperationDisplay = document.querySelector('.calculator-operation-display');
const specialButtons = document.querySelectorAll('.special-operations')
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
    result = 0;
    calculatorOperationDisplay.innerHTML = '<span style="opacity: 0">0</span>'
    calculatorDisplay.innerHTML = '0';
};

const updateDisplay = (operator, a, b) => {
    calculatorOperationDisplay.innerHTML = `${a} ${operator} ${b}`
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
        previousInput = []; 
        previousInput.push(result);
        calculatorOperationDisplay.innerHTML = previousInput;
    };
    

};

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

specialButtons.forEach((button) => {

    button.addEventListener('click', () => {
        if (currentInput.length > 0) {
            switch(button.value) {
                case 'backspace':
                    if (currentInput.length > 0) {
                        currentInput.pop()
                        calculatorDisplay.innerHTML = currentInput.join('')
                    } else {
                        currentInput = []
                        calculatorDisplay.innerHTML = '<span style="opacity: 0">0</span>'
                    }
                break
                case 'decimal':
                    if (currentInput.includes('.')) {
                        return
                    }
                    else {
                        currentInput.push('.')
                    }
                break
                case 'negative':
                    if (currentInput.includes('-')) {
                        currentInput.shift()
                    } else {
                        currentInput.unshift('-')
                    }
                    calculatorDisplay.innerHTML = currentInput.join('')  
                break
            }
    
        }
    
    });

});

digits.forEach((button) => {
    
    button.addEventListener('click', () => {
        
        checkMathError(calculatorDisplay)

        if (currentInput.length <= 14) {
            currentInput.push(button.value);
        } 

        calculatorDisplay.innerHTML = currentInput.join('');

    });

});

operand.forEach((button) => {

    button.addEventListener('click', () => {

        if (currentInput.length >= 1) {
            switch(button.value) {              
                case 'add':
                    if (currentInput.length > 0 && previousInput.length > 0) {
                        selectedOperator = add;
                        displayOperation = '+';
                        updateDisplay(displayOperation, previousInput.join(''), '');
                        currentInput = [];
                        calculatorDisplay.innerHTML = '<span style="opacity: 0">0</span>'
                    } else {
                        previousInput = currentInput;
                        currentInput = [];
                        displayOperation = '+';
                        selectedOperator = add;
                        updateDisplay(displayOperation, previousInput.join(''), '');
                    }
                    break
                case 'subtract':
                    if (currentInput.length > 0 && previousInput.length > 0) {
                        selectedOperator = subtract;
                        displayOperation = '-';
                        updateDisplay(displayOperation, previousInput.join(''), '');
                        currentInput = [];
                        calculatorDisplay.innerHTML = '<span style="opacity: 0">0</span>'
                    } else {
                        previousInput = currentInput;
                        currentInput = [];
                        displayOperation = '-';
                        selectedOperator = subtract;
                        updateDisplay(displayOperation, previousInput.join(''), '');
                    }
                    break
                case 'multiply':
                    if (currentInput.length > 0 && previousInput.length > 0) {
                        selectedOperator = multiply;
                        displayOperation = '*';
                        updateDisplay(displayOperation, previousInput.join(''), '');
                        currentInput = [];
                        calculatorDisplay.innerHTML = '<span style="opacity: 0">0</span>'
                    } else {
                        previousInput = currentInput;
                        currentInput = [];
                        displayOperation = '*';
                        selectedOperator = multiply;
                        updateDisplay(displayOperation, previousInput.join(''), '');
                    }
                    break
                case 'divide':
                    if (currentInput.length > 0 && previousInput.length  > 0) {
                        selectedOperator = divide;
                        displayOperation = '/';
                        updateDisplay(displayOperation, previousInput.join(''), '');
                        currentInput = [];
                        calculatorDisplay.innerHTML = '<span style="opacity: 0">0</span>'
                    } else {
                        previousInput = currentInput;
                        currentInput = [];
                        displayOperation = '/';
                        selectedOperator = divide;
                        updateDisplay(displayOperation, previousInput.join(''), '');
                    }
                    break
                case 'result':
                    if (currentInput.length > 0 && previousInput.length === 0) {
                        previousInput = currentInput;
                        currentInput = []
                        updateDisplay(displayOperation, previousInput.join(''), '')
                    } else {
                        checkResult();
                        updateDisplay(displayOperation, previousInput.join(''), currentInput.join(''))
                        calculatorDisplay.innerHTML = result;
                    }
                    break;
            }
        }
    });
});

clearBtn.addEventListener('click', () => {
    clearDisplay();
});