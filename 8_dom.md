

## 70. ¿Qué es el DOM en JavaScript?
El **DOM (Document Object Model)** es una representación estructurada del contenido de una página web en forma de un árbol jerárquico. Cada elemento de la página, como etiquetas HTML, atributos y contenido de texto, se representan como nodos en este árbol.

### 📌 Analogía del DOM
Imagina que el **DOM** es como un árbol genealógico donde:
- El nodo raíz es el `document`, que representa toda la página web.
- Cada rama es una sección de la página (`<body>`, `<head>`, etc.).
- Las hojas del árbol son los elementos individuales (`<p>`, `<div>`, `<h1>`, etc.).
- Cada nodo puede tener atributos (`class`, `id`) y contenido de texto, que serían como las características de cada persona en el árbol familiar.

### 🔍 ¿`document` contiene todo el DOM?
Sí, el objeto `document` es la entrada principal al DOM en JavaScript. Contiene toda la estructura de la página web y proporciona métodos y propiedades para acceder y manipular los nodos.

### Ejemplo básico:
```javascript
console.log(document.title); // Muestra el título de la página en la consola
console.log(document.body);  // Muestra el contenido dentro del <body>
console.log(document.documentElement); // Muestra el elemento <html>
```

---

## 71. ¿Qué son los nodos?
Un **nodo** es cada uno de los elementos que componen el DOM. Se pueden clasificar en distintos tipos:

### 🌳 Tipos de Nodos en el DOM
1. **Nodos de Elemento (`Element`)**: Representan etiquetas HTML, como `<div>`, `<p>`, `<h1>`.
2. **Nodos de Atributo (`Attr`)**: Representan atributos de los elementos HTML (`id`, `class`, `src`).
3. **Nodos de Texto (`Text`)**: Representan el contenido textual dentro de los elementos (`Hola Mundo`).
4. **Nodos de Comentario (`Comment`)**: Representan comentarios en el código HTML (`<!-- Esto es un comentario -->`).
5. **Nodos de Documento (`Document`)**: Representan el nodo raíz (`document`), que contiene toda la estructura del DOM.

### 🔹 Ejemplo práctico:
```javascript
let parrafo = document.querySelector("p");
console.log(parrafo.nodeType); // 1 (Elemento)
console.log(parrafo.firstChild.nodeType); // 3 (Texto)
```
En este caso:
- `parrafo.nodeType` devuelve `1` porque `<p>` es un elemento.
- `parrafo.firstChild.nodeType` devuelve `3` porque su primer hijo es un nodo de texto.

---

## 72. Navegar en el DOM (Traversing)
El **DOM Traversing** es el proceso de moverse a través de los nodos del DOM para acceder a elementos específicos.

### 📌 Analogía para entender el DOM Traversing
Imagina que el DOM es un **árbol genealógico**:
- **`parentNode`**: Es como subir un nivel en el árbol para encontrar a los padres.
- **`children`**: Es como ver a los hijos de una persona en la familia.
- **`firstChild`, `firstElementChild`**: Son como el hijo mayor de una persona.
- **`lastChild`, `lastElementChild`**: Son como el hijo menor de una persona.
- **`nextSibling`, `nextElementSibling`**: Son como los hermanos que están al lado.
- **`previousSibling`, `previousElementSibling`**: Son como los hermanos mayores.

### 🔹 Métodos y propiedades para navegar en el DOM
- `parentNode`: Devuelve el nodo padre de un elemento.
- `children`: Devuelve todos los nodos hijos de un elemento.
- `firstChild`: Devuelve el primer hijo (incluye nodos de texto y comentarios).
- `firstElementChild`: Devuelve el primer hijo que sea un **elemento HTML**.
- `lastChild`: Devuelve el último hijo (incluye nodos de texto y comentarios).
- `lastElementChild`: Devuelve el último hijo que sea un **elemento HTML**.
- `nextSibling`: Devuelve el nodo hermano siguiente (puede ser texto o comentario).
- `nextElementSibling`: Devuelve el hermano siguiente que sea un **elemento HTML**.
- `previousSibling`: Devuelve el nodo hermano anterior.
- `previousElementSibling`: Devuelve el hermano anterior que sea un **elemento HTML**.

