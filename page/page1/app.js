const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
const colorSelect = document.getElementById('color-select');

colors.forEach(color => {
    const option = document.createElement('option');
    option.value = color;
    option.textContent = color.charAt(0).toUpperCase() + color.slice(1);
    colorSelect.appendChild(option);
});

colorSelect.addEventListener('change', function() {
    const selectedColor = colorSelect.value;
    if (selectedColor) {
        document.body.style.backgroundColor = selectedColor;
    } else {
        document.body.style.backgroundColor = ''; // Reestablecer el color de fondo
    }
});