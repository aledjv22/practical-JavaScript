const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

function btnOnClick(){
    let in1 = Number(input1.value);
    let in2 = Number(input2.value);
    pResult.innerText = "Resultado: "+(in1+in2); 
}

