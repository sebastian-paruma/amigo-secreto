// Archivo: app.js
// Descripción: Script principal para la lógica del Amigo Secreto

// Declaración del array para almacenar los nombres de los amigos
let amigos = []; // Almacena los nombres ingresados por el usuario

/**
 * Función para agregar un amigo a la lista
 */
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim(); // Eliminar espacios en blanco

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    inputAmigo.value = "";
}
