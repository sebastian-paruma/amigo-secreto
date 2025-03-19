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

/**
 * Función para actualizar la lista de amigos en la interfaz
 */
function actualizarListaAmigos() {
    // Obtener el elemento de la lista en el HTML
    let listaAmigos = document.getElementById("listaAmigos");

    // Limpiar la lista existente para evitar duplicados
    listaAmigos.innerHTML = "";

    // Recorrer el array de amigos y agregar cada uno como un <li>
    for (let i = 0; i < amigos.length; i++) {
        let elementoLista = document.createElement("li"); // Crear <li>
        elementoLista.textContent = amigos[i]; // Asignar el nombre del amigo
        listaAmigos.appendChild(elementoLista); // Agregar <li> a la lista
    }
}

/**
 * Función para sortear un amigo al azar del array amigos
 */
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio dentro del rango del array
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    document.getElementById("resultadoSorteo").innerHTML = `🎉 Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
