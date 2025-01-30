# 📌 Manipulación de Objetos en JavaScript

## 🔄 40. Referencia vs Valor en JavaScript

En JavaScript, los datos se dividen en **tipos primitivos** y **tipos de referencia**.

### 🔢 Tipos primitivos (Pasados por valor)
Los tipos primitivos (`number`, `string`, `boolean`, `null`, `undefined`, `symbol`) **se copian al asignarse a otra variable**.

### 📌 Ejemplo:
```javascript
let a = 10;
let b = a;
b = 20;

console.log(a); // 10
console.log(b); // 20
```

📌 **Explicación:**  
Cuando `b = a`, se crea una copia de `a`, por lo que `b` puede cambiar sin afectar `a`.

### 📦 Tipos de referencia (Pasados por referencia)
Los objetos y arreglos **se asignan por referencia**, lo que significa que dos variables pueden apuntar al mismo objeto en memoria.

### 📌 Ejemplo:
```javascript
let persona1 = { nombre: "Ana" };
let persona2 = persona1;

persona2.nombre = "Juan";

console.log(persona1.nombre); // "Juan"
```

📌 **Explicación:**  
Ambas variables apuntan al mismo objeto en memoria, por lo que cambiar `persona2` también afecta `persona1`.

---

## ✨ 41. Sintaxis Spread (`...`)

El operador `spread` (`...`) permite copiar o combinar objetos y arreglos fácilmente.

### 📌 Ejemplo con arreglos:
```javascript
let numeros = [1, 2, 3];
let nuevosNumeros = [...numeros, 4, 5];

console.log(nuevosNumeros); // [1, 2, 3, 4, 5]
```

### 📌 Ejemplo con objetos:
```javascript
let persona = { nombre: "Ana", edad: 25 };
let nuevaPersona = { ...persona, ciudad: "Madrid" };

console.log(nuevaPersona); // { nombre: "Ana", edad: 25, ciudad: "Madrid" }
```

📌 **Explicación:**  
El operador `spread` copia el contenido del objeto original en un nuevo objeto.

---

## 🔄 42. Uso de Spread en Arreglos y Objetos

El `spread` es útil para:

1. **Copiar arreglos u objetos sin modificar los originales**:
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

## 🛠️ 43. `structuredClone` en JavaScript

`structuredClone` permite hacer **copias profundas** de objetos.

### 📌 Ejemplo:
```javascript
let original = { nombre: "Ana", direccion: { ciudad: "Madrid" } };
let copia = structuredClone(original);

copia.direccion.ciudad = "Barcelona";

console.log(original.direccion.ciudad); // "Madrid"
console.log(copia.direccion.ciudad);    // "Barcelona"
```

📌 **Explicación:**  
A diferencia de `spread`, `structuredClone` copia **objetos anidados**, evitando modificar el original.

---

## 🎯 44. Desestructuración en JavaScript

La desestructuración permite extraer valores de objetos y arreglos de forma rápida.

### 📦 Desestructuración de objetos:
```javascript
let persona = { nombre: "Ana", edad: 25 };
let { nombre, edad } = persona;

console.log(nombre); // "Ana"
console.log(edad);   // 25
```

### 📌 Desestructuración de arreglos:
```javascript
let numeros = [10, 20, 30];
let [primero, segundo, tercero] = numeros;

console.log(primero); // 10
console.log(segundo); // 20
```

📌 **Explicación:**  
Se extraen valores sin necesidad de escribir `persona.nombre` o `numeros[0]`.

---

## ⚡ 45. Usos de la Desestructuración

La desestructuración es útil para:

1. **Asignar valores de objetos o arreglos a variables**.
2. **Pasar parámetros a funciones**.
3. **Retornar múltiples valores desde una función**.

### 📌 Ejemplo:
```javascript
function obtenerCoordenadas() {
  return { x: 10, y: 20 };
}

let { x, y } = obtenerCoordenadas();
console.log(x, y); // 10 20
```

📌 **Explicación:**  
La función devuelve un objeto y lo desestructuramos al recibirlo.

---

## 🏗️ 46. Desestructuración en Funciones

Podemos desestructurar directamente en los parámetros de una función.

### 📌 Ejemplo:
```javascript
function mostrarPersona({ nombre, edad }) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

let persona = { nombre: "Ana", edad: 25 };
mostrarPersona(persona); // "Nombre: Ana, Edad: 25"
```

📌 **Explicación:**  
La función recibe un objeto y extrae sus propiedades automáticamente.

---

## 🔄 47. Desestructuración en Arreglos

Podemos extraer elementos específicos de un arreglo.

### 📌 Ejemplo:
```javascript
let colores = ["rojo", "verde", "azul"];
let [primero, segundo] = colores;

console.log(primero); // "rojo"
console.log(segundo); // "verde"
```

📌 **Ignorar elementos:**  
```javascript
let [, , tercero] = colores;
console.log(tercero); // "azul"
```

📌 **Explicación:**  
Se puede ignorar valores usando comas `, ,`.

---

## 🔥 48. Desestructuración en Arreglos (Avanzado)

Podemos usar `...` (rest) para capturar el resto de los elementos.

### 📌 Ejemplo:
```javascript
let numeros = [1, 2, 3, 4, 5];
let [primero, ...resto] = numeros;

console.log(primero); // 1
console.log(resto);   // [2, 3, 4, 5]
```

📌 **Explicación:**  
- `primero` obtiene el primer valor.
- `resto` contiene un **arreglo con los valores restantes**.

---

🎉 **¡Ahora dominas la manipulación de objetos y arreglos en JavaScript!** 🚀