### 🔹 Ejemplo práctico:
```javascript
let lista = document.querySelector("ul");
console.log(lista.children); // Devuelve todos los hijos <li> de la lista
console.log(lista.firstElementChild); // Devuelve el primer <li>
console.log(lista.lastElementChild); // Devuelve el último <li>
```

---

## 73. Obtener ancestros en el DOM
Para obtener los **ancestros** de un nodo, podemos usar:
- `parentNode`: Devuelve el nodo padre del elemento.
- `closest(selector)`: Busca el **ancestro más cercano** que coincida con el selector CSS.

### 📌 Analogía para entender los ancestros en el DOM
Piensa en un **árbol genealógico**:
- `parentNode` es como buscar al padre directo de una persona.
- `closest(selector)` es como buscar el primer abuelo o bisabuelo con un apellido específico.

### 🔹 Ejemplo práctico:
```javascript
let elemento = document.querySelector(".hijo");
console.log(elemento.parentNode); // Devuelve el nodo padre
console.log(elemento.closest(".contenedor")); // Devuelve el ancestro más cercano con la clase "contenedor"
```

En este ejemplo:
- `parentNode` nos da el **padre directo**.
- `closest(".contenedor")` busca **hacia arriba en la jerarquía** hasta encontrar un `<div class="contenedor">`.

🔹 **Diferencia clave:** `parentNode` sube solo **un nivel**, mientras que `closest()` sigue subiendo hasta encontrar el ancestro que coincida con el selector.

---


## 74. `NodeList` vs `HTMLCollection`
Cuando obtenemos múltiples elementos del DOM, estos pueden estar en dos tipos de estructuras: `NodeList` y `HTMLCollection`. Aunque ambas representan listas de nodos, tienen diferencias clave en su comportamiento y uso.

### 📌 Analogía para entender `NodeList` y `HTMLCollection`
Imagina que `NodeList` y `HTMLCollection` son dos listas de contactos:
- `NodeList` es una **lista estática**, como una libreta de direcciones que no cambia a menos que la reescribas.
- `HTMLCollection` es una **lista en vivo**, como una lista de contactos en tu teléfono que se actualiza automáticamente si agregas o eliminas un contacto.

### 🔹 Diferencias clave:
- **`NodeList`**:
  - Puede contener nodos de cualquier tipo, incluidos texto y comentarios.
  - Se puede recorrer con `.forEach()`.
  - Es **estática** si se obtiene con `querySelectorAll()` (no se actualiza automáticamente si el DOM cambia).

- **`HTMLCollection`**:
  - Solo contiene elementos HTML.
  - No tiene `.forEach()` nativo (se debe convertir en un array).
  - Es **dinámica**: se actualiza automáticamente si se modifican los elementos del DOM.

### 🔹 Ejemplo práctico:
```javascript
// Obtenemos una NodeList (estática)
let nodos = document.querySelectorAll("p"); 
nodos.forEach(nodo => console.log(nodo.textContent)); // Se puede recorrer fácilmente

// Obtenemos una HTMLCollection (dinámica)
let elementos = document.getElementsByClassName("item");
console.log(elementos.length); // Si agregamos más elementos con esta clase, se actualizará automáticamente
```

🔹 **Conclusión:** Usa `querySelectorAll()` si necesitas una **lista estática** y `getElementsByClassName()` si necesitas una **lista dinámica**.

---

## 75. Métodos de búsqueda
Para buscar elementos en el DOM, tenemos varios métodos que nos permiten encontrarlos por `id`, `clase` o `etiqueta`.

### 📌 Analogía para entender los métodos de búsqueda
Imagina que estás en una **biblioteca**:
- `getElementById(id)`: Es como buscar **un libro específico** por su código de inventario (único).
- `getElementsByClassName(class)`: Es como pedir **todos los libros de una categoría** (colección dinámica).
- `getElementsByTagName(tag)`: Es como pedir **todos los libros de un autor en particular**.

