/**
 * Created by Patrick on 2/11/2017.
 */
$(document).ready(function() {
    $('button').click(buttonClick);
    console.log('Ready!');
});

var selectButton = undefined;

//function to detect button pushed

function buttonClick() {
    selectButton = $(this).val();
    console.log(selectButton);
    console.log('T ' + typeof selectButton);
    switch(typeof selectButton) {
        case number:
            console.log(typeof selectButton);
            break;
    }
}

//function to detect operation



//function for factorial

function factorial() {
    for (var i = keyvalue; i > 0; i--) {
        var total = 1;
        total = keyvalue + total;
    }
    console.log(total);
    $('#display').total;
}

//function for order of operations



//function for reciprocal

function reciprocal() {
    var reciprocal = 1/keyvalue;
    $('#display2').reciprocal;
}

//function for memory and recall



//function for clear/clear all



//function for roots

function roots() {
    $('.display2').text(num1(1/num2));
}

//function for exponent

function power() {
    Math.power(x,y);
    //need to use reciprocal for root
}

//function for mortgage payment



//function for NPV



//function for IRR



//function for bonds



//function for random number

function random() {
    Math.random()
}

//function for breakeven



//function for logarithm

function log() {

}

//function for trigonometry



//function for CF



//function for depreciation