let displayVal = '';

function detectButton(event) {
    const button = event.target.innerText;
    //
    const buttonClass = event.target.className;

    if (buttonClass === 'number') {
        document.querySelector('#display').innerHTML = displayVal;
        console.log(displayVal);
        displayVal += button;
        console.log(displayVal);
    } else {
        //math.push(button);
        console.log(displayVal);
    }

}

document.addEventListener("click", detectButton);
