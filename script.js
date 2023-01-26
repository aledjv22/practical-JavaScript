const h1 = document.querySelector('h1');
//const p = document.querySelector('p');
//const p = document.querySelectorAll('p');
const p = document.getElementsByClassName('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});
//comentarios:
console.log(document.getElementsByTagName('li')); //Accede al elemento por medio de la etiqueta 'li'.
console.log(document.getElementsByClassName('card')); //Accede al elemento por medio de la clase 'card'.
console.log(document.getElementsByName('nombre')); //Accede a los elementos por medio del atributo 'name' del documento, name se utiliza en los formularios.
console.log(document.getElementById())