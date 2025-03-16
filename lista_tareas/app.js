let boton = document.getElementById("add");
let lista = document.querySelector("ul");
let inputTexto = document.getElementById("texto");

// function saludarConNombre(nombre) {
//     console.log(`Hola, ${nombre}!`);
// }

function addTask() {
    if (inputTexto.value !== "") {
        let nuevoItem = document.createElement("li");
        nuevoItem.setAttribute("class", "my-3");
        nuevoItem.textContent = inputTexto.value; // Esto es el valor que hay escrito en el input
        lista.appendChild(nuevoItem);
        addButtonBorrar(nuevoItem);
    
    }
};


function addButtonBorrar(nuevoItem) {
    let buttonBorrar = document.createElement("button");
    buttonBorrar.textContent = "Borrar";
    buttonBorrar.setAttribute("class", "mx-3 btn btn-primary float-start");
    console.log(buttonBorrar);
    buttonBorrar.addEventListener("click", function () {
        console.log(buttonBorrar);
        console.log("Borrando tarea: " + nuevoItem.textContent);
        nuevoItem.remove();
    });
    nuevoItem.appendChild(buttonBorrar);
};


boton.addEventListener("click", function () {
    addTask();
});

inputTexto.addEventListener('keypress', function (e) {
    console.log(e.key);
    if (e.key === 'Enter') {
        addTask();
    }
});




// let lista = document.querySelector("ul");
// let nuevoItem = document.createElement("li");
// nuevoItem.textContent = "Elemento nuevo a borrar";
// nuevoItem.setAttribute("data-id", "2");
// nuevoItem.addEventListener("click", function () {
//     alert("Botón clickeado", nuevoItem.getAttribute("data-id"));
//     nuevoItem.remove();
// });
// lista.appendChild(nuevoItem);


