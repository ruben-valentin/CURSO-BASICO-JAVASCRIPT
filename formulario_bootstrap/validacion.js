// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function () {
    'use strict'; // Habilita el modo estricto de JavaScript para evitar errores comunes
    
    // Selecciona todos los formularios que tienen la clase 'needs-validation'
    var forms = document.querySelectorAll('.needs-validation');

    // Convierte la lista de formularios en un array y recorre cada uno
    Array.prototype.slice.call(forms).forEach(function (form) {
        
        // Agrega un evento 'submit' a cada formulario
        form.addEventListener('submit', function (event) {
            
            // Verifica si el formulario es válido según las reglas de validación de HTML5
            if (!form.checkValidity()) {
                event.preventDefault(); // Evita el envío del formulario si hay errores
                event.stopPropagation(); // Detiene la propagación del evento para evitar comportamientos no deseados
            }
            
            // Agrega la clase 'was-validated' al formulario para que Bootstrap muestre los mensajes de error
            form.classList.add('was-validated');
        }, false); // false indica que el evento se ejecuta en la fase de burbuja (fase final)
    });
});
