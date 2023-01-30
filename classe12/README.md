# Resumen de la clase 12 - Eventos

### En HTML :

- Si en el elemento **input** (de tipo text automatico hasta donde tengo entendido) se le agrega el atributo **onchange**, seguido coloco un igual (=), pegado unas comillas ("") y entre ellas código JavaScript, lo que se consigue con ello es que tras colocar algo en el **input** y dejarlo de seleccionar consigo que se ejecute la programación plasmada entre "". Acontinuación escribiré la linea a ejecutar si se desea agregar el atributo **onchange** en un **input** con la intención de que al usar el elemento, en la consola se plasme el mensaje de **'Hola uwu'.** Ej.:

```html
<input onchange="console.log('Hola uwu')"/>
```

- Si en un elemento **button** le otorgo el atributo **onclick**, seguido coloco un igual (=), pegado unas comillas ("") y entre ellas código JavaScript, lo que se consigue con ello es que tras hacer **click** en el **button** consigo que se ejecute la programación plasmada entre "". Acontinuación escribiré la linea a ejecutar si se desea agregar el atributo **onclick** en un **button**, el cual tras hacerle click plasmo por consola el mensaje de **'Todo bien'**. Ej.:

```html
<button onclick="console.log('Todo bien')">Pulsame</button>
```


- No es rentable el realizar los metodos anteriores de escribir las lineas de código JavaScript en el elemento de HTML, es por ello que para los eventos es que utilizamos funciones generadas en nuestro archivo JavaScrpit, pero para utilizarla, entre las comillas en lugar del código JavaScript coloco el nombre de la funcion con parentesis. Por ejemplo supongamos que en mi archivo .js cuento con una funcion de nombre btnOnClick, la cual deseo usar al momento de que alguien haga click en un boton, entonces coloco todo en base a lo aprendido antes escribiendo el name de la funcion con parentesis cerrados al final.

```html
<button onclick="btnOnClick()"></button>
```



### En JavaScript

- Si deseo crear la funcion para el button de html, el cual imprima 'Todo bien',  realizo lo siguiente:

```javascript
function bntOnClick(){
	console.log('Todo bien');
}
```


- Si deseo convertir un **string** a **número**, tengo dos opciones a utilizar, la función **Number()** y **parseInt()**. 


#### Number ()
Funciona colocando el string a convertir entre sus parentesis. 

- Se encarga de convertir el tipo.

```javascript
//Convert type
Number('32px'); //NaN
Number('5e1'); //
```

- Resultados al pasar valores especiales:

```javascript
Number(); //0
Number(null); //0
Number(true); //1
Number(''); //0
```

- Una **buena práctica** es **NO utilizar 'new Number()**' para comparar los números:

```javascript
Number('2') == 2; //true
Number('2') === 2; //true

new Number ('2') == 2; //true
new Number ('2') === 2;  //false

const a = new Number('2');
const b = new Number('2');

a == b; //false
a === b; //false
```


- **Consejo:** En lugar de usar el Number() puedo usar el operador '+'.

```javascript
+'010'; // 10
+'2e1'; // 20
+'0xF'; // 15
```

#### parseInt()

Funciona colocando el string a convertir entre sus parentesis. 

- Analiza el valor de entrada:

```javascript
parseInt('32px'); // 32
parseInt('5e1'); // 5
```


- Acepta 2 parametros. El primero es el string a convertir y el segundo se utiliza para indicar la base.

```javascript
parseInt('0101'); // 101 decimal predeterminado
parseInt('0101', 10); // 101 decimal
parseInt('0101', 2); // 5 binario
```


- Resultados al pasar valores especiales:

```javascript
parseInt(); // NaN
parseInt(null); // NaN
parseInt(true); // NaN
parseInt(''); // NaN
```


- Siempre pase la base a **parseInt**. Es una buena práctica ya que al especificar la base a trabajar se evitan errores de automatismo. Si el valor comienza con **0x** o **0X,** entonces la base es 16 (hexa), en otros casos es 10 (dec).

```javascript
parseInt('0xF'); // 15
parseInt('0XF'); // 15
parseInt('0xF', 16); // 15

parseInt('0xF', 10); // 0, vale eso porque a pesar de estar escrito en hexa yo aclare la deci 
```


- Recorta los espacios antes de analizar el nro.

```javascript
parseInt('   5   '); // 5
parseInt('12 345'); // 12, not 12345
```