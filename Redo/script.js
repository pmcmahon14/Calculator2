let displayVal = '';
let prevButtonType = null;

var checkButtonType = (button, buttonClass) => {
    switch (buttonClass) {
        case 'number':
            prevButtonType = buttonClass;
            updateDisplay(button, buttonClass);
            break;
        case 'operator':
            if (prevButtonType === 'operator') {
                return;
            } else {
                prevButtonType = buttonClass;
                updateDisplay(button, buttonClass);
            }
            break;
        case 'decimal':
            const array = displayVal.split('');
            if (array.includes('.')) {
                return;
            } else {
                prevButtonType = buttonClass;
                updateDisplay(button, buttonClass);
            }
            break;
        case 'equal':
            displayVal = (document.querySelector('#display').innerHTML = eval(displayVal));

    }
};

var updateDisplay = (button, buttonClass) => {
    console.log(button, buttonClass);
    displayVal += button;
    document.querySelector('#display').innerHTML = displayVal;

};

function detectButton(event) {
    const button = event.target.value;
    const buttonClass = event.target.className;
    checkButtonType(button, buttonClass);
}

document.addEventListener("click", detectButton);
