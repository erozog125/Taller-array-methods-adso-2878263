// -- ejercicio con una lista de arreglos
const colorSelector = document.getElementById('colorSelector');

const arrayColors = ["blue","red","Orange","violet", "brown", "green"]

function changeBackgroundColor() {

    const selectedIndex = parseInt(colorSelector.value);
    
    const selectedColor = arrayColors[selectedIndex];

    document.body.style.backgroundColor = selectedColor;
}

colorSelector.addEventListener('change', changeBackgroundColor);


/* ESTA MANERA ES PARA HACER SIN ARREGLOS
const colorSelector = document.getElementById('colorSelector');

function changeBackgroundColor() {

    const selectedColor = colorSelector.value;

    document.body.style.backgroundColor = selectedColor;
}

colorSelector.addEventListener('change', changeBackgroundColor);
*/