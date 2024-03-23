// script.js
let currentMode = 'light';

function appendInput(value) {
    const result = document.getElementById('result');
    result.value += value;
}

function calculate() {
    const result = document.getElementById('result');
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}

function clearResult() {
    const result = document.getElementById('result');
    result.value = '';
}
