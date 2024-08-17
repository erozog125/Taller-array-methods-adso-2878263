const fruits = [
    { name: 'Manzana', image: 'assets/img/manzana.webp' },
    { name: 'Banana', image: 'assets/img/banana.webp' },
    { name: 'Naranja', image: 'assets/img/naranja.jpg' },
    { name: 'Fresa', image: 'assets/img/fresa.jpg' },
    { name: 'Kiwi', image: 'assets/img/kiwi.jpg' },
    { name: 'Uva', image: 'assets/img/uva.jpg' },
    { name: 'Pera', image: 'assets/img/pera.webp' },
    { name: 'Piña', image: 'assets/img/piña.jpg' },
    { name: 'Mango', image: 'assets/img/mango.jpg' },
    { name: 'Cereza', image: 'assets/img/cereza.jpg' },
    { name: 'Melón', image: 'assets/img/melon.jpg' },
    { name: 'Papaya', image: 'assets/img/papaya.jpg' },
    { name: 'Coco', image: 'assets/img/coco.webp' },
    { name: 'Durazno', image: 'assets/img/durazno.jpg' },
    { name: 'Granada', image: 'assets/img/granada.jpg' }
];

const fruitInput = document.getElementById('fruitInput');
const fruitList = document.getElementById('fruitList');

function displayFruits() {
    fruitList.innerHTML = '';

    fruits.forEach(fruit => {
        const fruitItem = document.createElement('div');
        fruitItem.className = 'fruit-item';
        fruitItem.innerHTML = `
            <img src="${fruit.image}" alt="${fruit.name}">
            <p>${fruit.name}</p>
        `;
        fruitList.appendChild(fruitItem);
    });
}

fruitInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredFruits = fruits.filter(fruit => 
        fruit.name.toLowerCase().includes(searchTerm)
    );

    fruitList.innerHTML = '';

    filteredFruits.forEach(fruit => {
        const fruitItem = document.createElement('div');
        fruitItem.className = 'fruit-item';
        fruitItem.innerHTML = `
            <img src="${fruit.image}" alt="${fruit.name}">
            <p>${fruit.name}</p>
        `;
        fruitList.appendChild(fruitItem);
    });
});


document.addEventListener('DOMContentLoaded', displayFruits);