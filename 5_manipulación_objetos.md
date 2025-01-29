# Manipulación de Objetos

## 40. Referencia vs Valor en JavaScript
En JavaScript, los tipos de datos se dividen en dos categorías:

### Tipos primitivos
Los tipos primitivos (como `number`, `string`, `boolean`, `null`, `undefined`, `symbol`) se pasan por **valor**. Esto significa que cuando se asigna o pasa un valor primitivo, se crea una copia del valor.

### Ejemplo:
```javascript
let a = 10;
let b = a;
b = 20;
console.log(a); // Muestra 10
console.log(b); // Muestra 20
```
En este ejemplo, `a` y `b` son independientes.

### Tipos de referencia
Los objetos y arreglos se pasan por **referencia**. Esto significa que cuando se asigna o pasa un objeto, se copia la referencia al mismo objeto en memoria.

### Ejemplo:
```javascript
let persona1 = { nombre: "Ana" };
let persona2 = persona1;
persona2.nombre = "Juan";
console.log(persona1.nombre); // Muestra "Juan"
```
En este caso, `persona1` y `persona2` apuntan al mismo objeto en memoria.

---

## 41. Sintaxis Spread
La sintaxis **spread** (`...`) permite copiar o combinar objetos y arreglos de manera sencilla.

### Ejemplo con arreglos:
```javascript
let numeros = [1, 2, 3];
let nuevosNumeros = [...numeros, 4, 5];
console.log(nuevosNumeros); // Muestra [1, 2, 3, 4, 5]
```

### Ejemplo con objetos:
```javascript
let persona = { nombre: "Ana", edad: 25 };
let nuevaPersona = { ...persona, ciudad: "Madrid" };
console.log(nuevaPersona); // Muestra { nombre: "Ana", edad: 25, ciudad: "Madrid" }
```

---

## 42. Spread en Arreglos y Objetos
La sintaxis spread es útil para:

1. **Copiar arreglos u objetos**:
   ```javascript
   let copiaArreglo = [...numeros];
   let copiaObjeto = { ...persona };
   ```
2. **Combinar arreglos u objetos**:
   ```javascript
   let combinadoArreglo = [...arreglo1, ...arreglo2];
   let combinadoObjeto = { ...objeto1, ...objeto2 };
   ```

---

## 43. `structuredClone` en JavaScript
La función `structuredClone` permite crear una copia profunda de un objeto o arreglo.

### Ejemplo:
```javascript
let original = { nombre: "Ana", direccion: { ciudad: "Madrid" } };
let copia = structuredClone(original);
copia.direccion.ciudad = "Barcelona";

console.log(original.direccion.ciudad); // Muestra "Madrid"
console.log(copia.direccion.ciudad);    // Muestra "Barcelona"
```
`structuredClone` garantiza que los objetos anidados sean copiados correctamente.

---

## 44. Desestructuración en JavaScript
La desestructuración permite extraer valores de arreglos u objetos y asignarlos a variables de manera más concisa.

### Desestructuración de objetos
```javascript
let persona = { nombre: "Ana", edad: 25 };
let { nombre, edad } = persona;
console.log(nombre); // Muestra "Ana"
console.log(edad);   // Muestra 25
```

### Desestructuración de arreglos
```javascript
let numeros = [10, 20, 30];
let [primero, segundo, tercero] = numeros;
console.log(primero); // Muestra 10
console.log(segundo); // Muestra 20
```

---

## 45. Usos de la desestructuración
La desestructuración se usa frecuentemente para:

1. **Asignar valores de un objeto o arreglo a variables**.
2. **Pasar parámetros a funciones**.
3. **Retornar múltiples valores desde una función**.

### Ejemplo:
```javascript
function obtenerCoordenadas() {
  return { x: 10, y: 20 };
}

let { x, y } = obtenerCoordenadas();
console.log(x, y); // Muestra 10 20
```

---

## 46. Desestructuración en Funciones
Puedes utilizar la desestructuración directamente en los parámetros de una función.

### Ejemplo:
```javascript
function mostrarPersona({ nombre, edad }) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

let persona = { nombre: "Ana", edad: 25 };
mostrarPersona(persona); // Muestra "Nombre: Ana, Edad: 25"
```

---

## 47. Desestructuración en Arreglos
La desestructuración también se puede usar para trabajar con arreglos de manera más eficiente.

### Ejemplo:
```javascript
let colores = ["rojo", "verde", "azul"];
let [primero, segundo] = colores;
console.log(primero); // Muestra "rojo"
console.log(segundo); // Muestra "verde"
```

Puedes usar la desestructuración para ignorar elementos:
```javascript
let [, , tercero] = colores;
console.log(tercero); // Muestra "azul"
```

---

## 48. Desestructuración en Arreglos (Avanzado)
Además, puedes utilizar el operador `...` (rest) para capturar el resto de los elementos.

### Ejemplo:
```javascript
let numeros = [1, 2, 3, 4, 5];
let [primero, ...resto] = numeros;
console.log(primero); // Muestra 1
console.log(resto);   // Muestra [2, 3, 4, 5]
```

La desestructuración y el operador `spread` son herramientas poderosas para escribir código más limpio y eficiente.

---

