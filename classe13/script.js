const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', btnOnClick);

function btnOnClick() {
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}

// La linea 8 es uno de los 2 tipos de soluciones para el index de la clase 13.
// 1. Esta primera solución corresponde a la primera mencionada en el index de la
//    misma clase 13. La misma consiste en mencionar el elemento del boton, seguido
//    del '.addEventListener' el cual me permite detectar eventos de diferentes estilos
//    en este caso el 'click', reemplazando el atributo 'onclick' que se podria utilizar
//    en el index para lo mismo, utilizando el atributo haciamos llamado de nuestra 
//    funcion de .js entre las comillas tras el igual, pero en este caso al utilizar
//    '.addEventListener' entre sus parentesis coloco primero entre comillas el evento 
//    que deseo usar para ejecutar, y separado de una coma el nombre de la funcion 
//    a ejecutar en caso de saltar el evento. Ojo, al momento de colocar el nombre 
//    de la funcion entre los parentesis solo colocar el nombre NO COLOCAR LOS PARENTESIS
//    ya que '.addEventListener' ya lo toma como funcion. 
//    Por lo anterior la linea de codigo a usar es la siguiente:
//    btn.addEventListener('click', btnOnClick);


// 2. Esta solucion se conecta con la segunda del index de la clase 13.
//    la misma consiste en primero que nada crear una constante para el elemento form,
//    tras ello mencionar a form con el '.addEventListener' y esta vez en los parentesis 
//    primero se colocara el evento 'submit' ya que el mismo se genera en el form con el 
//    boton (ultimo) sin tipo y por ende le asigna el 'submit', tras ello se pone el nombre
//    de la funcion a ejecutar separado por una coma. En este caso la funcion si tendra un
//    parametro de entrada el cual se llama 'event' (sin las comillas) el cual la primera 
//    linea debe ser 'event.preventDefault();' la cual sirve para activar/desactivar
//    la accion por defecto de cambiar de pagina (o la misma con los valores del form),
//    haciendo que las interacciones aparezcan unos instantes y se eliminen tras ello.
//    Es por eso que se coloca lo anterior para que solo se muestre lo que se debe sin 
//    cambiar de pagina por defecto.
//    Tras todo lo anterior las lineas de codigo son:

//     const form = document.querySelector('#form'); 
//     form.addEventListener('submit', sumarInputValues) 

//     function sumarInputValues(event) {
//       event.preventDefault();
//       const sumaInputs = input1.value + input2.value;
//       pResult.innerText = "Resultado: " + sumaInputs;
//     }


// En el resumen.md tratare de explicarlo de manera general.