### 🔹 Métodos de búsqueda en el DOM
- **`getElementById(id)`**: Selecciona un **único** elemento con un `id` específico.
- **`getElementsByClassName(class)`**: Devuelve un `HTMLCollection` con todos los elementos que tienen una clase específica.
- **`getElementsByTagName(tag)`**: Devuelve un `HTMLCollection` con todos los elementos de un tipo de etiqueta.

### 🔹 Ejemplo práctico:
```javascript
// Obtener un elemento por ID
let elemento = document.getElementById("miElemento");
console.log(elemento.textContent); // Muestra el contenido del elemento

// Obtener elementos por clase
let items = document.getElementsByClassName("item");
console.log(items.length); // Muestra cuántos elementos tienen la clase "item"

// Obtener elementos por etiqueta
let parrafos = document.getElementsByTagName("p");
console.log(parrafos[0].textContent); // Muestra el texto del primer <p>
```

🔹 **Consejo:** Si necesitas una selección más flexible, usa `querySelector()` y `querySelectorAll()` en lugar de estos métodos.

---


## 76. Métodos de búsqueda avanzados
Para encontrar elementos en el DOM con mayor precisión, podemos usar métodos más versátiles:

### 📌 Analogía para entender `querySelector` y `querySelectorAll`
Imagina que estás en una tienda de ropa:
- `querySelector()` es como pedir **la primera prenda azul** que encuentres en la tienda.
- `querySelectorAll()` es como pedir **todas las prendas azules** que haya disponibles.

### 🔹 Métodos avanzados de búsqueda
- **`querySelector(selector)`**: Devuelve el **primer elemento** que coincida con el selector CSS.
- **`querySelectorAll(selector)`**: Devuelve **todos los elementos** que coincidan con el selector CSS en un `NodeList`.

### 🔹 Ejemplo práctico:
```javascript
// Seleccionar el primer párrafo
let primerParrafo = document.querySelector("p");
console.log(primerParrafo.textContent);

// Seleccionar todos los párrafos
let todosLosParrafos = document.querySelectorAll("p");
todosLosParrafos.forEach(p => console.log(p.textContent));
```

🔹 **Diferencia clave:** `querySelector()` devuelve **un solo elemento**, mientras que `querySelectorAll()` devuelve **una lista de nodos**.

---

## 77. `querySelectorAll()`
El método `querySelectorAll()` devuelve un `NodeList` con todos los elementos que coincidan con el selector.

### 📌 Diferencia entre `NodeList` y `HTMLCollection`
- `NodeList` (devuelto por `querySelectorAll()`): Puede contener elementos y nodos de texto y se puede recorrer con `.forEach()`.
- `HTMLCollection` (devuelto por `getElementsByClassName()`): Solo contiene elementos HTML y se actualiza dinámicamente.

### 🔹 Ejemplo práctico:
```javascript
let links = document.querySelectorAll("a");
links.forEach(link => console.log(link.href));
```

---

## 78. Propiedades de los Nodos
Los nodos en el DOM tienen diversas propiedades que permiten acceder y modificar su contenido.

### 📌 Analogía para entender `textContent`, `innerHTML` y `outerHTML`
Imagina que un **elemento HTML** es como un sobre de carta:
- `textContent`: Muestra **solo el contenido de la carta**, ignorando el sobre y etiquetas adicionales.
- `innerHTML`: Muestra **el contenido y etiquetas dentro del sobre**.
- `outerHTML`: Muestra **todo el sobre con su contenido y etiquetas**.

### 🔹 Propiedades principales de los nodos
- **`textContent`**: Devuelve solo el texto dentro de un nodo, ignorando etiquetas.
- **`innerHTML`**: Devuelve o establece el contenido HTML dentro del nodo.
- **`outerHTML`**: Devuelve o reemplaza el elemento **completo** con su contenido y etiquetas.

