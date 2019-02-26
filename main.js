/**
 * Created by Patrick on 11/29/2016.
 */


const calculator = document.querySelector('.calculator');
//console.log(calculator);
const display = document.querySelector('.calculator_display');
console.log(display);
const keys = calculator.querySelector('.calculator_keys');
//console.log(keys);


keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        console.log(key);
        const action = key.dataset.action;
        console.log(action);
        const keyContent = key.textContent;
        console.log(keyContent);
        const displayedNum = display.textContent;
        console.log(displayedNum);
        console.log(typeof displayedNum);
        if (!action) {
            console.log(displayedNum === '0');
            if (displayedNum === '0') {
                display.textContent = keyContent;
                console.log(display.textContent);
            } else {
                display.textContent = displayedNum + keyContent;
                console.log('display content 2 is ' + display.textContent);
            }
            console.log('number was pushed');
        }
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
        }
        if (action === 'decimal') {
            display.textContent = displayedNum + '.';
            console.log('decimal selected');
        }
        if (action === 'clear') {
            console.log('clear selected');
        }
        /*if (action === 'clearall') {
            console.log('clearall selected');
        }*/
        if (action === 'calculate') {
            const secondValue = displayedNum;
        }
    }
});






