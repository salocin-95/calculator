const calculatorDisplay = document.querySelector('.calculator-display');
const digits = document.querySelectorAll('.digits');
const operand = document.querySelectorAll('.operand');

let currentInput = [];
let previousInput = [];
let selectedOperator

digits.forEach((button) => {
    
    button.addEventListener('click', () => {

        currentInput.push(button.value);
        calculatorDisplay.innerHTML = currentInput.join('');
        console.log(button.value);

    });

});

operand.forEach((button) => {

    button.addEventListener('click', () => {

        if ((previousInput.length === 0) && (currentInput.length === 0)) {
            console.log('empty input')
        }

        switch (button.value) {
            case 'add':
                // This should happen if the current input is empty to avoid NaN results
                previousInput = currentInput;
                currentInput = [];
                selectedOperator = add;
                console.log(previousInput);
                console.log(currentInput);
                break;
            case 'substract':
                previousInput = currentInput;
                currentInput = [];
                selectedOperator = substract;
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

                if (selectedOperator != '') {
                    result = operate(selectedOperator, parseFloat(previousInput.join('')), parseFloat(currentInput.join('')))
                    calculatorDisplay.innerHTML = result;
                    currentInput = []
                    currentInput.push(result)
                }

                selectedOperator = '';
                break;
            case 'clear':
                currentInput = [];
                previousInput = [];
                selectedOperator = '';
                calculatorDisplay.innerHTML = '0';
            }
            // case 'backspace':
            //     currentInput.pop();
            //     calculatorDisplay.innerHTML = currentInput.join('')

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
        return `MATH ERROR`
    }
    return parseFloat(a / b).toFixed(1)
}

const operate = (operator, a, b) => {
    return operator(a, b);
}