//ejercicio 2
const arrayFruits = [
    'None','Mango','Cereza','Banano','Fresa','Uva','Limón',
    'Manzana','Pera','Sandia','Mora','Piña','Coco','Mandarina','Melón','kiwi',
]

const selectFruit = document.getElementById('selectFruit');

selectFruit.addEventListener('change',changeFruit);

function changeFruit() {
    const fruit = arrayFruits.find(fruit => fruit === selectFruit.value)
    console.log(fruit);
document.getElementById("imgFruit").src = `assets/fruits/${fruit}.png`;
}


