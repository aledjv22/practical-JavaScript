# Resumen de la clase 10

#### Código truco para HTML:
- Si se escribe una etiqueta pegado a un . (punto) y un name, das enter o tab, se plasma la etiqueta con la clase nombrado como el name.
Ejemplo: 
p.parrafo (se convierte en)

```html
<p class="parrafo"></p>
```

- Si se escribe una etiqueta pegado a un # y un name, das enter o tab, se plasma la etiqueta con la id nombrado con el name.
Ejemplo:
p#parrafo (se convierte en)

```html
<p id="parrafo"></p>
```

- Si se escribe un elemento, pegado un > mas otro elemento, se podra obtener un elemento dentro del mismo.
Ejemplo:
p>p (se convierte en)

```html
<p>
	<p></p>
</p>
```

- Si se escribe un elemento y pegado un + más otro elemento, podremos tener otro del mismo.
Ejemplo:
p+h2+div (se convierten en)

```html
<p></p>
<h2></h2>
<div></div>
```

- Si se escribe un elemento y pegado un * mas una cantidad determinada, podré multiplicar el elemento.
Ejemplo:
div*3 (se convierten en):
```html
<div></div>
<div></div>
<div></div>
```

#### Codigos acceso JavaScript
```javascript
document.getElementsByTagName('li'); //Accede al elemento por medio de la etiqueta 'li'.
document.getElementsByClassName('car'); //Accede al elemento por medio de la clase 'card'.
document.getElementsByName('name'); //Accede a los elementos por medio de atributo
                                    //'name' del HTML.
document.getElementsByClassName('menu'); //Accede a los elementos por medio del id 'menu'.
document.querySelector('a'); //Accede al elemento por medio de la etiqueta 'a'. Accede solo
                             //a el primer elemento de tipo 'a' del documento.
document.querySelectorAll('a'); //Accede al elemento medio de la etiqueta 'a'.Accede
                                //a todos los elementos del tipo 'a' del documento.
document.querySelector('.card'); //Accede al elemento por medio de la clase 'card'.
document.querySelector('#card'); //Accede a los elementos por medio del identificador 'card'.
document.querySelector('.card')[2]; //Accede al elemento por medio de la clase 'card' y busca
                                    //el elemento en la posicion indicada.
document.querySelector('.menu li'); //Accede a todos los elementos 'li' que tengan la 
                                    //clase 'menu'.
```