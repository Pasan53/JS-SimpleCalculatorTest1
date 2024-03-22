//displaying the values entered
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

//clearing the input box
function clearDisplay() {
    document.getElementById('display').value = '';
    // var x = document.getElementById('display').value;
    // x -= x;
    // document.getElementById('display').value = x;
}

function calculateResults(){ 
    var expression = document.getElementById('display').value;
    var result;
    try {
        result =eval(expression);
        document.getElementById('display').value = result;
    }
    catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
