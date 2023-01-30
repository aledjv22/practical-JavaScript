# Resumen de la clase 13

## .addEventListener:
Se trata de un método, es un escuchador que indica al navegador que este atento a la interacción del usuario.
La ventaja es que se escribe totalmente en el JV, sin necesidad de tocar el HTML.
Su sintaxis es muy sencilla:

```javascript
target.addEventListener('tipo_de_evento', función_a_lanzar, booleano);
```

**Target**, es el elemento que se escucha generalemente se identifica por su ID.
Los **tipos_de_evento** a escuchar, son los eventos ya conocidos de JavaScript, http://www.w3schools.com/jsref/dom_obj_event.asp:
- **blur** Cuando el elemento pierde el foco.
- **click** El usuario hace clic sobre el elemento.
- **dblclick** El usuario hace doble clic sobre el elemento.
- **focus** El elemento gana el foco.
- **keydown** El usuario presiona una tecla.
- **keypress** El usuario presiona una tecla y la mantiene pulsada.
- **keyup** El usuario libera la tecla.
- **load** El documento termina su carga.
- **mousedown** El usuario presiona el botón del ratón en un elemento.
- **mousemove** El usuario mueve el puntero del raton sobre un elemento.
- **mouseout** El usuario mueve el puntero fuera de un elemento.
- **mouseover** El usuario mantiene el puntero sobre un elemento.
- **mouseup** El usuario libera el botón pulsado del ratón sobre un elemento.
- **unload** El documento se descarga, bien porque se cierra la ventana, bien porque se navega a otra página.
**Función** que se ejecuta cuando se escucha el evento.
El **booleano**, es opcional, es un valor que define el orden del flujo de los eventos, cuando hay varios eventos posibles.
Si tenemos un botón dentro de un div y dentro del body.
**true: **El flujo de eventos es como el representado, y la fase de captura ocurre al lanzarse el evento. El orden de propagación para el ejemplo siguiría el orden del árbol del documento en el DOM (http://www.w3.org/TR/DOM-Level-3-Events/#event-flow) y sería, por tanto, el indicado, `body-div-button`
**false:** Permite saltar la fase de captura, y propagación seguirá sólo la burbuja. Así, el orden sería `button-div-body`.
Ejemplo:

```javascript
document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}
```

Puede aplicarse más de una función a un mismo evento.

```javascript
document.getElementById("myBtn").addEventListener("click", myFunction);
document.getElementById("myBtn").addEventListener("click", someOtherFunction);
```

Puede aplicarse diferentes tipos de evento a un mismo elemento

```javascript
document.getElementById("myBtn").addEventListener("mouseover", myFunction);
document.getElementById("myBtn").addEventListener("click", someOtherFunction);
document.getElementById("myBtn").addEventListener("mouseout", someOtherFunction);
```

Puede escribirse la función directamente, equivale a: `elemento.onclick = función () { /* ACCIONES */ };`
```javascript
elemento.addEventListener('click', function() { /*ACCIONES*/ }, false);
```

```javascript
document.getElementById("myBtn").addEventListener("click", function() {
this.style.backgroundColor = "red";
});
```

Puede borrarse un escuchador empleando el método removeEventListener()

```javascript
// crear un escuchador
document.getElementById("myDIV").addEventListener("mousemove", myFunction);
//borrar un escuchador
document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
```