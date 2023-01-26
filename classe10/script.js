//Para trabajar con  los elementos de HTML en JavaScript, creo unas variables los cuales 
//serán quienes contengan a los identificadores (clases, id, etc) de los elementos del HTML

//USANDO 'document.querySelector()'
const h1 = document.querySelector('h1'); //Esta forma me permite seleccionar en base el 
                                         //name de la etiqueta 'h1'.

const p = document.querySelector('p'); //Esta forma me permite seleccionar en base el 
                                        //name de la etiqueta 'p'.

const parrafito = document.querySelector('.parrafito'); //Si deseo seleccionar un elemento en 
                                                        //especifico mediante su clase, debo
                                                        //colocar un punto (.) antes del name
                                                        //de su clase.
                            
const pid = document.querySelector('#pid'); //Al colocar un # antes del name del id del 
                                            //elemento que deseo usar es que lo selecciono 
                                            //usando el querySelector.

const input = document.querySelector('input'); //Selecciono todos los elementos 'input' del HTML



//Quiero ver las constantes creadas, para ello creare un objeto llamado 'ale'
//con ellas para luego ver su valor con console.log
const ale = {h1, p, parrafito, pid, input};
console.log(ale);


//Para señalar un elemento mediante su ID puedo usar document.getElementById().
//EJ.:
const PID = document.getElementById(pid); //En este caso no coloco el simbolo #
                                          //porque se que se habla del ID.


//Para señalar un elemento mediante su CLASE puedo usar document.getElementByClassName(),
//Ej.:
const PCLASS = document.getElementsByClassName(parrafito); //No coloco el punto porque ya se 
                                                           //que es una class la que usaré.

                            
//El favorito del profe Juan DC es el 'document.querySelector()' ya que es practicamente
//utilizar el mismo tipo de escritura que en CSS.