# 📌 Métodos de Arreglos en JavaScript (Explicaciones y Ejemplos Completos)

## ✂️ 60. `splice()`: Agregar, Eliminar o Reemplazar Elementos

El método `splice()` permite modificar un arreglo eliminando, agregando o reemplazando elementos.

### 📌 Sintaxis:
```javascript
array.splice(inicio, cantidadEliminar, elemento1, elemento2, ...);
```
- **inicio**: Índice donde comienza la modificación.
- **cantidadEliminar**: Número de elementos a eliminar.
- **elemento1, elemento2, ...** (opcional): Elementos a insertar.

### 🎯 Ejemplo: Eliminar elementos
```javascript
let numeros = [1, 2, 3, 4, 5];
numeros.splice(2, 1); // Elimina el elemento en el índice 2
console.log(numeros); // [1, 2, 4, 5]
```

### 🎯 Ejemplo: Reemplazar elementos
```javascript
numeros.splice(1, 2, 10, 20); // Reemplaza 2 elementos desde el índice 1
console.log(numeros); // [1, 10, 20, 5]
```

### 🎯 Ejemplo: Agregar elementos sin eliminar
```javascript
numeros.splice(2, 0, 99, 100); // Inserta en el índice 2 sin eliminar
console.log(numeros); // [1, 10, 99, 100, 20, 5]
```

---

## 🔪 61. `slice()`, `concat()`, `includes()`

### 🍰 `slice()`: Extraer una parte del arreglo sin modificarlo
```javascript
let frutas = ["🍎 Manzana", "🍌 Banana", "🍇 Uva", "🍊 Naranja"];
let seleccion = frutas.slice(1, 3); // Extrae desde el índice 1 hasta antes del 3

console.log(seleccion); // ["🍌 Banana", "🍇 Uva"]
console.log(frutas); // ["🍎 Manzana", "🍌 Banana", "🍇 Uva", "🍊 Naranja"] (No se modifica)
```

### 🧩 `concat()`: Unir arreglos sin modificarlos
```javascript
let numeros1 = [1, 2, 3];
let numeros2 = [4, 5, 6];
let resultado = numeros1.concat(numeros2);

console.log(resultado); // [1, 2, 3, 4, 5, 6]
```

### 🔍 `includes()`: Verificar si un elemento existe
```javascript
let colores = ["🔴 Rojo", "🔵 Azul", "🟢 Verde"];
console.log(colores.includes("🔵 Azul")); // true
console.log(colores.includes("⚫ Negro")); // false
```

---

## 🔄 62. `forEach()` y `map()`

### `forEach()`: Iterar sobre elementos del arreglo
```javascript
let tareas = ["📖 Leer", "💪 Hacer ejercicio", "🍽️ Cocinar"];
tareas.forEach((tarea, index) => console.log(`${index + 1}. ${tarea}`));
```

### `map()`: Crear un nuevo arreglo transformando los elementos
```javascript
let numeros = [1, 2, 3, 4];
let dobles = numeros.map(num => num * 2);

console.log(dobles); // [2, 4, 6, 8]
```

---

## 🎯 63. `filter()`: Filtrar Elementos

### 📌 Ejemplo: Obtener productos en oferta
```javascript
let productos = [
  { nombre: "📱 Teléfono", precio: 800 },
  { nombre: "💻 Laptop", precio: 1200 },
  { nombre: "🎧 Auriculares", precio: 50 }
];

let ofertas = productos.filter(producto => producto.precio < 1000);

console.log(ofertas); // [{ nombre: "📱 Teléfono", precio: 800 }, { nombre: "🎧 Auriculares", precio: 50 }]
```

---

## 🔎 64. `find()`: Encontrar un Elemento

```javascript
let personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Juan", edad: 30 }
];

let persona = personas.find(p => p.edad > 25);

console.log(persona); // { nombre: "Juan", edad: 30 }
```

---

## ✅ 65. `some()` y `every()`: Verificar Condiciones

### `some()`: ¿Al menos un elemento cumple la condición?
```javascript
let edades = [15, 18, 21, 25];
console.log(edades.some(edad => edad >= 18)); // true
```

### `every()`: ¿Todos cumplen la condición?
```javascript
console.log(edades.every(edad => edad >= 18)); // false
```

---

## 🏷️ 66. `findIndex()` y `indexOf()`

### 📌 `findIndex()`: Encontrar el índice del primer elemento que cumple una condición
```javascript
let edades = [12, 18, 25, 30];
let indice = edades.findIndex(edad => edad >= 18);

console.log(indice); // 1
```

### 📌 `indexOf()`: Encontrar la posición de un elemento específico
```javascript
let colores = ["🔴 Rojo", "🔵 Azul", "🟢 Verde"];
console.log(colores.indexOf("🔵 Azul")); // 1
```

---

## ➕ 67. `reduce()`: Acumular Valores

### 📌 Ejemplo: Calcular el total de compras
```javascript
let precios = [10, 20, 30, 40];
let total = precios.reduce((suma, precio) => suma + precio, 0);

console.log(`Total a pagar: $${total}`); // "Total a pagar: $100"
```

---

## 🔄 68. Encadenar Métodos

```javascript
let numeros = [1, 2, 3, 4, 5];
let resultado = numeros
  .filter(num => num > 2) // [3, 4, 5]
  .map(num => num * 2)    // [6, 8, 10]
  .reduce((total, num) => total + num, 0); // 24

console.log(resultado); // 24
```

---

## 🏗️ 69. Métodos Variados: `flat()`, `isArray()`, `from()`, `join()`

### 📌 `flat()`: Aplanar arreglos anidados
```javascript
let anidado = [1, [2, 3], [4, [5]]];
console.log(anidado.flat(2)); // [1, 2, 3, 4, 5]
```

### 📌 `isArray()`: Verificar si es un arreglo
```javascript
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("hola"));   // false
```

### 📌 `from()`: Convertir a un arreglo
```javascript
let texto = "hola";
console.log(Array.from(texto)); // ["h", "o", "l", "a"]
```

### 📌 `join()`: Convertir un arreglo en un string
```javascript
let palabras = ["Hola", "mundo"];
console.log(palabras.join(" ")); // "Hola mundo"
```

---

🎉 **¡Ahora entiendes los métodos de arreglos en JavaScript con explicaciones detalladas y más ejemplos!** 🚀
