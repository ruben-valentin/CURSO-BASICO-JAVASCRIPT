# 📌 Sentencias de Control en JavaScript

## 🔀 30. Condicional If/Else

El condicional `if/else` permite ejecutar diferentes bloques de código dependiendo de si una condición es **verdadera (`true`)** o **falsa (`false`)**. 

### 📌 Sintaxis:
```javascript
if (condicion) {
  // Código si la condición es verdadera
} else {
  // Código si la condición es falsa
}
```

### 🎯 Ejemplo:
```javascript
let edad = 18;
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
```

📌 **Explicación:**  
Si la `edad` es 18 o más, el primer bloque se ejecuta; de lo contrario, se ejecuta el bloque dentro de `else`.

---

## 🔄 31. Condicional Else If

Cuando hay **más de dos posibles resultados**, se usa `else if`.

### 📌 Ejemplo:
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

📌 **Explicación:**  
El programa verifica si la `nota` es mayor o igual a 90. Si no lo es, revisa si es al menos 70. Si ninguna condición se cumple, ejecuta `else`.

---

## 🔗 32. Anidar Condicionales

Se pueden incluir condicionales dentro de otros condicionales.

### 📌 Ejemplo:
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

📌 **Explicación:**  
El primer `if` revisa si `numero` es mayor que 0. Luego, anidamos otro `if` para verificar si es par o impar.

---

## 🔄 33. Sentencia Switch

`switch` es útil cuando tenemos muchas condiciones basadas en un **único valor**.

### 📌 Sintaxis:
```javascript
switch (expresion) {
  case valor1:
    // Código a ejecutar si la expresión es igual a valor1
    break;
  case valor2:
    // Código a ejecutar si la expresión es igual a valor2
    break;
  default:
    // Código si ninguno de los casos coincide
}
```

### 🎯 Ejemplo:
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

📌 **Explicación:**  
Si `dia` es `"lunes"`, se ejecuta el primer `case`, si es `"martes"`, el segundo, y si no coincide con ninguno, se ejecuta `default`.

---

## 🔄 34. Ciclo For

Un `for` repite un bloque de código un **número determinado de veces**.

### 📌 Sintaxis:
```javascript
for (inicializacion; condicion; actualizacion) {
  // Código en cada iteración
}
```

### 🎯 Ejemplo:
```javascript
for (let i = 0; i < 5; i++) {
  console.log(`Iteración ${i}`);
}
```

📌 **Explicación:**  
- `let i = 0;` → Inicialización  
- `i < 5;` → Condición para seguir ejecutando  
- `i++` → Se incrementa `i` en cada iteración  

---

## 🎯 35. Ejercicio Ciclo For

Imprimir los números del **1 al 10**.

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

📌 **Resultado:**  
El programa imprime los números del **1 al 10**.

---

## ✖️ 36. Tablas de Multiplicar con For

Podemos generar una tabla de multiplicar.

### 🎯 Ejemplo:
```javascript
let numero = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}
```

📌 **Explicación:**  
Multiplica `numero` por cada valor de `i` (del 1 al 10).

---

## 🔁 37. Ciclo While

`while` ejecuta un bloque de código **mientras una condición sea verdadera**.

### 📌 Sintaxis:
```javascript
while (condicion) {
  // Código que se ejecuta mientras la condición sea verdadera
}
```

### 🎯 Ejemplo:
```javascript
let i = 0;
while (i < 5) {
  console.log(`Iteración ${i}`);
  i++;
}
```

📌 **Explicación:**  
El código sigue ejecutándose **mientras** `i < 5`.  

---

## 🔂 38. Ciclo Do While

Es como `while`, pero ejecuta el código **al menos una vez** antes de evaluar la condición.

### 📌 Sintaxis:
```javascript
do {
  // Código que se ejecuta al menos una vez
} while (condicion);
```

### 🎯 Ejemplo:
```javascript
let i = 0;
do {
  console.log(`Iteración ${i}`);
  i++;
} while (i < 5);
```

📌 **Explicación:**  
Ejecuta el bloque **al menos una vez**, incluso si `i` ya es mayor o igual a 5.

---

## 🔁 39. Más Ciclos en JavaScript

### 🔄 For...of (Para recorrer arreglos)
```javascript
let frutas = ["manzana", "banana", "naranja"];
for (let fruta of frutas) {
  console.log(fruta);
}
```

📌 **Explicación:**  
`for...of` recorre cada elemento del arreglo `frutas`.

### 🏷️ For...in (Para recorrer objetos)
```javascript
let persona = { nombre: "Juan", edad: 30 };
for (let clave in persona) {
  console.log(`${clave}: ${persona[clave]}`);
}
```

📌 **Explicación:**  
`for...in` recorre las **propiedades de un objeto**, mostrando `clave` y su valor.

---

🎉 **¡Ahora entiendes las sentencias de control en JavaScript!** 🚀
