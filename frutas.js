const fruits = [
    { name: 'Manzana', image: 'assets/img/manzana.jpg' },
    { name: 'Banana', image: 'assets/img/Banana.jpg' },
    { name: 'Naranja', image: 'assets/img/naranja.jpg' },
    { name: 'Fresa', image: 'assets/img/fresa.jpg' },
    { name: 'Kiwi', image: 'assets/img/kiwi.jpg' },
    { name: 'Uva', image: 'assets/img/uva.jpg' },
    { name: 'Pera', image: 'assets/img/pera.jpg' },
    { name: 'Piña', image: 'assets/img/pina.jpg' },
    { name: 'Mango', image: 'assets/img/Mango.jpg' },
    { name: 'Cereza', image: 'assets/img/cereza.jpg' },
    { name: 'Melón', image: 'assets/img/melon.jpg' },
    { name: 'Papaya', image: 'assets/img/papaya.jpg' },
    { name: 'Coco', image: 'assets/img/coco.jpg' },
    { name: 'Durazno', image: 'assets/img/duraznos.jpg' },
    { name: 'Granada', image: 'assets/img/granada.jpg' }
];

const fruitInput = document.getElementById('fruitInput');
const fruitList = document.getElementById('fruitList');

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

function renderFruits(filteredFruits) {
    const fragment = document.createDocumentFragment();
    filteredFruits.forEach(fruit => {
        const fruitItem = document.createElement('div');
        fruitItem.className = 'fruit-item';
        fruitItem.innerHTML = `
            <img src="${fruit.image}" alt="${fruit.name}">
            <p>${fruit.name}</p>
        `;
        fragment.appendChild(fruitItem);
    });
    fruitList.innerHTML = '';
    fruitList.appendChild(fragment);
}

const searchFruits = debounce(function() {
    const searchTerm = this.value.toLowerCase();
    const filteredFruits = fruits.filter(fruit => 
        fruit.name.toLowerCase().includes(searchTerm)
    );
    renderFruits(filteredFruits);
}, 300);

fruitInput.addEventListener('input', searchFruits);

// Mostrar todas las frutas al cargar la página
renderFruits(fruits);