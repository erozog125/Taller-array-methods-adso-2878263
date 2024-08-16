const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
const colorSelect = document.getElementById('color-select');
colors.forEach(color => {
    const option = document.createElement('option');
    option.textContent = color;
    colorSelect.appendChild(option);
});

colorSelect.addEventListener('change', function() {
    const selectedColor = colorSelect.value;

    document.body.style.backgroundColor = selectedColor;

});

