const fruits = [
    { nombre: 'Manzana', imagen: 'Assets/manzana.jfif' },
    { nombre: 'Banana', imagen: 'Assets/banana.jfif' },
    { nombre: 'Naranja', imagen: 'Assets/naranja.jfif' },
    { nombre: 'Fresa', imagen: 'Assets/fresa.jfif' },
    { nombre: 'Uva', imagen: 'Assets/uva.jfif' },
    { nombre: 'Piña', imagen: 'Assets/piña,jfif' },
    { nombre: 'Melón', imagen: 'Assets/melon.jfif' },
    { nombre: 'Sandía', imagen: 'Assets/sandia.jfif' },
    { nombre: 'Coco', imagen: 'Assets/coco.jfif' },
    { nombre: 'Durazno', imagen: 'Assets/durazno.jfif' },
    { nombre: 'Pera', imagen: 'Assets/pera.jfif' },
    { nombre: 'Kiwi', imagen: 'Assets/kiwi.jfif' },
    { nombre: 'Mango', imagen: 'Assets/mango.jfif' },
    { nombre: 'Mora', imagen: 'Assets/mora.jfif' },
    { nombre: 'Guayaba', imagen: 'Assets/guayaba.jfif' },
];

function filterFruits() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const filteredFruits = fruits.filter(fruit => fruit.nombre.toLowerCase().includes(input));
    const fruitList = document.getElementById('fruitList');
    fruitList.innerHTML = '';

    filteredFruits.forEach(fruit => {
        const fruitCard = document.createElement('div');
        fruitCard.className = 'fruit-card';
        fruitCard.innerHTML = `
            <img src="${fruit.imagen}" alt="${fruit.nombre}">
            <p>${fruit.nombre}</p>
        `;
        fruitList.appendChild(fruitCard);
    });
}

