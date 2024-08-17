// Array de 
 const fruits = [
    {
        product: "Manzana",
        id: 1,
        image: "assets/assets/manzanas.jpg"// Asegúrate de que el archivo exista en esta ruta
    },
    {
        product: "Fresa",
        id: 2,
        image: "assets/assets/Fresas.jpg"// Asegúrate de que el archivo exista en esta ruta
    },
    {
        product: "Pera",
        id: 3,
        image: "assets/assets/Pera.jpg"// Asegúrate de que el archivo exista en esta ruta
    },
    {
        product: "Mango",
        id: 4,
        image: "assets/assets/Mango.jpg"// Asegúrate de que el archivo exista en esta ruta
    },
    {
        product: "Cereza",
        id: 5,
        image: "assets/assets/cerezas.jpg"// Asegúrate de que el archivo exista en esta ruta
    },
    {
        product: "Naranja",
        id: 6,
        image: "assets/assets/Naranaja.jpg"// Asegúrate de que el archivo exista en esta ruta
    },
    {
        product: "Piña",
        id: 7,
        image: "assets/assets/piña.jpg"// Asegúrate de que el archivo exista en esta ruta
    }
]

// Seleccionar el campo de búsqueda, el contenedor de resultados y el botón de búsquedaconst searchInput = document.getElementById('search');
const resultDiv = document.getElementById('result');
const searchButton = document.getElementById('search-button');

// Función para buscar y mostrar la frutafunctionsearchFruit() {
    const searchValue = searchInput.value.toLowerCase();
    
    // Limpiar el contenido anterior
    resultDiv.innerHTML = '';

    // Buscar en la listaconst foundFruit = fruits.find(fruit => fruit.product.toLowerCase().includes(searchValue));

    if (foundFruit) {
        // Mostrar el resultado
        resultDiv.innerHTML = `
            <h2>${foundFruit.product}</h2>
            <img src="${foundFruit.image}" alt="${foundFruit.product}">
        `;
    } else {
        resultDiv.innerHTML = '<p>No se encontró ninguna fruta con ese nombre.</p>';
    }


// Añadir un listener al botón de búsqueda
searchButton.addEventListener('click', searchFruit);

// Opcional: Añadir un listener al campo de búsqueda para realizar búsqueda en tiempo real
searchInput.addEventListener('input', searchFruit);
