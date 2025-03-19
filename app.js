// Array para almacenar los nombres de los amigos
let amigos = [];

/**
 * Función para agregar un amigo al array y actualizar la lista en el HTML
 */
function agregarAmigo() {
    let inputNombre = document.getElementById("amigo"); // Capturar el input
    let nombre = inputNombre.value.trim(); // Limpiar espacios en blanco

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    inputNombre.value = "";

    // Actualizar la lista en pantalla
    mostrarListaAmigos();
}

/**
 * Función para mostrar la lista de amigos en la UI
 */
function mostrarListaAmigos() {
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista antes de actualizar
    lista.innerHTML = "";

    // Recorrer el array amigos y agregar cada nombre como un <li>
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        li.classList.add("name-item"); // Agregar clase para estilos CSS
        lista.appendChild(li);
    });
}

/**
 * Función para sortear un amigo al azar y mostrar el resultado
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

    // Limpiar la lista de amigos en la UI
    document.getElementById("listaAmigos").innerHTML = "";

    // Vaciar el array de amigos
    amigos = [];

    // Mostrar solo el ganador en la UI
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li class="result-item">🎉 Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}
