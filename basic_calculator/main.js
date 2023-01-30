//Variables:
let first = document.querySelector('#first');
let second = document.querySelector('#second');
let resul = document.querySelector('.resul');
let suma = document.querySelector('#addition');
let resta = document.querySelector('#subtraction');
let multiplicacion = document.querySelector('#multiply');
let division = document.querySelector('#divide');

//Eventos
suma.addEventListener('click',addition);
resta.addEventListener('click',subtraction);
multiplicacion.addEventListener('click', multiply);
division.addEventListener('click',divide);


//Funciones
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