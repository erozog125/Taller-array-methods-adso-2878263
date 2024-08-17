
const color = document.getElementById('select-colors')
const arrayColors = ["yellow", "blue", "red", "green","orange", "purple"]
let prueba;

color.addEventListener('change', function (){
    const resultColor = arrayColors.find(element => element == color.value)
    console.log(resultColor)
    console.log(color.value)

    document.body.style.backgroundColor = resultColor
})