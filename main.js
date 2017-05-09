/**
 * Created by Patrick on 11/29/2016.
 */


var operation_array = [""];
var operation_index = 0;
var operator;
var somebutton;



$(document).ready(function () {
    $(".number").click(num_handler);
    $(".operator").click(ops_handler);
    $(".equal").click(process_input);
//    $(".clear").click(clear_handler);
});

//handles button input

function num_handler() {
    // LFZ Start
//takes in type and value of number (including decimal) button selected
//sets button selected equal to specified index of operation_array
//shows inputs on calculator display
    // LFZ End
}

//handles math with more than two numbers

function ops_handler() {
    if (operation_array.length === 3); {
        process_input();
    }
    somebutton = {
        type: "operator",
        value: $(this).text()
    }
    if (operation_array[0] !== "number") {
        return;
    } else {
        console.log(somebutton);
        operation_array[1] = $(this).text();
        operation_index = operation_index + 2;
        operation_array[operation_index] = "";
        console.log(operation_array);
        display_data();
    }
}

//clear button to clear array

/*function clear_handler() {
 somebutton = {
 type: "clear",
 value: $(this).text()
 };
 operation_array[""] = $(this).text();
 };*/

//handles numbers with more than one digit

function process_input(){
    if (operation_array.length < 3) {
        return;
    } else (operation_array.length >= 3); {
        var num1 = parseFloat(operation_array[0]);
        var num2 = parseFloat(operation_array[2]);
        var operator = operation_array[1];
        var result = do_math(num1, num2, operator);
        operation_array.splice(0, 3, result);
        operation_index = 0;
    }
    display_data();
}

//displays numbers on calculator

function display_data(){
    var output = operation_array.join('');

    $(".display > .one").text(output);
}

//performs arithmetic

function do_math(num1, num2, operator) {
    // LFZ Start
    //shows what operator is for testing below
    //starts test loop for operators
//performs addition if addition test is true
//performs subtraction if subtraction test is true
//performs multiplication if multiplication test is true
//returns error if dividing by zero
//performs division if division test is true, but not by zero
    // LFZ End
}