### 🔹 Ejemplo práctico:
```javascript
let div = document.querySelector("div");
console.log(div.textContent); // Solo el texto
console.log(div.innerHTML);   // Incluye etiquetas internas
console.log(div.outerHTML);   // Incluye el div con todo su contenido
```

🔹 **Precaución:** Usar `innerHTML` para insertar contenido puede ser riesgoso si se trabaja con datos de usuario, ya que puede exponer el sitio a ataques de `XSS`.

---

## 79. Propiedades de Nodos #2
Además de las propiedades anteriores, los nodos tienen más atributos útiles para trabajar con el DOM.

### 📌 Analogía para `nodeName`, `nodeType` y `hasChildNodes`
Imagina que cada nodo es una **caja de almacenamiento**:
- `nodeName`: Te dice **el tipo de caja** que es (`DIV`, `P`, `H1`, etc.).
- `nodeType`: Te indica **qué tipo de objeto** es (elemento, texto, comentario, etc.).
- `hasChildNodes()`: Te dice si **la caja contiene algo dentro o está vacía**.

### 🔹 Propiedades importantes
- **`nodeName`**: Devuelve el nombre del nodo (`DIV`, `P`, etc.).
- **`nodeType`**: Devuelve el tipo de nodo:
  - `1`: Nodo de elemento (`Element`)
  - `3`: Nodo de texto (`Text`)
  - `8`: Nodo de comentario (`Comment`)
- **`hasChildNodes()`**: Retorna `true` si el nodo tiene elementos dentro.

### 🔹 Ejemplo práctico:
```javascript
let parrafo = document.querySelector("p");
console.log(parrafo.nodeName); // "P"
console.log(parrafo.nodeType); // 1 (Elemento)
console.log(parrafo.hasChildNodes()); // true o false
```

🔹 **Conclusión:** Estas propiedades son útiles para identificar y trabajar con diferentes tipos de nodos dentro del DOM.

---


## 80. Manipular atributos de nodos
En HTML, los atributos proporcionan información adicional sobre los elementos. JavaScript permite manipular estos atributos de diversas maneras.

### 📌 Analogía para entender la manipulación de atributos
Imagina que los atributos de un elemento HTML son **etiquetas de identificación en un producto**:
- `getAttribute(attr)`: Es como **leer la etiqueta** para conocer la información.
- `setAttribute(attr, valor)`: Es como **editar la etiqueta** para cambiar la información.
- `removeAttribute(attr)`: Es como **quitar la etiqueta** del producto.

### 🔹 Métodos para manipular atributos
- **`getAttribute(attr)`**: Obtiene el valor de un atributo específico.
- **`setAttribute(attr, valor)`**: Asigna un nuevo valor a un atributo.
- **`removeAttribute(attr)`**: Elimina un atributo del elemento.

### 🔹 Ejemplo práctico:
```javascript
let imagen = document.querySelector("img");
console.log(imagen.getAttribute("src")); // Obtiene la URL de la imagen

imagen.setAttribute("alt", "Nueva descripción"); // Modifica el atributo "alt"
imagen.removeAttribute("title"); // Elimina el atributo "title"
```

🔹 **Consejo:** `setAttribute()` puede sobrescribir valores existentes, por lo que es recomendable verificar su contenido antes de cambiarlo.

---

## 81. Métodos `matches()`, `closest()` y `dataset`
Estos métodos permiten comprobar si un elemento coincide con un selector, encontrar ancestros específicos o acceder a atributos personalizados `data-*`.

### 📌 Analogía para entender `matches()`, `closest()` y `dataset`
- `matches(selector)`: Es como preguntar si una persona **pertenece a un grupo**.
- `closest(selector)`: Es como **buscar en la familia** hasta encontrar a un ancestro con una característica específica.
- `dataset`: Es como leer **notas adhesivas personalizadas** pegadas en un objeto.

### 🔹 Métodos explicados:
- **`matches(selector)`**: Comprueba si un elemento coincide con un selector CSS.
- **`closest(selector)`**: Busca el ancestro más cercano que coincida con el selector.
- **`dataset`**: Permite acceder a atributos personalizados `data-*` en elementos HTML.

