document.getElementById('backgroundSelector').addEventListener('change', function() {
    const selectedColor = this.value === 'default' ? 'white' : this.value; // Establecer color 
    document.body.style.backgroundColor = selectedColor; // Cambiar el color d f
    document.getElementById('selectedColor').innerText = selectedColor; // Actualizar texto 
    document.getElementById('confirmationMessage').style.display = 'block'; // Mostrar mensaje d f
});