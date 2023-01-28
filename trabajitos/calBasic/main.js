let first = document.querySelector('#first');
let second = document.querySelector('#second');
let resul = document.querySelector('.resul');

function addition(){
    let result = parseFloat(first.value,10) + parseFloat(second.value,10);
    resul.innerHTML = 'The result of the sum is: ' + result;
}

function subtraction(){
    let result = parseFloat(first.value,10) - parseFloat(second.value,10);
    resul.innerHTML = 'The result of the subtraction is: ' + result;
}

function multiply(){
    let result = parseFloat(first.value,10) * parseFloat(second.value,10);
    resul.innerHTML = 'The result of the multiplication is: ' + result;
}

function divide(){
    let result = parseFloat(first.value,10) / parseFloat(second.value,10);
    resul.innerHTML = 'The result of the division is: ' + result;
}