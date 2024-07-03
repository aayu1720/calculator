let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function resetCalculator() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert('Invalid Expression');
        resetCalculator();
    }
}
