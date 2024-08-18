const fruits = [
    {
        fruit: "Bananas",
        id: 1,
        image: "assets/Fruits/Bananas.jpg"
    },
    {
        fruit: "Cereza",
        id: 2,
        image: "assets/Fruits/cereza.png"
    },
    {
        fruit: "Pera",
        id: 3,
        image: "assets/Fruits/fresas.jpg"
    },
    {
        fruit: "Mango",
        id: 4,
        image: "assets/Fruits/mango.jpg"
    },
    {
        fruit: "Fresas",
        id: 5,
        image: "assets/Fruits/fresas.jpg"
    },
    {
        fruit: "Naranja",
        id: 6,
        image: "assets/Fruits/naranja.jpg"
    },
    {
        fruit: "Piña",
        id: 7,
        image: "assets/Fruits/piña.jpg"
    }
];

const inputPrompt = document.getElementById('inputText');
const buttonPrompt = document.getElementById('searchButton');
const result = document.getElementById('result');

buttonPrompt.addEventListener('click', searchFruit);

function searchFruit() {
    const value = inputPrompt.value.toLowerCase();
    const resultFilter = fruits.filter(fruit => fruit.fruit.toLowerCase().includes(value));

    if (resultFilter.length > 0) {
        result.innerHTML = resultFilter.map(fruit => `
            <div>
                <p>${fruit.fruit}</p>
                <img src="${fruit.image}" alt="${fruit.fruit}" style="width:100px;height:auto;">
            </div>
        `);
    } else {
        result.innerHTML = 'No se encontraron resultados.';
    }
}