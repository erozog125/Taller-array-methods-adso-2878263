
// Array de colores
const colors = ["blue", "red", "orange", "violet", "brown", "green"];

// Obtener el elemento select
const colorSelect = document.getElementById("colorSelect");

// Agregar opciones dinámicamente al select
colors.forEach(color => {
    const option = document.createElement('option');
    option.value = color;
    option.textContent = color.charAt(0).toUpperCase() + color.slice(1);
    colorSelect.appendChild(option);
});

// Manejar el cambio de selección
colorSelect.addEventListener('change', function() {
    const selectedColor = colorSelect.value;
    if (selectedColor) {
        document.body.style.backgroundColor = selectedColor;
    } else {
        document.body.style.backgroundColor = ''; // Reestablecer el color de fondo
    }
});