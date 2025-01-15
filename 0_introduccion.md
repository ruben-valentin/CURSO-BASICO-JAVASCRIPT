
# Introducción

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