const math = [];

function detectButton(event) {
    const button = event.path[0].value;
    console.log(button);
    console.log(typeof button);
    const buttonClass = event.path[0].className;
    if (buttonClass === 'number') {
        //parseFloat(button);
        math.push(button);
        document.querySelector('#display').innerHTML = math.toString();
        console.log(math);
        console.log(typeof math[0]);
    } else {
        math.push(button);
        console.log(math);
    }

}

document.addEventListener("click", detectButton);
    console.log(event);
    //console.log(typeof parseFloat(button));
