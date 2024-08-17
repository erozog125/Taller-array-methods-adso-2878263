 // Array de frutas
    const fruits = [
    { name: "Manzana", image: "assets/imgs/Manzana.webp" },
    { name: "Banana", image: "assets/imgs/Banana.jpg" },
    { name: "Naranja", image: "assets/imgs/Naranja.jpg" },
    { name: "Fresa", image: "assets/imgs/Fresa.jpg" },
    { name: "Uva", image: "assets/imgs/Uva.jpg" },
    { name: "Mango", image: "assets/imgs/Mango.jpg" },
    { name: "Pera", image: "assets/imgs/Pera.jpg" },
    { name: "Piña", image: "assets/imgs/Piña.jpg" },
    { name: "Kiwi", image: "assets/imgs/Kiwi.jpg" },
    { name: "Papaya", image: "assets/imgs/Papaya.jpg" },
    { name: "Cereza", image: "assets/imgs/Cereza.jpg" },
    { name: "Durazno", image: "assets/imgs/Durazno.jpg" },
    { name: "Sandía", image: "assets/imgs/Sandia.jpg" },
    { name: "Melón", image: "assets/imgs/Melon.jpg" },
    { name: "Coco", image: "assets/imgs/Coco.jpg" }
];

// Función para mostrar todas las frutas
function displayFruits(fruitsToDisplay) {
    const container = document.getElementById('fruits-container');
    container.innerHTML = ''; // Limpiar el contenedor
    fruitsToDisplay.forEach(fruit => {
        const fruitDiv = document.createElement('div');
        fruitDiv.className = 'fruit';
        fruitDiv.innerHTML = `<img src="${fruit.image}" alt="${fruit.name}"> <span>${fruit.name}</span>`;
        container.appendChild(fruitDiv);
    });
}

// Función para filtrar frutas
function filterFruits() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredFruits = fruits.filter(fruit => fruit.name.toLowerCase().includes(searchInput));
    displayFruits(filteredFruits);
}

// Mostrar todas las frutas al cargar la página
displayFruits(fruits);