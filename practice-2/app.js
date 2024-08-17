const fruits = [
    {
        fruit: 'manzana',
        id: 1,
        image: 'assets/images/manzana-red.jpg'
    },
    {
        fruit: 'banano',
        id: 2,
        image: 'assets/images/bananos.jpg'
    },
    {
        fruit: 'mandarina',
        id: 3,
        image: 'assets/images/mandarina.jpg'
    },
    {
        fruit: 'sandia',
        id: 4,
        image: 'assets/images/sandia.jpg'
    },
    {
        fruit: 'kiwi',
        id: 5,
        image: 'assets/images/kiwi.jpg'
    }
];

const inputPrompt = document.getElementById('input-text');
const buttonPrompt = document.getElementById('search-btn');
const result = document.getElementById('result');

buttonPrompt.addEventListener('click', searchFruit);

function searchFruit() {
    const value = inputPrompt.value.toLowerCase();
    
    if (value === '') {
        result.innerHTML = 'La caja de texto está vacía.';
        return;
    }

    const resultFilter = fruits.filter(fruitResult => fruitResult.fruit.toLowerCase().includes(value));

    if (resultFilter.length > 0) {
        result.innerHTML = resultFilter.map(fruitResult => `
            <div>
                <p>${fruitResult.fruit}</p>
                <img src="${fruitResult.image}"style="width:100px;height:auto;">
            </div>
        `);
    } else {
        result.innerHTML = 'No se encontraron resultados.';
    }
}

// Dado un Array de frutas, realiza un buscador por medio de input tipo text, filtrando por medio de la fruta ingresada,
// recuerda que también existen los métodos para string. NOTA: Deeben construir el propio array. Mínimo 15 elementos,
// para este caso nos mostrará el nombre de la fruta con su imagen