### 🔹 Ejemplo práctico:
```javascript
let boton = document.querySelector("button");
if (boton.matches(".activo")) {
  console.log("El botón está activo");
}

let hijo = document.querySelector(".hijo");
console.log(hijo.closest(".contenedor")); // Encuentra el ancestro más cercano con la clase "contenedor"

let elemento = document.querySelector(".producto");
console.log(elemento.dataset.precio); // Accede a data-precio
```

---

## 82. Introducción a los eventos
Los eventos permiten ejecutar código cuando los usuarios interactúan con la página (clics, teclas presionadas, desplazamientos, etc.).

### 📌 Analogía para entender los eventos
Piensa en los eventos como **sensores en una tienda**:
- Un sensor de puerta detecta **cuando alguien entra** (evento `click`).
- Un sensor de sonido detecta **cuando alguien habla** (evento `keydown`).
- Un sensor de temperatura reacciona **cuando cambia el clima** (evento `resize`).

### 🔹 Ejemplo práctico:
```javascript
document.querySelector("button").addEventListener("click", function() {
  alert("Botón clickeado");
});
```

---

## 83. Método `addEventListener`
`addEventListener()` permite asignar múltiples eventos a un mismo elemento sin sobrescribir eventos previos.

### 🔹 Sintaxis:
```javascript
elemento.addEventListener("evento", funcion);
```

### 🔹 Ejemplo práctico:
```javascript
let boton = document.querySelector("button");
boton.addEventListener("click", function() {
  console.log("Botón clickeado");
});
```

---

## 84. Objeto `event`
Cada evento genera un objeto `event`, que contiene información sobre el evento ocurrido.

### 🔹 Ejemplo práctico:
```javascript
document.addEventListener("click", function(event) {
  console.log("Coordenadas del clic: ", event.clientX, event.clientY);
});
```

🔹 **Consejo:** `event.preventDefault()` se usa para evitar comportamientos predeterminados, como el envío de formularios.

---

## 85. Propagación de eventos
Los eventos pueden propagarse desde un elemento hijo hasta sus ancestros, afectando múltiples elementos a la vez.

### 📌 Tipos de propagación:
- **Burbujeo (`bubbling`)**: El evento se propaga desde el elemento objetivo **hacia afuera**.
- **Captura (`capturing`)**: El evento se propaga desde el documento **hacia el elemento objetivo**.

### 🔹 Ejemplo práctico:
```javascript
document.querySelector("#padre").addEventListener("click", function() {
  console.log("Evento en el padre");
});

document.querySelector("#hijo").addEventListener("click", function() {
  console.log("Evento en el hijo");
});
```

---

## 86. Fase de captura en eventos
Durante la **fase de captura**, los eventos se manejan desde el **elemento más externo** hasta el objetivo.

### 🔹 Ejemplo práctico:
```javascript
document.querySelector("#padre").addEventListener("click", function() {
  console.log("Captura en el padre");
}, true);
```

🔹 **Nota:** Pasar `true` como tercer argumento indica que el evento debe manejarse en la fase de captura en lugar de burbujeo.

---

## 87. Delegación de eventos
La **delegación de eventos** se usa para manejar eventos en elementos que pueden ser agregados dinámicamente al DOM.

### 📌 Analogía
En lugar de **poner un guardia en cada puerta** de un hotel, ponemos **uno solo en la entrada** para verificar a todos los que ingresan.

### 🔹 Ejemplo práctico:
```javascript
document.querySelector("#lista").addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    console.log("Clic en ", event.target.textContent);
  }
});
```

## 88. Crear e insertar elementos en el DOM
Podemos crear y agregar nuevos elementos dinámicamente.

### Ejemplo:
```javascript
let nuevoElemento = document.createElement("p");
nuevoElemento.textContent = "Nuevo párrafo";
document.body.appendChild(nuevoElemento);
```

---

## 89. Agregar elementos al DOM
Podemos utilizar métodos como `appendChild()` y `insertBefore()` para agregar nodos.

