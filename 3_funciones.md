# 📌 Funciones en JavaScript

## 🎯 24. ¿Qué es una Función?

Una función es como **una receta de cocina**: contiene una serie de instrucciones que puedes reutilizar en cualquier momento. 

### 📝 Definir una función
```javascript
function saludar() {
  console.log("¡Hola, mundo!");
}
```

### 📢 Llamar a una función
```javascript
saludar(); // "¡Hola, mundo!"
```

### 📦 Función con parámetros
```javascript
function saludarConNombre(nombre) {
  console.log(`Hola, ${nombre}!`);
}

saludarConNombre("Ana"); // "Hola, Ana!"
```

📌 **Explicación:**  
Los parámetros (`nombre`) son como **ingredientes** de la receta, puedes cambiarlos cada vez.

---

## 🔄 25. `return` en Funciones

El operador `return` permite que una función devuelva un valor. Si no se usa `return`, la función devuelve `undefined` por defecto.

### 📌 Ejemplo:
```javascript
function sumar(a, b) {
  return a + b;
}

let resultado = sumar(5, 3);
console.log(resultado); // 8
```

📌 **Explicación:**  
`return` devuelve el resultado de `a + b`, como una máquina que recibe dos números y entrega su suma.

---

## 🌍 26. Scope en JavaScript

El **scope** (alcance) determina dónde puedes acceder a una variable.

### 🔒 Scope local
```javascript
function mostrarMensaje() {
  let mensaje = "Hola";
  console.log(mensaje); // "Hola"
}

// console.log(mensaje); // ❌ Error: mensaje no está definido
```

📌 **Explicación:**  
Las variables declaradas dentro de una función solo existen dentro de ella.

### 🌍 Scope global
```javascript
let saludo = "Hola, mundo";

function mostrarSaludo() {
  console.log(saludo);
}

mostrarSaludo(); // "Hola, mundo"
```

📌 **Explicación:**  
Las variables fuera de funciones pueden ser usadas en **cualquier parte del código**.

---

## 📦 27. Objeto `arguments`

El objeto `arguments` permite acceder a todos los valores pasados a la función, aunque no estén declarados en los parámetros.

### 📌 Ejemplo:
```javascript
function sumarTodos() {
  let suma = 0;
  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i];
  }
  return suma;
}

console.log(sumarTodos(1, 2, 3, 4)); // 10
```

📌 **Explicación:**  
Incluso sin definir `a, b, c, d` como parámetros, `arguments` accede a todos los valores.

⚠️ **Nota:** `arguments` no funciona en **funciones flecha**.

---

## ⚡ 28. Expresión de Funciones y Funciones Flecha

### 📌 Expresión de función
```javascript
const saludar = function() {
  console.log("¡Hola!");
};

saludar(); // "¡Hola!"
```

📌 **Explicación:**  
Aquí la función se guarda dentro de una variable (`const saludar`).

### 🚀 Funciones Flecha
```javascript
const saludar = () => {
  console.log("¡Hola!");
};

saludar(); // "¡Hola!"
```

📌 **Explicación:**  
Es una forma **más corta** de escribir funciones.

✅ Si la función tiene un solo parámetro, puedes omitir los paréntesis:
```javascript
const saludarConNombre = nombre => console.log(`Hola, ${nombre}!`);

saludarConNombre("Ana"); // "Hola, Ana!"
```

---

## ⚡ 29. Funciones Flecha y `return` Implícito

Si la función solo tiene **una línea**, el `return` se puede omitir:

```javascript
const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 5)); // 20
```

📌 **Explicación:**  
El código `a * b` **se devuelve automáticamente** sin necesidad de `return`.

⚠️ Si tienes más de una línea, debes usar `{}` y `return`:

```javascript
const sumar = (a, b) => {
  let resultado = a + b;
  return resultado;
};

console.log(sumar(3, 7)); // 10
```

📌 **Explicación:**  
Aquí `return` **es necesario**, porque tenemos más de una línea.

---

🎉 **¡Ahora entiendes mejor cómo funcionan las funciones en JavaScript!** 🚀
