
        
const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');
const resetButton = document.querySelector('.btn-reset');
const equalButton = document.querySelector('.btn-equal');
const delButton = document.querySelector('[data-num="DEL"]');

let currentInput = '';
let lastOperator = '';
let resultCalculated = false;


buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.getAttribute('data-num');

        if (value === 'DEL') {
            deleteLast();
        } else if (value !== null && value !== '=') {
            appendValue(value);
        }
    });
});


resetButton.addEventListener('click', () => {
    resetCalculator();
});


equalButton.addEventListener('click', () => {
    calculateResult();
});


function appendValue(value) {
    if (resultCalculated) {
        
        currentInput = '';
        resultCalculated = false;
    }

    if (currentInput === '0' && value !== '.') {
        currentInput = value; 
    } else {
        currentInput += value;
    }

    screen.value = currentInput;
}


function calculateResult() {
    if (currentInput !== '') {
        try {
            
            const sanitizedInput = currentInput.replace(/x/g, '*');
            const result = eval(sanitizedInput); 
            currentInput = result.toString();
            screen.value = currentInput;
            resultCalculated = true; 
        } catch (error) {
            screen.value = 'Error';
        }
    }
}


function resetCalculator() {
    currentInput = '';
    screen.value = '0';
}


function deleteLast() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        screen.value = currentInput || '0';
    }
}

    