### Ejemplo:
```javascript
let lista = document.querySelector("ul");
let nuevoItem = document.createElement("li");
nuevoItem.textContent = "Elemento nuevo";
lista.appendChild(nuevoItem);
```

---

## 90. `insertAdjacentHTML` & `replaceWith`
Estos métodos permiten insertar o reemplazar contenido en el DOM.

### Ejemplo:
```javascript
document.querySelector("div").insertAdjacentHTML("beforeend", "<p>Nuevo contenido</p>");
```

---

## 91. `insertAdjacentElement`
Este método permite insertar un nodo en una posición específica.

### Ejemplo:
```javascript
document.querySelector("#contenedor").insertAdjacentElement("beforeend", nuevoElemento);
```

---

## 92. Manipular clases de un elemento
Podemos agregar, quitar o alternar clases CSS usando `classList`.

### Ejemplo:
```javascript
document.querySelector(".miElemento").classList.add("nueva-clase");
```

---

## 93. Métodos `toggle()`, `contains()` y `replace()`
Permiten gestionar clases de elementos de manera eficiente.

### Ejemplo:
```javascript
document.querySelector("button").addEventListener("click", function() {
  this.classList.toggle("activo");
});
```

---

## 94. Etiqueta `<template>`
La etiqueta `<template>` permite crear fragmentos de HTML reutilizables.

### Ejemplo:
```javascript
let template = document.querySelector("#miTemplate").content.cloneNode(true);
document.body.appendChild(template);
```

---

## 95. Manipular estilos con JS (CSSOM)
Podemos modificar estilos CSS con JavaScript accediendo a `style`.

### Ejemplo:
```javascript
document.querySelector("p").style.color = "red";
```

---

## 96. Método `getComputedStyle()`
Este método devuelve los estilos calculados de un elemento.

### Ejemplo:
```javascript
let estilo = getComputedStyle(document.querySelector("p"));
console.log(estilo.color);
```

---

## 97. Manipular hojas de estilos con JS (Avanzado)
Podemos acceder y modificar hojas de estilo dinámicamente.

### Ejemplo:
```javascript
document.styleSheets[0].insertRule("body { background: lightgray; }", 0);
```

---

## 98. Agregar selectores CSS con JS (Avanzado)
Podemos agregar reglas CSS dinámicamente.

### Ejemplo:
```javascript
document.styleSheets[0].insertRule(".nuevaClase { color: blue; }", 0);
```

---

## 99. Métodos del objeto `style`
Podemos modificar múltiples propiedades CSS con JavaScript.

### Ejemplo:
```javascript
let div = document.querySelector("div");
div.style.cssText = "color: white; background: black; padding: 10px;";
```

---

## 100. Obtener dimensiones de los elementos
Podemos obtener el tamaño de un elemento con `offsetWidth` y `offsetHeight`.

### Ejemplo:
```javascript
let ancho = document.querySelector("div").offsetWidth;
console.log("Ancho: ", ancho);
```

---

## 101. Obtener dimensiones de los elementos #2
Podemos obtener dimensiones más detalladas con `getBoundingClientRect()`.

### Ejemplo:
```javascript
let rect = document.querySelector("div").getBoundingClientRect();
console.log("Altura: ", rect.height);
```

---

## 102. Métodos para manipular el Scroll
Podemos manipular el desplazamiento de la página con `scrollTo()`.

### Ejemplo:
```javascript
window.scrollTo(0, 500);
```

---

## 103. Métodos para manipular el Scroll #2
Podemos desplazarnos suavemente con `scrollIntoView()`.

### Ejemplo:
```javascript
document.querySelector("#seccion").scrollIntoView({ behavior: "smooth" });
```

---

## 104. Obtener coordenadas de un elemento
Podemos obtener la posición exacta de un elemento en la pantalla.

### Ejemplo:
```javascript
let coords = document.querySelector("#miElemento").getBoundingClientRect();
console.log("X: ", coords.x, "Y: ", coords.y);
```

---