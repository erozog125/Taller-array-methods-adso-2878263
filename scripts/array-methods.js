/* BACKGROUND */

/*function changeColor() {
  const colorSelector = document.getElementById("colorSelector");
  document.body.style.backgroundColor = selectedColor;
}*/

document.getElementById("colorSelector").addEventListener("change", function() {
  document.body.style.backgroundColor = this.value;
});

window.addEventListener("load", function() {
  const colorSelector = document.getElementById("colorSelector");
  colorSelector.value = "white";
  changeColor(); // Cambia el fondo a blanco
});

/* FILTER */

const fruits = [
  { name: "Manzana", image: "/assets/images/manzana.jpeg" },
  { name: "Banana", image: "/assets/images/banana.jpeg" },
  { name: "Naranja", image: "/assets/images/naranja.jpeg" },
  { name: "Fresa", image: "/assets/images/fresa.jpeg" },
  { name: "Uva", image: "/assets/images/uva.jpeg" },
  { name: "Sandía", image: "/assets/images/sandia.jpeg" },
  { name: "Melón", image: "/assets/images/melon.jpeg" },
  { name: "Durazno", image: "/assets/images/durazno.jpeg" },
  { name: "Pera", image: "/assets/images/pera.jpeg" },
  { name: "Mango", image: "/assets/images/mango.jpeg" },
  { name: "Piña", image: "/assets/images/piña.jpeg" },
  { name: "Arandano", image: "/assets/images/arandano.jpeg" },
  { name: "Kiwi", image: "/assets/images/kiwi.jpeg" },
  { name: "Cereza", image: "/assets/images/cereza.jpeg"},
  { name: "Papaya", image: "/assets/images/papaya.jpeg" },
];

function displayFruits(filteredFruits) {
  const fruitsContainer = document.getElementById("fruitsContainer");
  fruitsContainer.innerHTML = "";
  filteredFruits.forEach(fruit => {
    const fruitCard = document.createElement("div");
    fruitCard.classList.add("fruit-card");
    fruitCard.innerHTML = `
          <img src="${fruit.image}" alt="${fruit.name}">
          <p>${fruit.name}</p>
      `;
    fruitsContainer.appendChild(fruitCard);
  });
}

function filterFruits() {
  const searchValue = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const filteredFruits = fruits.filter(fruit =>
    fruit.name.toLowerCase().includes(searchValue)
  );
  displayFruits(filteredFruits);
}

// Inicialmente mostrar todas las frutas
displayFruits(fruits);
