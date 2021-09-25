$(document).ready(onReady);
// To load calculation history upoad refresh of page
//$(document).ready(getMathData());
// global variable to keep track of clicked operation
let operationVariable;

function onReady() {
    console.log('on Ready');

    //$('#submitBtn').on('click', sendMath);
    $('.operationBtn').on('click', getClickedOperation);
    $('#clearBtn').on('click', clearInputs);
}
// Clears inputs 
function clearInputs() {
    $('#inputOne').val('');
    $('#inputTwo').val('');
    
} 

// function to get clicked operation using 'this'
function getClickedOperation() {
    // if what was clicked has this certain id 
    if ($(this).is('#plusBtn')) {
    // then let the variable equal the operation
        operationVariable = '+';
    }
    else if ($(this).is('#minusBtn')) {
        operationVariable = '-';
    }
    else if ($(this).is('#multiplyBtn')) {
        operationVariable = '*';
    }
    else if ($(this).is('#divideBtn')) {
        operationVariable = '/';
    }
}


function getMathData() {
    console.log('inside getMathData');
    
    // gets data from GET endpoint in server
        $.ajax({
            method: 'GET',
            url: '/calculate'
        }).then((response) => {
        console.log('GET /calculate response', response);
        // assingning variables to elements on the html side
        let calcList = $('#mathHistory');
        let answer = $('#answer');
        // clearing out elements
        calcList.empty();
        answer.empty();
//looping through each item in the response and post it into the DOM

// empty out answer element 
         // append items to DOM
        for (let calc of response) { // response is the array from server.js
            answer.empty();
            calcList.append(`
                <li>
                    ${calc.inputOne} ${calc.data} ${calc.inputTwo} = ${calc.answer}
                </li>
            `);
            answer.append(calc.answer);
        }
    })
 }

