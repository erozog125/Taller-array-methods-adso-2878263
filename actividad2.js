// Define un arreglo de frutas con nombre e imagen
const fruits = [
    { name: 'Manzana', image: 'assets/manzana.jpg' },
    { name: 'Plátano', image: 'assets/platano.jpg' },
    { name: 'Cereza', image: 'assets/cereza.jpg' },
    { name: 'Pomarrosa', image: 'assets/pomarrosa.jpg' },
    { name: 'Uva', image: 'assets/uva.jpg' },
    { name: 'Kiwi', image: 'assets/Kiwi.jpg' },
    { name: 'uvapasa', image: 'assets/uvapasa.jpg' },
    { name: 'Mango', image: 'assets/mango.jpg' },
    { name: 'Naranja', image: 'assets/naranja.jpg' },
    { name: 'Papaya', image: 'assets/papaya.jpg' },
    { name: 'Pera', image: 'assets/pera.jpg' },
    { name: 'Piña', image: 'assets/piña.jpg' },
    { name: 'Frambuesa', image: 'assets/frambuesa.jpg' },
    { name: 'Fresa', image: 'assets/fresa.jpg' },
    { name: 'Sandía', image: 'assets/sandia.jpg' }
];

// Obtén referencias al input y al contenedor de frutas
const searchInput = document.getElementById('searchInput');
const fruitContainer = document.getElementById('fruitContainer');

// Función para renderizar las frutas en el contenedor
function renderFruits(filteredFruits) {
    // Limpiar el contenedor antes de renderizar
    fruitContainer.innerHTML = '';
    // Crear y agregar un elemento para cada fruta
    filteredFruits.forEach(fruit => {
        const fruitCard = document.createElement('div');
        fruitCard.className = 'fruit-card';
        fruitCard.innerHTML = `
            <img src="${fruit.image}" alt="${fruit.name}">
            <h3>${fruit.name}</h3>
        `;
        fruitContainer.appendChild(fruitCard);
    });
}

// Función para filtrar y mostrar frutas
function filterFruits() {
    const query = searchInput.value.toLowerCase();
    const filteredFruits = fruits.filter(fruit =>
        fruit.name.toLowerCase().includes(query)
    );
    renderFruits(filteredFruits);
}

// Renderiza todas las frutas al cargar la página
// Sin no se quiere mostrar todas las frutas se omite esta linea
renderFruits(fruits);

// Añade un evento de entrada al input para filtrar las frutas en tiempo real
searchInput.addEventListener('input', filterFruits);