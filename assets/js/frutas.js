
const frutas = [
    { nombre: "Manzana", imagen: "assets/img/manzana.webp" },
    { nombre: "Banana", imagen: "assets/img/Banana.jpg" },
    { nombre: "Naranja", imagen: "assets/img/Naranja.jpg" },
    { nombre: "Fresa", imagen: "assets/img/fresas.jpg" },
    { nombre: "Uva", imagen: "assets/img/uvas.jpg" },
    { nombre: "Mango", imagen: "assets/img/mango.jpg" },
    { nombre: "Piña", imagen: "assets/img/piña.jpg" },
    { nombre: "Papaya", imagen: "assets/img/papaya.webp" },
    { nombre: "Coco", imagen: "assets/img/coco.jpg" },
    { nombre: "Kiwi", imagen: "assets/img/kiwi.webp" },
    { nombre: "Maracuyá", imagen: "assets/img/maracuya.webp" },
    { nombre: "Cereza", imagen: "assets/img/Cereza.jpg" },
    { nombre: "Sandía", imagen: "assets/img/sandia.webp" },
    { nombre: "Pitaya", imagen: "assets/img/Pitaya.jpg" },
    { nombre: "Pera", imagen: "assets/img/pera.jpeg" }
];

const buscador = document.getElementById('search-input');
const resultados = document.getElementById('fruits-container');

buscador.addEventListener('input', filtrarFrutas);

function filtrarFrutas() {
    const textoBusqueda = buscador.value.toLowerCase();
    const frutasFiltradas = frutas.filter(fruta => 
        fruta.nombre.toLowerCase().includes(textoBusqueda)
    );
    
    mostrarFrutas(frutasFiltradas);
}

function mostrarFrutas(frutasMostrar) {
    resultados.innerHTML = '';
    frutasMostrar.forEach(fruta => {
        const divFruta = document.createElement('div');
        divFruta.className = 'fruit';
        divFruta.innerHTML = `
            <img src="${fruta.imagen}" alt="${fruta.nombre}">
            <p>${fruta.nombre}</p>
        `;
        resultados.appendChild(divFruta);
    });
}

// Mostrar todas las frutas al cargar la página
mostrarFrutas(frutas);
