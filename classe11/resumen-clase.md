# Resumen de la clase 11

## EN JAVASCRIPT

### 1. innerHTML
Inserta código HTML en tu HTML.
```javascript
//Sintaxis:
elemento.innerHTML = 'Nuevo texto';
```

### 2. innerText
Inserta texto plano en tu HTML.
```javascript
//Sintaxis:
elemento.innerText = 'Nuevo texto';
```

### 3. getAttribute()
Lee el valor de un atributo que tiene un elemento cuando indicamos su propiedad en parentesis.
```javascript
//Sintaxis:
elemento.getAttribute('class');
```

### 4. setAttribute()
Cambia el valor de un atributo que tiene un elemento cuando le indicamos su nuevo valor en parentesis.
```javascript
//Sintaxis:
elemento.setAttribute('class', 'nuevo-valor');
```

### 5. classList.add()
Para agregar un valor a una clase existe en un elemento.
```javascript
//Sintaxis:
elemento.classList.add('nuevo-valor1');
```

### 6. classList.remove()
Para eliminar el valor descrito en parentesis a la clase de un elemento.
```javascript
//Sintaxis:
elemento.classList.remove('nueva-valor1');
```

### 7. classList.toggle('titulo')
Si tiene un valor descrito entre parentesis se lo quita, o si no lo tiene se lo coloca.
```javascript
//Sintaxis:
elemento.classList.toggle('valor');
```

### 8. classList.contains('valor')
Devuelve true o false, si una propiedad tiene un valor descrito entre parentesis.
```javascript
//Sintaxis:
elemento.classList.contains('valor');
```

### 9. value = 'valor'
Colocarle un valor a un elemento, usualmente colocando en inputs.
```javascript
//Sintaxis:
elemento.value = 'valor';
```

### 10. createElement()
Crea un elemento HTML (`<img>, <section>, <header>, <div>`, etc).
```javascript
//Sintaxis:
document.createElement(img);//en lugar de img puede ir otro elemento
```

### 11. append()
Puede agregar al documento uno o varios elementos creados previamente al agregarlo entre parentesis.
```javascript
//Sintaxis:
elemento.append(img, img2);
```

### 12. appendChild()
Puede agregar al documento solo un elemento creado previameente al agregarlo entre parentesis.
```javascript
//Sintaxis:
elemento.appendChild(img);
```