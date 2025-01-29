# 📌 Funciones Constructoras y Prototipos en JavaScript (Con Analogías)

## 🏗️ 49. Funciones Constructoras: La Fábrica de Objetos

Las funciones constructoras son como **una fábrica de autos**:  
Cada vez que llamamos a la función con `new`, producimos un nuevo auto con las mismas características.

### 📌 Ejemplo:
```javascript
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  };
}
```

📌 **Explicación:**  
- `Persona` es la **fábrica**.  
- `nombre` y `edad` son las **partes del auto**.  
- `saludar` es una **función integrada en cada auto**.

---

## 🏠 50. Uso de Funciones Constructoras: Creando Nuevas Instancias

Cada vez que usamos `new`, creamos **un auto nuevo en la fábrica**.

### 📌 Ejemplo:
```javascript
let persona1 = new Persona("Juan", 30);
persona1.saludar(); // "Hola, mi nombre es Juan y tengo 30 años."
```

📌 **Explicación:**  
Cada `persona1` creada es como **un auto único**, con su propio nombre y edad.

---

## 🔍 51. ¿Qué es `this` en JavaScript?: El Dueño del Auto

`this` es como **el dueño de un auto**.  
Cuando llamas `this.nombre`, el auto te dice **su propio nombre**.

### 📌 Ejemplo:
```javascript
let usuario = {
  nombre: "Ana",
  mostrarNombre: function() {
    console.log(this.nombre);
  }
};

usuario.mostrarNombre(); // "Ana"
```

📌 **Explicación:**  
Aquí `this` es **Ana**, porque `mostrarNombre` está dentro del objeto `usuario`.

---

## 🔗 53. Método `bind()`: Amarrando el Volante

El método `bind()` permite **amarrar `this` a un objeto específico**, como si fijas el volante de un auto para que solo gire en una dirección.

### 📌 Ejemplo:
```javascript
let persona = { nombre: "Carlos" };

function mostrarNombre() {
  console.log(this.nombre);
}

let mostrar = mostrarNombre.bind(persona);
mostrar(); // "Carlos"
```

📌 **Explicación:**  
`bind(persona)` **amarró** `this` a `persona`, asegurando que no apunte a otro objeto.

---

## 📞 54. Métodos `call()` & `apply()`: Pedir Prestado un Auto

Estos métodos permiten **usar una función de otro objeto**, como si **le pidieras prestado un auto a un amigo**.

### 📌 Ejemplo de `call()`:
```javascript
function saludar() {
  console.log(`Hola, soy ${this.nombre}`);
}

let usuario = { nombre: "María" };
saludar.call(usuario); // "Hola, soy María"
```

📌 **Explicación:**  
`call()` **toma prestado el motor (`saludar`) y lo usa en el auto de `usuario`**.

### 📌 Ejemplo de `apply()`:
```javascript
function presentar(ciudad, pais) {
  console.log(`${this.nombre} vive en ${ciudad}, ${pais}`);
}

let persona = { nombre: "Luis" };
presentar.apply(persona, ["Madrid", "España"]);
```

📌 **Diferencia:**  
- `call()` pasa los valores separados por comas.  
- `apply()` los pasa como un **arreglo**.

---

## ❓ 55. Optional Chaining (`?.`): El GPS del Objeto

El operador `?.` funciona como **un GPS**:  
Si una propiedad **no existe**, en lugar de explotar, simplemente muestra `undefined`.

### 📌 Ejemplo:
```javascript
let usuario = {
  nombre: "Elena",
  direccion: {
    ciudad: "Barcelona"
  }
};

console.log(usuario.direccion?.ciudad); // "Barcelona"
console.log(usuario.contacto?.telefono); // `undefined` (sin error)
```

📌 **Explicación:**  
Si `direccion` existe, accede a `ciudad`; si no, **evita un error**.

---

## 🔑 56. `Symbol()`: Placas Únicas de un Auto

Los `Symbol` son **identificadores únicos**, como las **placas de un auto**:  
Nadie puede tener la misma.

### 📌 Ejemplo:
```javascript
let id = Symbol("id");
let usuario = {
  nombre: "Pedro",
  [id]: 1234
};

console.log(usuario[id]); // 1234
```

📌 **Explicación:**  
Incluso si dos personas crean `Symbol("id")`, cada uno **es diferente**.

---

## 🔗 57. Prototipos: La Fábrica con un Manual de Instrucciones

Los **prototipos** son como **el manual de un auto**:  
Todos los autos tienen acceso a él, pero **no ocupa espacio en cada auto**.

### 📌 Ejemplo:
```javascript
function Persona(nombre) {
  this.nombre = nombre;
}

Persona.prototype.saludar = function() {
  console.log(`Hola, soy ${this.nombre}`);
};

let juan = new Persona("Juan");
juan.saludar(); // "Hola, soy Juan"
```

📌 **Explicación:**  
El método `saludar` **está en el prototipo**, no en cada instancia.

---

## 🐾 58. Prototipos en Funciones Constructoras

Las funciones constructoras pueden **compartir métodos** sin repetir código.

### 📌 Ejemplo:
```javascript
function Animal(nombre) {
  this.nombre = nombre;
}

Animal.prototype.hablar = function() {
  console.log(`${this.nombre} hace un sonido.`);
};

let perro = new Animal("Rex");
perro.hablar(); // "Rex hace un sonido."
```

📌 **Explicación:**  
Todos los `Animal` **pueden hablar**, sin necesidad de copiar el código.

---

## 🏗️ 59. Métodos de `Object()`: Inventario del Auto

JavaScript tiene herramientas para **explorar objetos**.

### 📌 `Object.keys()`: Ver las partes del auto (claves del objeto)
```javascript
let usuario = { nombre: "Ana", edad: 25 };
console.log(Object.keys(usuario)); // ["nombre", "edad"]
```

### 📌 `Object.values()`: Ver el estado del auto (valores del objeto)
```javascript
console.log(Object.values(usuario)); // ["Ana", 25]
```

### 📌 `Object.entries()`: Ver el auto en detalle ([clave, valor])
```javascript
console.log(Object.entries(usuario)); // [["nombre", "Ana"], ["edad", 25]]
```

📌 **Explicación:**  
Estas herramientas **permiten inspeccionar y manipular objetos fácilmente**.

---

🎉 **¡Ahora entiendes funciones constructoras, `this`, prototipos y más con analogías!** 🚀
