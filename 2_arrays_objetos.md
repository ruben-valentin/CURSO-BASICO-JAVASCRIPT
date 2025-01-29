# 📌 Arrays y Objetos en JavaScript

## 🏗️ 16. Introducción a Arreglos

Imagina que un **arreglo (array)** es como una **caja de zapatos con compartimentos**. Cada compartimento puede guardar un elemento y se puede acceder a ellos por su número de posición.

### 📦 Creación de un arreglo
```javascript
let frutas = ["manzana", "banana", "naranja"];
console.log(frutas); // ["manzana", "banana", "naranja"]
```
📌 **Explicación:**  
Cada fruta es como un zapato en su respectivo compartimento.

### 🔍 Acceder a un elemento
```javascript
console.log(frutas[0]); // "manzana"
```
📌 **Explicación:**  
El índice `0` representa el primer compartimento de nuestra caja.

---

## 🛠️ 17. Agregar/Eliminar elementos de un Array

### ➕ Agregar elementos
Podemos meter más elementos en nuestra caja de zapatos.

- **Al final:** Como poner un zapato al final de la caja.
  ```javascript
  frutas.push("kiwi");
  console.log(frutas); // ["manzana", "banana", "naranja", "kiwi"]
  ```
- **Al principio:** Como agregar un zapato al inicio de la caja.
  ```javascript
  frutas.unshift("fresa");
  console.log(frutas); // ["fresa", "manzana", "banana", "naranja", "kiwi"]
  ```

### ➖ Eliminar elementos
Podemos sacar elementos de la caja.

- **Del final:** Como sacar el último zapato.
  ```javascript
  frutas.pop();
  console.log(frutas); // ["fresa", "manzana", "banana", "naranja"]
  ```
- **Del principio:** Como sacar el primer zapato.
  ```javascript
  frutas.shift();
  console.log(frutas); // ["manzana", "banana", "naranja"]
  ```

---

## 🎭 18. Valores Primitivos y Objetos

En JavaScript, los valores son como **juguetes en una tienda**. Algunos son simples y otros más complejos.

### 🎈 Valores primitivos
Son juguetes **simples** y no cambian. Los principales tipos son:
- `number` → Números
- `string` → Texto
- `boolean` → Verdadero o falso
- `null` → Nada
- `undefined` → No definido
- `symbol` → Únicos

### 🏗️ Objetos
Los objetos son como **juguetes armables (LEGO)**, ya que están hechos de muchas partes.

```javascript
let persona = {
  nombre: "Juan",
  edad: 30
};
console.log(persona); // { nombre: "Juan", edad: 30 }
```
📌 **Explicación:**  
El objeto `persona` es como un muñeco que tiene **nombre** y **edad**.

---

## 🔄 19. Arreglos Anidados

Imagina una **caja de zapatos con otras cajas dentro**.

```javascript
let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matriz[0]); // [1, 2, 3]
console.log(matriz[1][2]); // 6
```
📌 **Explicación:**  
Cada **caja dentro de la caja grande** es un sub-arreglo.

---

## 🧮 20. Tabla de multiplicar con Arreglos

Podemos usar arreglos como una **máquina de hacer cálculos**.

```javascript
let tabla = [];
for (let i = 1; i <= 10; i++) {
  tabla.push(i * 2);
}
console.log(tabla); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
```
📌 **Explicación:**  
Cada número se multiplica por `2` y se guarda en la tabla.

---

## 🚗 21. Introducción a Objetos

Un objeto en JavaScript es como un **carro**: tiene varias partes y características.

### 🚘 Creación de un objeto
```javascript
let coche = {
  marca: "Toyota",
  modelo: "Corolla",
  anio: 2022
};
console.log(coche); // { marca: "Toyota", modelo: "Corolla", anio: 2022 }
```
📌 **Explicación:**  
El **coche** tiene características como **marca, modelo y año**.

### 🏷️ Acceder a propiedades
```javascript
console.log(coche.marca); // "Toyota"
console.log(coche["modelo"]); // "Corolla"
```
📌 **Explicación:**  
Es como preguntar **¿de qué marca es el coche?**.

---

## 🛠️ 22. Modificar propiedades en objetos

Podemos **pintar el coche o cambiarle partes**.

### ✏️ Modificar una propiedad
```javascript
coche.anio = 2023;
console.log(coche.anio); // 2023
```
📌 **Explicación:**  
Es como cambiar el **año del modelo** del coche.

### 🎨 Agregar una nueva propiedad
```javascript
coche.color = "rojo";
console.log(coche.color); // "rojo"
```
📌 **Explicación:**  
Es como **pintar el coche** de otro color.

---

## 🏠 23. Objetos Anidados

Un objeto puede contener otro objeto, como una **casa dentro de una ciudad**.

```javascript
let usuario = {
  nombre: "Ana",
  direccion: {
    ciudad: "Madrid",
    codigoPostal: 28001
  }
};
console.log(usuario.direccion.ciudad); // "Madrid"
```
📌 **Explicación:**  
El usuario **vive en una ciudad**, que es otro objeto dentro de `usuario`.

---

🎉 **¡Y eso es todo!** Ahora tienes una base sólida sobre **arrays y objetos** en JavaScript. 🚀
