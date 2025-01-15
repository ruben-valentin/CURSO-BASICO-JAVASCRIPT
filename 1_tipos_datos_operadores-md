
# Tipos de datos y operadores JavaScript

## 7. Tipos de datos: Number
En JavaScript, los números se representan con el tipo de dato `number`. Este tipo de dato incluye tanto números enteros como decimales.

### Ejemplo:
```javascript
let numeroEntero = 10;
let numeroDecimal = 3.14;
console.log(numeroEntero); // Muestra 10
console.log(numeroDecimal); // Muestra 3.14
```

Puedes realizar operaciones matemáticas básicas con los números, como suma, resta, multiplicación y división:
```javascript
let suma = 5 + 3;
let resta = 10 - 4;
let multiplicacion = 2 * 6;
let division = 20 / 4;
console.log(suma, resta, multiplicacion, division);
```

---

## 8. Strings y Template Strings en JavaScript
Un `string` es una cadena de texto. Se puede definir usando comillas simples (`'`), comillas dobles (`"`) o acentos graves (\`).

### Ejemplo de strings:
```javascript
let saludo = "Hola";
let nombre = 'Mundo';
console.log(saludo + ' ' + nombre); // Muestra "Hola Mundo"
```

### Template Strings
Los template strings te permiten incluir variables dentro de un string de manera más sencilla usando acentos graves (\`) y la sintaxis `${}`.

```javascript
let nombre = "Juan";
let mensaje = `Hola, ${nombre}! Bienvenido al curso.`;
console.log(mensaje); // Muestra "Hola, Juan! Bienvenido al curso."
```

---

## 9. `null`, `undefined`, `boolean` y `symbol`

### `null` y `undefined`
- **`null`** representa la ausencia intencionada de un valor.
- **`undefined`** indica que una variable ha sido declarada pero no tiene un valor asignado.

```javascript
let valorNulo = null;
let valorIndefinido;
console.log(valorNulo); // Muestra null
console.log(valorIndefinido); // Muestra undefined
```

### Booleanos
Un `boolean` es un tipo de dato que solo puede tener dos valores: `true` (verdadero) o `false` (falso).

```javascript
let esMayor = 5 > 3;
console.log(esMayor); // Muestra true
```

### Symbols
Un `symbol` es un tipo de dato único e inmutable.

```javascript
let simbolo = Symbol("miSimbolo");
console.log(simbolo); // Muestra Symbol(miSimbolo)
```

---

## 10. Type Coercion (Conversión Automática)
JavaScript convierte automáticamente entre diferentes tipos de datos cuando es necesario.

### Ejemplo:
```javascript
let resultado = "5" + 3;
console.log(resultado); // Muestra "53" (string)
```
En este caso, JavaScript convierte el número `3` en un string y luego los concatena.

Otro ejemplo:
```javascript
let resultado = "5" * 2;
console.log(resultado); // Muestra 10 (number)
```
Aquí, JavaScript convierte el string `"5"` en un número y realiza la multiplicación.

---

## 11. Operadores Unarios y Aritméticos

### Operadores Unarios
Los operadores unarios son aquellos que actúan sobre un solo operando.
- **`+`**: Convierte el operando a un número.
- **`-`**: Cambia el signo del operando.

```javascript
let numero = 5;
console.log(-numero); // Muestra -5
```

### Operadores Aritméticos
Los operadores aritméticos permiten realizar operaciones matemáticas.
- **`+`**: Suma
- **`-`**: Resta
- **`*`**: Multiplicación
- **`/`**: División
- **`%`**: Módulo (resto de la división)

```javascript
console.log(10 + 5); // Muestra 15
console.log(10 % 3); // Muestra 1
```

---

## 12. Operadores de Asignación
Los operadores de asignación se utilizan para asignar valores a las variables.

### Ejemplos:
- `=`: Asigna un valor.
- `+=`: Suma y asigna.
- `-=`: Resta y asigna.
- `*=`: Multiplica y asigna.
- `/=`: Divide y asigna.

```javascript
let numero = 10;
numero += 5; // Equivale a numero = numero + 5
console.log(numero); // Muestra 15
```

---

## 13. Operadores de Comparación
Los operadores de comparación se utilizan para comparar valores y devuelven un resultado booleano (`true` o `false`).

### Ejemplos:
- `==`: Igualdad (compara valores, no tipos).
- `===`: Igualdad estricta (compara valores y tipos).
- `!=`: Desigualdad (compara valores).
- `!==`: Desigualdad estricta (compara valores y tipos).
- `>`: Mayor que.
- `<`: Menor que.
- `>=`: Mayor o igual que.
- `<=`: Menor o igual que.

```javascript
console.log(5 == "5"); // Muestra true
console.log(5 === "5"); // Muestra false
```

---

## 14. Operadores Lógicos
Los operadores lógicos se utilizan para combinar expresiones lógicas.

### Ejemplos:
- `&&`: AND (Y)
- `||`: OR (O)
- `!`: NOT (NO)

```javascript
let a = true;
let b = false;
console.log(a && b); // Muestra false
console.log(a || b); // Muestra true
console.log(!a);     // Muestra false
```

---

## 15. Operador Ternario
El operador ternario es una forma abreviada de escribir una condicional `if-else`.

### Sintaxis:
```javascript
condicion ? valorSiEsVerdadero : valorSiEsFalso
```

### Ejemplo:
```javascript
let edad = 18;
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje); // Muestra "Eres mayor de edad"
```
