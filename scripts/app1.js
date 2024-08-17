//ejercicio 1
const arrayColors = ['black','blue','red','orange','violet','brown','green']

const selectColor = document.getElementById('selectColor');

selectColor.addEventListener('change',changeColor);

function changeColor() {
     const color = arrayColors.find(color => color === selectColor.value)
     console.log(color);
     document.querySelector('body').style.backgroundColor = color
}
