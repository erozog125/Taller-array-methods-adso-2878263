import { fruits } from "./fruit.js"

let searchfruit = document.getElementById('search')
searchfruit.addEventListener('change', function (){
    const resultSearch = fruits.find(fruit => fruit.nombre.toLowerCase() == searchfruit.value)
    console.log(resultSearch.nombre)
})