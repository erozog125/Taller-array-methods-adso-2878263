const frutas = [
    { nombre: "Manzana", imagen: "assets/images/manzana.jpg" },
    { nombre: "banano", imagen: "assets/images/banano.jpg" },
    { nombre: "Naranja", imagen: "assets/images/naranja.jpg" },
    { nombre: "Fresa", imagen: "assets/images/fresa.jpg" },
    { nombre: "Uva", imagen: "assets/images/uva.jpg" },
    { nombre: "Piña", imagen: "assets/images/pina.jpg" },
    { nombre: "Mango", imagen: "assets/images/mango.jpg" },
    { nombre: "Sandía", imagen: "assets/images/sandia.jpg" },
    { nombre: "Melón", imagen: "assets/images/melon.jpg" },
    { nombre: "Cereza", imagen: "assets/images/cereza.jpg" },
    { nombre: "Pera", imagen: "assets/images/pera.jpg" },
    { nombre: "Kiwi", imagen: "assets/images/kiwi.jpg" },
    { nombre: "Papaya", imagen: "assets/images/papaya.jpg" },
    { nombre: "Limón", imagen: "assets/images/limon.jpg" },
    { nombre: "Coco", imagen: "assets/images/coco.jpg" }
];

const searchInput = document.getElementById('searchInput');
const fruitContainer = document.getElementById('fruitContainer');

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const searchValue = searchInput.value.trim().toLowerCase();
        fruitContainer.innerHTML = '';

        if (searchValue) {
            
            const filteredFruits = frutas.filter(fruit => 
                fruit.nombre.toLowerCase().includes(searchValue)
            );

            if (filteredFruits.length > 0) {
                filteredFruits.forEach(fruit => {
                    const fruitItem = document.createElement('div');
                    fruitItem.classList.add('fruit-item');
                    
                    const fruitImage = document.createElement('img');
                    fruitImage.src = fruit.imagen;
                    fruitImage.alt = fruit.nombre;
                    
                    const fruitName = document.createElement('span');
                    fruitName.textContent = fruit.nombre;

                    fruitItem.appendChild(fruitImage);
                    fruitItem.appendChild(fruitName);
                    fruitContainer.appendChild(fruitItem);
                });
            } else {
                fruitContainer.innerHTML = '<p>No se encontraron frutas</p>';
            }
        }
    }
});
