# Funciones

## 24. Funciones en JavaScript
Una función es un bloque de código reutilizable que se ejecuta cuando es llamado. Las funciones te permiten organizar mejor tu código y evitar la repetición.

### Definir una función
```javascript
function saludar() {
  console.log("¡Hola, mundo!");
}
```

### Llamar a una función
```javascript
saludar(); // Muestra "¡Hola, mundo!"
```

También puedes definir funciones que acepten parámetros (valores que se pasan a la función).

```javascript
function saludarConNombre(nombre) {
  console.log(`Hola, ${nombre}!`);
}

saludarConNombre("Ana"); // Muestra "Hola, Ana!"
```

---

## 25. Return en Funciones
El operador `return` se utiliza para devolver un valor desde una función. Cuando se ejecuta `return`, la función termina y devuelve el resultado especificado.

### Ejemplo:
```javascript
function sumar(a, b) {
  return a + b;
}

let resultado = sumar(5, 3);
console.log(resultado); // Muestra 8
```

Si una función no tiene `return`, devuelve `undefined` por defecto.

---

## 26. Scope en JavaScript
El **scope** (alcance) determina dónde puedes acceder a una variable en tu código. Existen dos tipos principales de scope en JavaScript:

### Scope local
Las variables declaradas dentro de una función solo pueden ser accedidas dentro de esa función.

```javascript
function mostrarMensaje() {
  let mensaje = "Hola";
  console.log(mensaje); // Muestra "Hola"
}

// console.log(mensaje); // Error: mensaje no está definido
```

### Scope global
Las variables declaradas fuera de cualquier función tienen alcance global y pueden ser accedidas desde cualquier parte del programa.

```javascript
let saludo = "Hola, mundo";

function mostrarSaludo() {
  console.log(saludo);
}

mostrarSaludo(); // Muestra "Hola, mundo"
```

---

## 27. Objeto `arguments`
El objeto `arguments` es una característica especial de las funciones que permite acceder a todos los argumentos que se pasaron a la función, incluso si no se declararon explícitamente como parámetros.

### Ejemplo:
```javascript
function sumarTodos() {
  let suma = 0;
  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i];
  }
  return suma;
}

console.log(sumarTodos(1, 2, 3, 4)); // Muestra 10
```

Ten en cuenta que `arguments` no está disponible en funciones flecha.

---

## 28. Expresión de Funciones y Funciones Flecha

### Expresión de función
Una expresión de función consiste en asignar una función a una variable.

```javascript
const saludar = function() {
  console.log("¡Hola!");
};

saludar(); // Muestra "¡Hola!"
```

### Funciones flecha
Las funciones flecha son una forma más concisa de escribir funciones. Se utilizan con el operador `=>`.

```javascript
const saludar = () => {
  console.log("¡Hola!");
};

saludar(); // Muestra "¡Hola!"
```

Si la función tiene un solo parámetro, puedes omitir los paréntesis.

```javascript
const saludarConNombre = nombre => {
  console.log(`Hola, ${nombre}!`);
};

saludarConNombre("Ana"); // Muestra "Hola, Ana!"
```

---

## 29. Funciones Flecha
Las funciones flecha también pueden devolver valores de forma implícita si el cuerpo de la función es una sola expresión.

### Ejemplo:
```javascript
const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 5)); // Muestra 20
```

Si necesitas escribir más de una línea de código, debes usar llaves `{}` y la palabra clave `return`.

```javascript
const sumar = (a, b) => {
  let resultado = a + b;
  return resultado;
};

console.log(sumar(3, 7)); // Muestra 10
```

---

