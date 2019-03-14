let displayVal = '';
let prevButtonType = null;
let decimalTest = false;

var checkButtonType = (button, buttonClass) => {
    switch (buttonClass) {
        case 'number':
            console.log(button, buttonClass);
            prevButtonType = buttonClass;
            console.log(prevButtonType);
            updateDisplay(button, buttonClass);
            break;
        case 'operator':
            console.log(prevButtonType);
            console.log(prevButtonType === 'operator');
            if (prevButtonType === 'operator') {
                return;
            } else {
                prevButtonType = buttonClass;
                updateDisplay(button, buttonClass);
            }
            break;
        case 'decimal':
            console.log(typeof displayVal);
            const array = displayVal.split('');
            console.log(array);
            if (array.includes('.')) {
                return;
            } else {
                prevButtonType = buttonClass;
                updateDisplay(button, buttonClass);
            }
            break;
        case 'equal':

    }
};

var updateDisplay = (button, buttonClass) => {
    console.log(button, buttonClass);
    displayVal += button;
    document.querySelector('#display').innerHTML = displayVal;

};

function detectButton(event) {
    const button = event.target.innerText;
    const buttonClass = event.target.className;
    checkButtonType(button, buttonClass);
    /*switch (buttonClass) {
        case 'number':
            console.log(buttonClass !== 'number');

            document.querySelector('#display').innerHTML = displayVal;
            displayVal += button;
            break;
        case 'operator':
            console.log(displayVal[displayVal.length-1].buttonClass);
            if (displayVal.length-1 !== (buttonClass === 'operator')) {
                displayVal += button;

            }
    }

    if (buttonClass === 'number') {

        console.log(displayVal);
    } else {
        //math.push(button);
        console.log(displayVal);
    }*/

}

document.addEventListener("click", detectButton);
