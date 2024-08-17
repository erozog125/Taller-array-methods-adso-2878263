import { fruits } from "./fruit.js"

const container = document.getElementById('section-fruit')
let searchfruit = document.getElementById('search')
searchfruit.addEventListener('change', function (){
    const resultSearch = fruits.find(fruit => fruit.nombre.toLowerCase() == searchfruit.value)
    
    createFruitCard(resultSearch)
})

function createFruitCard(resultSearch){
    const divCard = document.createElement("div")
    divCard.classList.add("result-Search")
    divCard.id= resultSearch.id

    const imgContent = document.createElement("img")
    imgContent.alt = resultSearch.nombre
    imgContent.src = resultSearch.image

    const nameFruit = document.createElement("h2")
    nameFruit.textContent = resultSearch.nombre

    divCard.appendChild(imgContent)
    divCard.appendChild(nameFruit)
    container.appendChild(divCard)

}