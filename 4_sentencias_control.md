# Sentencias de control

## 30. Condicional If/Else
La sentencia `if` se utiliza para ejecutar un bloque de código si una condición es verdadera. Si la condición es falsa, puedes utilizar `else` para ejecutar un bloque alternativo.

### Sintaxis:
```javascript
if (condicion) {
  // Código a ejecutar si la condición es verdadera
} else {
  // Código a ejecutar si la condición es falsa
}
```

### Ejemplo:
```javascript
let edad = 18;
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
```

---

## 31. Condicional Else If
Si necesitas verificar múltiples condiciones, puedes usar `else if`.

### Ejemplo:
```javascript
let nota = 85;
if (nota >= 90) {
  console.log("Sobresaliente");
} else if (nota >= 70) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}
```

En este ejemplo, la sentencia `else if` se usa para evaluar una condición adicional si la primera es falsa.

---

## 32. Anidar Condicionales
Puedes anidar condicionales, es decir, incluir una sentencia `if` dentro de otra.

### Ejemplo:
```javascript
let numero = 10;
if (numero > 0) {
  if (numero % 2 === 0) {
    console.log("El número es positivo y par");
  } else {
    console.log("El número es positivo e impar");
  }
} else {
  console.log("El número no es positivo");
}
```

---

## 33. Sentencia Switch
La sentencia `switch` se utiliza para ejecutar diferentes bloques de código según el valor de una expresión.

### Sintaxis:
```javascript
switch (expresion) {
  case valor1:
    // Código a ejecutar si la expresión es igual a valor1
    break;
  case valor2:
    // Código a ejecutar si la expresión es igual a valor2
    break;
  default:
    // Código a ejecutar si ninguno de los casos se cumple
}
```

### Ejemplo:
```javascript
let dia = "lunes";
switch (dia) {
  case "lunes":
    console.log("Hoy es lunes");
    break;
  case "martes":
    console.log("Hoy es martes");
    break;
  default:
    console.log("No es lunes ni martes");
}
```

---

## 34. Ciclo For
El ciclo `for` se utiliza para ejecutar un bloque de código un número determinado de veces.

### Sintaxis:
```javascript
for (inicializacion; condicion; actualizacion) {
  // Código a ejecutar en cada iteración
}
```

### Ejemplo:
```javascript
for (let i = 0; i < 5; i++) {
  console.log(`Iteración ${i}`);
}
```

---

## 35. Ejercicio Ciclo For
### Ejercicio:
Imprimir los números del 1 al 10.

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

### Resultado:
El programa imprimirá los números del 1 al 10 en la consola.

---

## 36. Tablas de multiplicar con Ciclo For
Podemos utilizar un ciclo `for` para generar una tabla de multiplicar.

### Ejemplo:
Generar la tabla del 5:

```javascript
let numero = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}
```

Este código imprimirá la tabla de multiplicar del `5` del `1` al `10`.

---

## 37. Ciclo While
El ciclo `while` ejecuta un bloque de código mientras una condición sea verdadera.

### Sintaxis:
```javascript
while (condicion) {
  // Código a ejecutar mientras la condición sea verdadera
}
```

### Ejemplo:
```javascript
let i = 0;
while (i < 5) {
  console.log(`Iteración ${i}`);
  i++;
}
```

---

## 38. Ciclo Do While
El ciclo `do while` es similar a `while`, pero siempre ejecuta el bloque de código al menos una vez, incluso si la condición es falsa.

### Sintaxis:
```javascript
do {
  // Código a ejecutar
} while (condicion);
```

### Ejemplo:
```javascript
let i = 0;
do {
  console.log(`Iteración ${i}`);
  i++;
} while (i < 5);
```

---

## 39. Más Ciclos en JavaScript
Además de `for`, `while` y `do while`, JavaScript ofrece otras formas de iteración:

### Ciclo for...of
Este ciclo se utiliza para recorrer los elementos de un arreglo.

```javascript
let frutas = ["manzana", "banana", "naranja"];
for (let fruta of frutas) {
  console.log(fruta);
}
```

### Ciclo for...in
Este ciclo se utiliza para recorrer las propiedades de un objeto.

```javascript
let persona = { nombre: "Juan", edad: 30 };
for (let clave in persona) {
  console.log(`${clave}: ${persona[clave]}`);
}
```

---
