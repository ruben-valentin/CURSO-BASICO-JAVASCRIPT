// Importamos funciones de validación y manipulación de datos desde módulos externos
import { validateInputLength } from "./form/validateInputLength.js"; // Valida la longitud de los inputs
import { validateEmail } from "./form/validateEmail.js"; // Valida el formato del email
import { setDataValue } from "./form/setDataValue.js"; // Asigna valores a los elementos del formulario

// Seleccionamos el formulario de contacto
const formContact = document.querySelector(".form");

// Seleccionamos los inputs del formulario
const inputName = document.querySelector("#name"); // Campo de nombre
const inputEmail = document.querySelector("#email"); // Campo de email
const inputMessage = document.querySelector("#message"); // Campo de mensaje

// Seleccionamos todos los labels que contienen el atributo `data-status`
const labels = document.querySelectorAll("[data-status]");

// Seleccionamos el cuadro de diálogo del formulario y el botón para cerrarlo
const formDialog = document.querySelector(".form__dialog");
const closeDialogBtn = document.querySelector(".form__btn--close");

// Agregamos un evento 'submit' al formulario para manejar la validación al enviar
formContact.addEventListener("submit", handleSubmitForm);

/**
 * Función que maneja el envío del formulario
 * @param {Event} e - Evento del formulario
 */
function handleSubmitForm(e) {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Validamos los campos de entrada
    let statusName = validateInputLength(inputName, 6); // Nombre debe tener al menos 6 caracteres
    let statusMessage = validateInputLength(inputMessage, 10); // Mensaje debe tener al menos 10 caracteres
    let statusEmail = validateEmail(inputEmail); // Verifica si el email tiene un formato válido

    // Si todos los campos son válidos, procedemos con la acción
    if (statusName && statusMessage && statusEmail) {
        
        // Recorremos todos los labels con `data-status` y les asignamos valores usando `setDataValue`
        labels.forEach(function(label) {
            setDataValue(label, "status");
        });

        // Mostramos el cuadro de diálogo de confirmación
        formDialog.showModal();

        // Reiniciamos el formulario después del envío exitoso
        formContact.reset();
    }
}

// Agregamos un evento al botón de cerrar para ocultar el cuadro de diálogo
closeDialogBtn.addEventListener("click", function() {
    formDialog.close();
});
