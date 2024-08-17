const frutas = [
    { nombre: "Cereza", imagen: 'assets/cereza.jpg' },
    { nombre: "Fresas", imagen: 'assets/fresas.jpg' },
    { nombre: "Kiwi", imagen: 'assets/kiwi.jpg' },
    { nombre: "Mango", imagen: 'assets/mango.jpg' },
    { nombre: "Manzana", imagen: 'assets/manzana.jpg' },
    { nombre: "Papaya", imagen: 'assets/papaya.jpg' },
    { nombre: "Pera", imagen: 'assets/pera.jpg' },
    { nombre: "Piña", imagen: 'assets/piña.jpg' },
    { nombre: "Uvas", imagen: 'assets/uvas.jpg' },
    { nombre: "Sandía", imagen: 'assets/sandia.jpg' },
    { nombre: "Limón", imagen: 'assets/limon.jpg' },
    { nombre: "Naranja", imagen: 'assets/naranja.jpg' },
    { nombre: "Durazno", imagen: 'assets/durazno.jpg' },
    { nombre: "Coco", imagen: 'assets/coco.jpg' },
    { nombre: "Melón", imagen: 'assets/melon.jpg' }
];

const fruitInput = document.getElementById("fruitInput");
const searchButton = document.getElementById("searchButton");
const fruitContainer = document.getElementById("fruitContainer");

// Función para mostrar las frutas filtradas
function mostrarFrutas(filtradas) {
    fruitContainer.innerHTML = ""; 

    filtradas.forEach(function(fruta) {
 
        const fruitItem = document.createElement("div");
        fruitItem.className = "fruit-item";

        // Añadir la imagen
        const fruitImage = document.createElement("img");
        fruitImage.src = fruta.imagen;
        fruitImage.alt = fruta.nombre;

        // Añadir el nombre de la fruta
        const fruitName = document.createElement("p");
        fruitName.textContent = fruta.nombre;

        fruitItem.appendChild(fruitImage);
        fruitItem.appendChild(fruitName);

        fruitContainer.appendChild(fruitItem);
    });

    if (filtradas.length > 0) {
        const fruitItem = document.querySelector(".fruit-item");
        fruitItem.style.display = "block";
    }
}

// Función para filtrar frutas y mostrarlas
function buscarFruta() {
    const query = fruitInput.value.toLowerCase();

    const frutasFiltradas = frutas.filter(function(fruta) {
        return fruta.nombre.toLowerCase().includes(query);
    });
    mostrarFrutas(frutasFiltradas);
}
searchButton.addEventListener("click", buscarFruta);
