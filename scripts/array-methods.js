/*function changeColor() {
  const colorSelector = document.getElementById("colorSelector");
  document.body.style.backgroundColor = selectedColor;
}*/

document.getElementById("colorSelector").addEventListener("change", function() {
  document.body.style.backgroundColor = this.value;
});

window.addEventListener('load', function() {
  const colorSelector = document.getElementById('colorSelector');
  colorSelector.value = 'white';
  changeColor();  // Cambia el fondo a blanco
});
