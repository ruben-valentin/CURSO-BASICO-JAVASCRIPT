# Arrays y Objetos


## 16. Introducción a Arreglos
En JavaScript, un arreglo (o array) es una lista de elementos. Los arreglos te permiten guardar múltiples valores en una sola variable.

### Creación de un arreglo
```javascript
let frutas = ["manzana", "banana", "naranja"];
console.log(frutas); // Muestra ["manzana", "banana", "naranja"]
```

Los elementos de un arreglo se identifican por su índice, que comienza desde `0`.

### Acceder a un elemento
```javascript
console.log(frutas[0]); // Muestra "manzana"
```

---

## 17. Agregar/Eliminar elementos de un Array

### Agregar elementos
Puedes agregar elementos al final o al principio de un arreglo.

- **Al final:**
  ```javascript
  frutas.push("kiwi");
  console.log(frutas); // Muestra ["manzana", "banana", "naranja", "kiwi"]
  ```
- **Al principio:**
  ```javascript
  frutas.unshift("fresa");
  console.log(frutas); // Muestra ["fresa", "manzana", "banana", "naranja", "kiwi"]
  ```

### Eliminar elementos
Puedes eliminar elementos del final o del principio de un arreglo.

- **Del final:**
  ```javascript
  frutas.pop();
  console.log(frutas); // Muestra ["fresa", "manzana", "banana", "naranja"]
  ```
- **Del principio:**
  ```javascript
  frutas.shift();
  console.log(frutas); // Muestra ["manzana", "banana", "naranja"]
  ```

---

## 18. Valores Primitivos y Objetos

En JavaScript, los valores se dividen en dos tipos principales:

### Valores primitivos
Son valores simples y no pueden ser modificados. Los principales tipos de valores primitivos son:
- `number`
- `string`
- `boolean`
- `null`
- `undefined`
- `symbol`

### Objetos
Los objetos son estructuras más complejas que pueden contener múltiples valores y funciones.

```javascript
let persona = {
  nombre: "Juan",
  edad: 30
};
console.log(persona); // Muestra { nombre: "Juan", edad: 30 }
```

---

## 19. Arreglos Anidados
Un arreglo puede contener otros arreglos como elementos.

### Ejemplo:
```javascript
let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matriz[0]); // Muestra [1, 2, 3]
console.log(matriz[1][2]); // Muestra 6
```

En este ejemplo, `matriz[1][2]` accede al elemento `6` en el segundo arreglo.

---

## 20. Tabla de multiplicar con Arreglos
Podemos usar arreglos para crear una tabla de multiplicar.

### Ejemplo:
```javascript
let tabla = [];
for (let i = 1; i <= 10; i++) {
  tabla.push(i * 2);
}
console.log(tabla); // Muestra [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
```

En este ejemplo, creamos un arreglo que contiene los primeros diez múltiplos de `2`.

---

## 21. Introducción a Objetos
Un objeto es una colección de pares clave-valor. Cada clave es una cadena y su valor puede ser cualquier tipo de dato.

### Creación de un objeto
```javascript
let coche = {
  marca: "Toyota",
  modelo: "Corolla",
  anio: 2022
};
console.log(coche); // Muestra { marca: "Toyota", modelo: "Corolla", anio: 2022 }
```

Puedes acceder a las propiedades de un objeto usando la notación de punto o la notación de corchetes.

```javascript
console.log(coche.marca); // Muestra "Toyota"
console.log(coche["modelo"]); // Muestra "Corolla"
```

---

## 22. Modificar propiedades en objetos
Puedes cambiar el valor de una propiedad existente o agregar una nueva propiedad.

### Modificar una propiedad
```javascript
coche.anio = 2023;
console.log(coche.anio); // Muestra 2023
```

### Agregar una nueva propiedad
```javascript
coche.color = "rojo";
console.log(coche.color); // Muestra "rojo"
```

---

## 23. Objetos Anidados
Los objetos pueden contener otros objetos como valores de sus propiedades.

### Ejemplo:
```javascript
let usuario = {
  nombre: "Ana",
  direccion: {
    ciudad: "Madrid",
    codigoPostal: 28001
  }
};
console.log(usuario.direccion.ciudad); // Muestra "Madrid"
```

En este ejemplo, `usuario.direccion` es un objeto anidado dentro del objeto `usuario`. Puedes acceder a sus propiedades utilizando la notación de punto.

---


