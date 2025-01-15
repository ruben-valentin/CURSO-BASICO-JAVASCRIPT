# CURSO-BASICO-JAVASCRIPTT
<p align="center">
  <img src="cursojavascript.png" alt="Curso JavaScript - De BÁSICO a DOM">
</p>

# JavaScript: De lo Básico al DOM

# Curso de JavaScript para Principiantes

## 1. Introducción a JavaScript
JavaScript es uno de los lenguajes de programación más populares del mundo. Se utiliza principalmente para crear páginas web interactivas, pero también se puede usar en aplicaciones de escritorio, servidores y mucho más.

### ¿Por qué aprender JavaScript?
- Es fácil de empezar a aprender.
- Es muy utilizado en la industria.
- Te permite ver rápidamente los resultados de tu trabajo.

En este curso, aprenderás los conceptos básicos de JavaScript y crearás tus primeros programas.

---

## 2. Herramientas a necesitar
Antes de empezar a programar, necesitas algunas herramientas:

### Navegador web
Necesitarás un navegador como Google Chrome o Mozilla Firefox para ejecutar tu código JavaScript.

### Editor de texto o IDE
Un editor de texto es donde escribirás tu código. Recomendamos usar Visual Studio Code, que es gratuito y muy popular.

#### Instalación de Visual Studio Code:
1. Ve a la página oficial de Visual Studio Code.
2. Descarga la versión adecuada para tu sistema operativo.
3. Sigue las instrucciones de instalación.

### Consola del navegador
La consola del navegador te permite ver el resultado de tu código JavaScript. Para abrirla:
- En Chrome: Presiona `Ctrl + Shift + I` (Windows) o `Cmd + Option + I` (Mac) y selecciona la pestaña "Consola".

---

## 3. Entendiendo JavaScript
JavaScript es un lenguaje que el navegador entiende y ejecuta. Se utiliza para hacer que las páginas web sean interactivas.

### Ejemplo de código sencillo
Este es un ejemplo de código en JavaScript:
```javascript
console.log("Hola, mundo!");
```
Cuando ejecutas este código, el navegador mostrará "Hola, mundo!" en la consola.

#### ¿Qué hace este código?
- `console.log`: Esta es una instrucción que le dice al navegador que muestre un mensaje en la consola.
- Las comillas dobles (`""`) indican que se trata de un texto o "cadena de caracteres".
- El punto y coma (`;`) se usa para indicar el final de una instrucción.

---

## 4. Primer programa con JavaScript
Vamos a crear nuestro primer programa paso a paso:

### Paso 1: Abre el navegador y la consola
1. Abre Google Chrome.
2. Presiona `Ctrl + Shift + I` (Windows) o `Cmd + Option + I` (Mac) para abrir las herramientas de desarrollador.
3. Ve a la pestaña "Consola".

### Paso 2: Escribe tu código
En la consola, escribe lo siguiente:
```javascript
console.log("Este es mi primer programa!");
```
Presiona `Enter` y deberías ver el mensaje "Este es mi primer programa!".

---

## 5. Variables en JavaScript
Las variables son como cajas donde podemos guardar información. En JavaScript, podemos usar variables para guardar diferentes tipos de datos, como números o textos.

### Declaración de una variable
Para declarar una variable, usamos la palabra clave `let`. Por ejemplo:
```javascript
let nombre = "Juan";
console.log(nombre);
```
En este ejemplo:
- `let` es la palabra clave que usamos para declarar la variable.
- `nombre` es el nombre de la variable.
- `"Juan"` es el valor que estamos guardando en la variable.

Cuando ejecutas este código, el navegador mostrará "Juan" en la consola.

---

## 6. Variables y constantes en JavaScript
Además de `let`, podemos usar `const` para declarar variables que no cambian.

### Diferencias entre `let` y `const`
- **`let`**: Se usa para declarar variables cuyo valor puede cambiar.
- **`const`**: Se usa para declarar variables cuyo valor no cambia.

#### Ejemplo:
```javascript
let edad = 14;
edad = 15; // Esto es válido, porque usamos let

const pi = 3.1416;
pi = 3.14; // Esto dará un error, porque usamos const
```
En este ejemplo, `edad` puede cambiar porque fue declarada con `let`, pero `pi` no puede cambiar porque fue declarada con `const`.

### Buenas prácticas
1. Usa `const` siempre que sepas que el valor no va a cambiar.
2. Usa `let` solo cuando necesites que el valor cambie.

---

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


