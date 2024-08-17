console.log("Archivo JavaScript cargado correctamente");

document.getElementById('listColor').addEventListener('change', function() {
    const selectedColor = this.value;
    document.body.style.backgroundColor = selectedColor;
});




