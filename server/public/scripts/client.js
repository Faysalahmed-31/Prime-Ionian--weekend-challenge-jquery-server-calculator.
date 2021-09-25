$(document).ready(onReady);
// To load calculation history upoad refresh of page
//$(document).ready(getMathData());
// global variable to keep track of clicked operation
let operationVariable;

function onReady() {
    console.log('on Ready');
    $('#submitBtn').on('click', sendMath);
    $('.operationBtn').on('click', getClickedOperation);
    $('#clearBtn').on('click', clearInputs);
}
// Clears inputs 
function clearInputs() {
    $('#inputOne').val('');
    $('#inputTwo').val('');
    
} 