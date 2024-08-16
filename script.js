
const colores = ['azul', 'rojo', 'naranja', 'violeta', 'marron', 'verde'];

const colorSelector = document.getElementById('colorSelector');


colores.forEach(color => {
    const option = document.createElement('option');
    option.value = color;
    option.textContent = color.charAt(0).toUpperCase() + color.slice(1);
    colorSelector.appendChild(option);
});


colorSelector.addEventListener('change', function() {
    const selectedColor = colorSelector.value;
    document.body.style.backgroundColor = selectedColor;
});
