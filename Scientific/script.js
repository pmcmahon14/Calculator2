let displayVal = '';
let prevButtonType = null;

var checkButtonType = (button, buttonClass) => {
    switch (buttonClass) {
        case 'number basic':
            prevButtonType = buttonClass;
            updateDisplay(button, buttonClass);
            break;
        case 'operator basic':
            if (prevButtonType === 'operator basic') {
                return;
            } else {
                prevButtonType = buttonClass;
                updateDisplay(button, buttonClass);
            }
            break;
        case 'decimal basic':
            const array = displayVal.split('');
            if (array.includes('.')) {
                return;
            } else {
                prevButtonType = buttonClass;
                updateDisplay(button, buttonClass);
            }
            break;
        case 'percent':

        case 'equal basic':
            //TODO FIX .O ANSWER FOR DECIMAL NUMBERS
            //TODO SET UP ERROR FOR DIV/0
            displayVal = (document.querySelector('#display').innerHTML = eval(displayVal));
            //displayVal = (document.querySelector('#display').innerHTML = (eval(displayVal).toPrecision(3)));
            break;
        case 'clear basic':
            //displayVal = 0;
            document.querySelector('#display').innerHTML = 0;
            displayVal = '';
            prevButtonType = null;
            buttonClass = null;
            console.log(displayVal, prevButtonType, button, buttonClass);
            break;

    }
};

const number = (button, buttonClass) => {

};

var updateDisplay = (button) => {
    displayVal += button;
    document.querySelector('#display').innerHTML = displayVal;

};

function detectButton(event) {
    const button = event.target.value;
    const buttonClass = event.target.className;
    checkButtonType(button, buttonClass);
}

document.addEventListener("click", detectButton);
