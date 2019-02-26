/**
 * Created by Patrick on 12/6/2016.
 */

/*document.addEventListener("DOMContentLoaded", function() {

});*/




const calculator = document.querySelector('.calculator');
console.log(calculator);
const keys = calculator.querySelector('.calculator__keys');
console.log(keys);

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        console.log(action);
        if (!action) {
            console.log('number was pushed');
        }
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            console.log('operator selected');
        }
        if (action === 'decimal') {
            console.log('decimal selected');
        }
        if (action === 'clear') {
            console.log('clear selected');
        }
        if (action === 'clearall') {
            console.log('clearall selected');
        }
        if (action === 'equals') {
            console.log('equals selected');
        }
    }
});



