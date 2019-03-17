let displayVal = '';
let prevButtonType = null;
let partString = '';

var checkButtonType = (button, buttonClass) => {
    switch (buttonClass) {
        case 'number basic':
            prevButtonType = buttonClass;
            updateDisplay(button, buttonClass);
            break;
        case 'operator basic':
            if (prevButtonType === 'operator') {
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
        case 'equal basic':
            //TODO FIX .O ANSWER FOR DECIMAL NUMBERS
            //TODO SET UP ERROR FOR DIV/0
            displayVal = (document.querySelector('#display').innerHTML = (eval(displayVal).toPrecision(3)));
            break;
        case 'clear basic':
            //displayVal = 0;
            document.querySelector('#display').innerHTML = 0;
            displayVal = '';
            prevButtonType = null;
            buttonClass = null;
            console.log(displayVal, prevButtonType, button, buttonClass);
            break;
            case ''
    }
};

var updateDisplay = (button, buttonClass) => {
    displayVal += button;
    document.querySelector('#display').innerHTML = displayVal;

};

function detectButton(event) {
    const button = event.target.value;
    const buttonClass = event.target.className;
    checkButtonType(button, buttonClass);
}

document.addEventListener("click", detectButton);
