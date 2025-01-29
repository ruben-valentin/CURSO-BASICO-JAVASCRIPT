# 📌 Tipos de Datos y Operadores en JavaScript

## 🔢 7. Tipos de datos: Number

Los números en JavaScript son como **medidas en una regla**, pueden ser enteros o decimales.

### 📌 Ejemplo:
```javascript
let numeroEntero = 10;
let numeroDecimal = 3.14;
console.log(numeroEntero); // 10
console.log(numeroDecimal); // 3.14
```

Puedes realizar operaciones matemáticas básicas como:

```javascript
let suma = 5 + 3;  // 8
let resta = 10 - 4;  // 6
let multiplicacion = 2 * 6;  // 12
let division = 20 / 4;  // 5
console.log(suma, resta, multiplicacion, division);
```

📌 **Explicación:**  
Las operaciones matemáticas funcionan igual que en una calculadora.

---

## 📝 8. Strings y Template Strings en JavaScript

Un `string` es como una **frase escrita en papel**, puede estar entre comillas simples (`'`), dobles (`"`) o acentos graves (\`).

### 📌 Ejemplo de strings:
```javascript
let saludo = "Hola";
let nombre = 'Mundo';
console.log(saludo + ' ' + nombre); // "Hola Mundo"
```

### ✨ Template Strings

Permiten incluir variables dentro de un texto de forma más clara.

```javascript
let nombre = "Juan";
let mensaje = `Hola, ${nombre}! Bienvenido al curso.`;
console.log(mensaje); // "Hola, Juan! Bienvenido al curso."
```

📌 **Explicación:**  
Usando \`${}\`, podemos insertar variables dentro del texto sin usar concatenación.

---

## 🔍 9. `null`, `undefined`, `boolean` y `symbol`

### `null` y `undefined`

- **`null`**: Es como un **cajón vacío intencionalmente**.
- **`undefined`**: Es como un **cajón que no existe**.

```javascript
let valorNulo = null;
let valorIndefinido;
console.log(valorNulo); // null
console.log(valorIndefinido); // undefined
```

### 🎭 Booleanos

Un `boolean` es un **interruptor de luz**, solo puede ser `true` (encendido) o `false` (apagado).

```javascript
let esMayor = 5 > 3;
console.log(esMayor); // true
```

### 🔑 Symbols

Los `symbol` son **identificadores únicos**, aunque tengan el mismo valor, no son iguales.

```javascript
let simbolo1 = Symbol("miSimbolo");
let simbolo2 = Symbol("miSimbolo");
console.log(simbolo1 === simbolo2); // false
```

📌 **Explicación:**  
Cada `Symbol` es único, aunque parezca el mismo.

---

## 🔄 10. Type Coercion (Conversión Automática)

JavaScript convierte los datos automáticamente.

### 📌 Ejemplo:
```javascript
let resultado = "5" + 3;
console.log(resultado); // "53" (string)
```

📌 **Explicación:**  
JavaScript convierte el número `3` en string y los **concatena**.

Otro ejemplo:
```javascript
let resultado = "5" * 2;
console.log(resultado); // 10 (number)
```

📌 **Explicación:**  
Aquí, JavaScript convierte `"5"` a número y realiza la multiplicación.

---

## ➕ 11. Operadores Unarios y Aritméticos

### Operadores Unarios

- **`+`**: Convierte a número.
- **`-`**: Cambia el signo.

```javascript
let numero = 5;
console.log(-numero); // -5
```

### Operadores Aritméticos

```javascript
console.log(10 + 5); // 15
console.log(10 % 3); // 1 (módulo: el resto de la división)
```

📌 **Explicación:**  
El operador `%` nos da el **resto** de la división.

---

## 🔗 12. Operadores de Asignación

Se usan para asignar valores.

```javascript
let numero = 10;
numero += 5; // numero = numero + 5
console.log(numero); // 15
```

📌 **Explicación:**  
`+=` suma el valor actual con el nuevo.

---

## ⚖️ 13. Operadores de Comparación

```javascript
console.log(5 == "5");  // true
console.log(5 === "5"); // false
```

📌 **Explicación:**  
`==` compara valores, pero `===` compara **valor y tipo**.

---

## 🔥 14. Operadores Lógicos

- `&&` (AND): Solo es `true` si **ambos** son `true`.
- `||` (OR): Es `true` si **al menos uno** es `true`.
- `!` (NOT): Invierte el valor.

```javascript
let a = true, b = false;
console.log(a && b); // false
console.log(a || b); // true
console.log(!a);     // false
```

📌 **Explicación:**  
`a && b` es `false` porque `b` es `false`.

---

## 🎭 15. Operador Ternario

```javascript
let edad = 18;
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje); // "Eres mayor de edad"
```

📌 **Explicación:**  
Si `edad >= 18` es `true`, se elige la primera opción, sino la segunda.

---

🎉 **¡Ahora entiendes mejor los tipos de datos y operadores en JavaScript!** 🚀
