
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLastEntered() {
    let lastEntered = document.getElementById('display').value;
    document.getElementById('display').value = lastEntered.slice(0, -1);
}

function calculateResults(){
    var expression = document.getElementById('display').value;
    var result;

    try {
        result = eval(expression);
        document.getElementById('display').value = result;
    }
    catch (error) {
        document.getElementById('display').value = 'Error';
    }
}