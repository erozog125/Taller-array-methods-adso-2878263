import { fruits } from "./fruit.js";

const container = document.getElementById("section-fruit");
let searchfruit = document.getElementById("search");
let countChange = 0;
let imgContent;
let nameFruit;
let divCard;
searchfruit.addEventListener("change", function () {
  countChange++;
  const resultSearch = fruits.find(
    (fruit) => fruit.nombre.toLowerCase() == searchfruit.value
  );

  createFruitCard(resultSearch);
});

function createFruitCard(resultSearch) {
  if (countChange < 2) {
    divCard = document.createElement("div");
    divCard.classList.add("result-Search");
    divCard.id = resultSearch.id;

    imgContent = document.createElement("img");
    imgContent.alt = resultSearch.nombre;
    imgContent.src = resultSearch.image;

    nameFruit = document.createElement("h2");
    nameFruit.textContent = resultSearch.nombre;

    divCard.appendChild(imgContent);
    divCard.appendChild(nameFruit);
    container.appendChild(divCard);
  } else {
    updateFruit(resultSearch);
  }

  function updateFruit(resultSearch) {
    let cardFruit = document.getElementById(resultSearch.id);

    cardFruit.querySelector("img").alt = resultSearch.nombre;
    cardFruit.querySelector("img").alt = resultSearch.image;
    cardFruit.querySelector("h2").textContent = resultSearch.nombre;
  }
}
