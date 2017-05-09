/**
 * Created by Patrick on 12/6/2016.
 */

$(document).ready(function () {
    $(".number").click(numHandler);
    $(".operator").click(opsHandler);
    $(".equal").click(processInput);
    $(".clear").click(clearHandler);

});

var operationArray = [""];
var operationIndex = 0;
var operator;
var somebutton;

//handles button input

function numHandler() {
    somebutton = {
        type: "number",
        value: $(this).text()
    };
    console.log('Somebutton ' + somebutton);
    operationArray[operationIndex] += $(this).text();
    console.log('Array ' + operationArray);
    displayData();
}

//handles math with more than two numbers

function opsHandler() {
    if (operationArray.length === 3); {
        processInput();
    }
    somebutton = {
        type: "operator",
        value: $(this).text()
    }
    if (operationArray[0] === "") {
        return;
    } else {
        console.log('Op array ' + somebutton);
        operationArray[1] = $(this).text();
        //operationIndex = operationIndex + 2;
        //operationArray[operationIndex] = "";
        console.log('Op array ' + operationArray);
        displayData();
    }
}

//clear button to clear array

function clearHandler() {
 somebutton = {
 type: "clear",
 value: $(this).text()
 };
 operationArray[""] = $(this).text();
 };

//handles numbers with more than one digit

function processInput(){
    x = operationArray.length-1;
    if (operationArray[x] === undefined || operationArray[x] typeof =) {
        return;
    } else (operationArray.length >= 3); {
                var num1 = parseFloat(operationArray[0]);
                var num2 = parseFloat(operationArray[2]);
                var operator = operationArray[1];
                var result = doMath(num1, num2, operator);
                operationArray.splice(0, 3, result);
                operationIndex = 0;
            }
            displayData();
        }

//displays numbers on calculator

function displayData(){
    var output = operationArray.join('');

    $(".display > .one").text(output);
}

//performs arithmetic

function doMath(num1, num2, operator) {
    console.log('do_math operator is ' + operator);
    if (operator === "+") {
        return(num1 + num2);
    } else if (operator === "-") {
        return(num1 - num2);
    } else if (operator === "x") {
        return(num1 * num2);
    } else if (num2 === 0) {
        return ("error");
    } else {
        return(num1 / num2);
    }
}

